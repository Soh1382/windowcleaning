import { Router } from 'express';
import { JobController } from '../controllers/job.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';
import { UserRole } from '@aquamarine/shared';

const router = Router();

router.use(authenticate);
router.use(authorize([UserRole.ADMIN, UserRole.STAFF]));

router.get('/', JobController.getJobs);
router.post('/:id/complete', JobController.completeJob);

export default router;
