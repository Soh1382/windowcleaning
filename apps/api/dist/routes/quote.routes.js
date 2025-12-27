import { Router } from 'express';
import { QuoteController } from '../controllers/quote.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { UserRole } from '@aquamarine/shared';
const router = Router();
// Public route for requesting a quote
router.post('/request', QuoteController.requestQuote);
// Protected routes for admin
router.get('/', authenticate, authorize([UserRole.ADMIN, UserRole.STAFF]), QuoteController.getQuotes);
router.get('/:id', authenticate, authorize([UserRole.ADMIN, UserRole.STAFF]), QuoteController.getQuote);
export default router;
