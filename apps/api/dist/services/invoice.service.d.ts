interface CreateInvoiceInput {
    customerId: string;
    jobId?: string;
    items: {
        description: string;
        amount: number;
    }[];
    taxRate?: number;
}
export declare class InvoiceService {
    static createInvoice(data: CreateInvoiceInput): Promise<{
        id: string;
        createdAt: Date;
        status: string;
        customerId: string;
        jobId: string | null;
        invoiceNumber: string;
        subtotal: number;
        tax: number;
        total: number;
        issuedAt: Date;
        dueAt: Date;
    }>;
    static getInvoices(customerId?: string): Promise<({
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
        job: {
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
        } | null;
    } & {
        id: string;
        createdAt: Date;
        status: string;
        customerId: string;
        jobId: string | null;
        invoiceNumber: string;
        subtotal: number;
        tax: number;
        total: number;
        issuedAt: Date;
        dueAt: Date;
    })[]>;
    static getInvoiceById(id: string): Promise<({
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
        job: {
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
        } | null;
    } & {
        id: string;
        createdAt: Date;
        status: string;
        customerId: string;
        jobId: string | null;
        invoiceNumber: string;
        subtotal: number;
        tax: number;
        total: number;
        issuedAt: Date;
        dueAt: Date;
    }) | null>;
}
export {};
//# sourceMappingURL=invoice.service.d.ts.map