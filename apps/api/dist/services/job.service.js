import prisma from '../utils/prisma';
import { JobStatus, QuoteStatus } from '@aquamarine/shared';
import { addWeeks } from 'date-fns';
export class JobService {
    static async createJob(data) {
        return prisma.$transaction(async (tx) => {
            // Create the job
            const job = await tx.job.create({
                data: {
                    customerId: data.customerId,
                    addressId: data.addressId,
                    status: JobStatus.SCHEDULED,
                    scheduledStart: data.scheduledStart,
                    // default 1 hour duration for simple MVP logic
                    scheduledEnd: new Date(data.scheduledStart.getTime() + 60 * 60 * 1000),
                }
            });
            // Create job items
            // Assuming naive 1-to-1 mapping for simplicity or bulk create
            // For MVP, we might look up service details, but here we assume simple creation
            for (const serviceId of data.serviceIds) {
                await tx.jobItem.create({
                    data: {
                        jobId: job.id,
                        serviceId: serviceId,
                        price: data.price, // This might need per-service price logic
                        quantity: 1
                    }
                });
            }
            return job;
        });
    }
    static async completeJob(jobId) {
        return prisma.$transaction(async (tx) => {
            const job = await tx.job.findUnique({
                where: { id: jobId },
                include: { customer: true, address: true, items: true }
            });
            if (!job)
                throw new Error('Job not found');
            // Update status
            const updatedJob = await tx.job.update({
                where: { id: jobId },
                data: { status: JobStatus.COMPLETED }
            });
            // TODO: Create Invoice (Next task)
            // Handle Recurring Logic
            // Check if there is an active Quote/Agreement with frequency?
            // For now, let's assume we check the Quote linked to this customer/address?
            // Or just check if the job itself implies recursion (we didn't store frequency on Job, but maybe on Quote).
            // Heuristic: Find accepted quote for this address
            const quote = await tx.quote.findFirst({
                where: {
                    customerId: job.customerId,
                    addressId: job.addressId,
                    status: QuoteStatus.ACCEPTED
                }
            });
            if (quote && quote.frequency && quote.frequency !== 'ONE_OFF') {
                // Calculate next date
                let nextDate = new Date(); // now
                if (job.scheduledStart) {
                    nextDate = new Date(job.scheduledStart);
                }
                if (quote.frequency === 'WEEKLY_4') {
                    nextDate = addWeeks(nextDate, 4);
                }
                else if (quote.frequency === 'WEEKLY_8') {
                    nextDate = addWeeks(nextDate, 8);
                }
                // Create next job
                await tx.job.create({
                    data: {
                        customerId: job.customerId,
                        addressId: job.addressId,
                        status: JobStatus.SCHEDULED,
                        scheduledStart: nextDate,
                        scheduledEnd: new Date(nextDate.getTime() + 60 * 60 * 1000),
                    }
                });
                // Note: Should duplicate items too.
            }
            return updatedJob;
        });
    }
    static async getJobs(filter) {
        // Basic filter implementation
        const where = {};
        if (filter?.status) {
            where.status = filter.status;
        }
        // Date filtering would go here (e.g. range)
        return prisma.job.findMany({
            where,
            include: {
                customer: true,
                address: true,
                items: { include: { service: true } }
            },
            orderBy: { scheduledStart: 'asc' }
        });
    }
}
