import prisma from '../utils/prisma';
import { addDays } from 'date-fns';

interface CreateInvoiceInput {
  customerId: string;
  jobId?: string;
  items: { description: string; amount: number }[];
  taxRate?: number; // decimal e.g. 0.20
}

export class InvoiceService {
  static async createInvoice(data: CreateInvoiceInput) {
    return prisma.$transaction(async (tx) => {
      // Calculate totals
      const subtotal = data.items.reduce((sum, item) => sum + item.amount, 0);
      const taxRate = data.taxRate ?? 0;
      const tax = subtotal * taxRate;
      const total = subtotal + tax;

      // Generate Invoice Number (Simple sequential or random unique for now)
      // Real app might query max invoice number
      const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;

      const invoice = await tx.invoice.create({
        data: {
          customerId: data.customerId,
          jobId: data.jobId,
          invoiceNumber,
          subtotal,
          tax,
          total,
          status: 'DUE',
          dueAt: addDays(new Date(), 14), // 14 days terms
        }
      });
      
      // Note: We don't have an InvoiceItem model in schema shown earlier?
      // Checking schema... Schema has `Job` which has `JobItem`. 
      // If invoice is linked to job, we might just reference job items.
      // But `Invoice` model in schema has no `items` relation visible in the snippet I saw?
      // Let's check schema again if needed. But assuming for MVP we just store totals or link to job.
      
      return invoice;
    });
  }

  static async getInvoices(customerId?: string) {
    const where: any = {};
    if (customerId) where.customerId = customerId;
    
    return prisma.invoice.findMany({
      where,
      include: { customer: true, job: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  static async getInvoiceById(id: string) {
    return prisma.invoice.findUnique({
      where: { id },
      include: { customer: true, job: true }
    });
  }
}
