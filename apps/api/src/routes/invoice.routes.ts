import { Router } from 'express';
import { InvoiceController } from '../controllers/invoice.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { UserRole } from '@aquamarine/shared';

const router = Router();

router.use(authenticate);

// Admin routes
router.get('/', authorize([UserRole.ADMIN, UserRole.STAFF]), InvoiceController.getInvoices);

// Customer routes
router.get('/my', InvoiceController.getMyInvoices);

export default router;
