import { QuoteRequestInput } from '@aquamarine/shared';
export declare class QuoteService {
    /**
     * Create a new quote request from a public form submission.
     * Handles creating the Customer and Address if they don't exist (based on email/phone matching?),
     * but for now, for guests, we'll just create new records or append if logged in.
     * Since this is a public endpoint, we assume it's a "guest" or purely new lead.
     */
    static createQuote(data: QuoteRequestInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        frequency: string | null;
        detailsJson: string | null;
        totalPrice: number | null;
        customerId: string;
        addressId: string;
    }>;
    static getAllQuotes(): Promise<({
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
            quoteId: string;
            serviceId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        frequency: string | null;
        detailsJson: string | null;
        totalPrice: number | null;
        customerId: string;
        addressId: string;
    })[]>;
    static getQuoteById(id: string): Promise<({
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
            quoteId: string;
            serviceId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        frequency: string | null;
        detailsJson: string | null;
        totalPrice: number | null;
        customerId: string;
        addressId: string;
    }) | null>;
}
//# sourceMappingURL=quote.service.d.ts.map