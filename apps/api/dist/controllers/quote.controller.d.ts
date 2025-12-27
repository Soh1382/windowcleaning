import { Request, Response } from 'express';
export declare class QuoteController {
    static requestQuote(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static getQuotes(_req: Request, res: Response): Promise<void>;
    static getQuote(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=quote.controller.d.ts.map