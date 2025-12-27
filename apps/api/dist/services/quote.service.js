import prisma from '../utils/prisma';
import { QuoteStatus } from '@aquamarine/shared';
export class QuoteService {
    /**
     * Create a new quote request from a public form submission.
     * Handles creating the Customer and Address if they don't exist (based on email/phone matching?),
     * but for now, for guests, we'll just create new records or append if logged in.
     * Since this is a public endpoint, we assume it's a "guest" or purely new lead.
     */
    static async createQuote(data) {
        return prisma.$transaction(async (tx) => {
            // 1. Create or Find Customer (For now, simple create. In a real app, dedup logic needed)
            // minimal dedup: check if email exists on a USER. If so, link it?
            // simple approach: just create a customer record for the lead.
            const customer = await tx.customer.create({
                data: {
                    name: `${data.firstName} ${data.lastName}`,
                    email: data.email,
                    phone: data.phone,
                    preferredContact: 'EMAIL'
                }
            });
            // 2. Create Address
            const address = await tx.address.create({
                data: {
                    customerId: customer.id,
                    line1: data.addressLine1,
                    city: 'Huddersfield', // defaulting for local business
                    postcode: data.postcode,
                    notes: `Property Type: ${data.propertyType}`
                }
            });
            // 3. Create Quote
            const quote = await tx.quote.create({
                data: {
                    customerId: customer.id,
                    addressId: address.id,
                    status: QuoteStatus.NEW,
                    frequency: data.frequency,
                    detailsJson: JSON.stringify({
                        notes: data.notes,
                        propertyType: data.propertyType
                    })
                }
            });
            // 4. Create Quote Items (Services)
            // We need to find the Service IDs for the requested service types.
            // If they don't exist, we might default or skip.
            // For this MVP, let's ensure we have services. If not found, create placeholder items?
            // Better: Lookup service by name.
            for (const serviceName of data.serviceTypes) {
                // Try to find service
                let service = await tx.service.findFirst({
                    where: { name: serviceName }
                });
                // If not found, create it (auto-seeding for MVP convenience)
                if (!service) {
                    service = await tx.service.create({
                        data: {
                            name: serviceName,
                            description: 'Auto-created from quote request'
                        }
                    });
                }
                await tx.quoteItem.create({
                    data: {
                        quoteId: quote.id,
                        serviceId: service.id,
                        price: 0 // To be quoted by admin
                    }
                });
            }
            return quote;
        });
    }
    static async getAllQuotes() {
        return prisma.quote.findMany({
            include: {
                customer: true,
                address: true,
                items: {
                    include: { service: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
    }
    static async getQuoteById(id) {
        return prisma.quote.findUnique({
            where: { id },
            include: {
                customer: true,
                address: true,
                items: {
                    include: { service: true }
                }
            }
        });
    }
}
