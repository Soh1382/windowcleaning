import { useState } from 'react';
import { Calendar as CalendarIcon, User } from 'lucide-react';
import { Button } from '../../components/ui/Button';

// Mock types for now until we share types properly
interface Job {
  id: string;
  status: string;
  scheduledStart: string;
  customer: { name: string; email?: string };
  address: { line1: string; postcode: string };
  items: { service: { name: string } }[];
}

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    status: 'SCHEDULED',
    scheduledStart: new Date().toISOString(),
    customer: { name: 'John Doe', email: 'john@example.com' },
    address: { line1: '123 High St', postcode: 'HD1 1AA' },
    items: [{ service: { name: 'Residential Clean' } }]
  },
  {
    id: '2',
    status: 'COMPLETED',
    scheduledStart: new Date(Date.now() - 86400000).toISOString(),
    customer: { name: 'Jane Smith', email: 'jane@example.com' },
    address: { line1: '45 Green Ln', postcode: 'HD3 4BB' },
    items: [{ service: { name: 'Gutter Clean' } }]
  }
];

export default function AdminJobs() {
  const [jobs] = useState<Job[]>(MOCK_JOBS);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-secondary-900">Job Management</h1>
        <Button>+ New Job</Button>
      </div>

      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    job.status === 'COMPLETED' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {job.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 mr-3">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{job.customer.name}</div>
                      <div className="text-sm text-gray-500">{job.address.postcode}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {job.items.map(i => i.service.name).join(', ')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                   <div className="flex items-center">
                     <CalendarIcon className="w-4 h-4 mr-1 text-gray-400" />
                     {new Date(job.scheduledStart).toLocaleDateString()}
                   </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-900">Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
