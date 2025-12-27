import { Request, Response } from 'express';
import { JobService } from '../services/job.service';

export class JobController {
  
  static async getJobs(req: Request, res: Response) {
    try {
      const status = req.query.status as string;
      const jobs = await JobService.getJobs({ status });
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  static async completeJob(req: Request, res: Response) {
      try {
          const { id } = req.params;
          const job = await JobService.completeJob(id);
          res.json(job);
      } catch (error) {
          res.status(500).json({ message: 'Internal server error' });
      }
  }

  // TODO: createJob endpoint (usually called by admin or system)
}
