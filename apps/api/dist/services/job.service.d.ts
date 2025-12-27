interface CreateJobInput {
    customerId: string;
    addressId: string;
    scheduledStart: Date;
    frequency?: string;
    serviceIds: string[];
    price: number;
}
export declare class JobService {
    static createJob(data: CreateJobInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        customerId: string;
        addressId: string;
        notes: string | null;
        scheduledStart: Date | null;
        scheduledEnd: Date | null;
        assignedStaffId: string | null;
    }>;
    static completeJob(jobId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        customerId: string;
        addressId: string;
        notes: string | null;
        scheduledStart: Date | null;
        scheduledEnd: Date | null;
        assignedStaffId: string | null;
    }>;
    static getJobs(filter?: {
        status?: string;
        date?: string;
    }): Promise<({
        customer: {
            userId: string | null;
            id: string;
            email: string | null;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            phone: string | null;
            preferredContact: string;
        };
        address: {
            id: string;
            createdAt: Date;
            customerId: string;
            line1: string;
            line2: string | null;
            city: string;
            postcode: string;
            notes: string | null;
        };
        items: ({
            service: {
                id: string;
                createdAt: Date;
                name: string;
                description: string | null;
                basePrice: number | null;
                isActive: boolean;
            };
        } & {
            id: string;
            notes: string | null;
            quantity: number;
            price: number;
            serviceId: string;
            jobId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        customerId: string;
        addressId: string;
        notes: string | null;
        scheduledStart: Date | null;
        scheduledEnd: Date | null;
        assignedStaffId: string | null;
    })[]>;
}
export {};
//# sourceMappingURL=job.service.d.ts.map