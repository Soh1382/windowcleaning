import { Request, Response } from 'express';
import { ZodError } from 'zod';
import { quoteRequestSchema } from '@aquamarine/shared';
import { QuoteService } from '../services/quote.service';

export class QuoteController {
  static async requestQuote(req: Request, res: Response) {
    try {
      const data = quoteRequestSchema.parse(req.body);
      const quote = await QuoteService.createQuote(data);
      res.status(201).json(quote);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ errors: (error as any).errors });
      }
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async getQuotes(_req: Request, res: Response) {
    try {
      // TODO: Add pagination and filters
      const quotes = await QuoteService.getAllQuotes();
      res.json(quotes);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async getQuote(req: Request, res: Response) {
     try {
       const quote = await QuoteService.getQuoteById(req.params.id);
       if (!quote) return res.status(404).json({ message: 'Quote not found' });
       res.json(quote);
     } catch (error) {
       res.status(500).json({ message: 'Internal server error' });
     }
  }
}
