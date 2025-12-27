import { Request, Response } from 'express';
import { InvoiceService } from '../services/invoice.service';

export class InvoiceController {
  
  static async getInvoices(_req: Request, res: Response) {
      try {
          // If customer, limit to their invoices (TODO: extract from token)
          // For now, assuming admin or logic handles checks
          const invoices = await InvoiceService.getInvoices();
          res.json(invoices);
      } catch (error) {
          res.status(500).json({ message: 'Internal server error' });
      }
  }

  static async getMyInvoices(_req: Request, res: Response) {
    try {
        // const user = (req as any).user;
        // Need to find customerId from userId. 
        // This logic belongs in Access Control layer or Service lookup
        // For MVP, we'll placeholder.
        res.status(501).json({ message: 'Not implemented yet' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
  }
}
