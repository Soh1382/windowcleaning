import { JobService } from '../services/job.service';
export class JobController {
    static async getJobs(req, res) {
        try {
            const status = req.query.status;
            const jobs = await JobService.getJobs({ status });
            res.json(jobs);
        }
        catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
    static async completeJob(req, res) {
        try {
            const { id } = req.params;
            const job = await JobService.completeJob(id);
            res.json(job);
        }
        catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
