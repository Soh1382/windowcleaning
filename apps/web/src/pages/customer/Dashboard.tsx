import { LayoutDashboard, Calendar, Settings, CreditCard } from 'lucide-react';
import { Button } from '../../components/ui/Button';

// Mock data
const nextClean = { date: '12th Oct', time: 'Morning Round (8am - 12pm)', est: 'approx 10:30am' };
const invoices = [
  { id: 'INV-1023', date: '14 Sep 2023', amount: '£15.00', status: 'PAID' },
  { id: 'INV-0988', date: '16 Aug 2023', amount: '£15.00', status: 'PAID' },
];

const CUSTOMER_NAV = [
  { label: 'My Clean', href: '/portal', icon: LayoutDashboard },
  { label: 'Schedule', href: '/portal/schedule', icon: Calendar },
  { label: 'Invoices', href: '/portal/invoices', icon: CreditCard },
  { label: 'Profile', href: '/portal/profile', icon: Settings },
];

export default function CustomerDashboard() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-secondary-900 mb-4">Next Scheduled Clean</h2>
        <div className="flex items-center justify-between">
            <div>
               <div className="text-3xl font-bold text-primary-600 mb-2">{nextClean.date}</div>
               <div className="text-secondary-600">{nextClean.time}</div>
               <div className="text-sm text-secondary-400 mt-1">Estimated: {nextClean.est}</div>
            </div>
            <div className="text-right">
                <Button variant="outline">Request Change</Button>
            </div>
        </div>
      </div>

       <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-secondary-900 mb-4">Recent Invoices</h2>
        <table className="min-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Invoice</th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Date</th>
                    <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Amount</th>
                    <th className="text-right text-xs font-medium text-gray-500 uppercase tracking-wider py-2">Status</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {invoices.map(inv => (
                    <tr key={inv.id}>
                        <td className="py-3 text-sm font-medium text-secondary-900">{inv.id}</td>
                        <td className="py-3 text-sm text-secondary-600">{inv.date}</td>
                        <td className="py-3 text-sm text-secondary-900">{inv.amount}</td>
                        <td className="py-3 text-sm text-right">
                            <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                                {inv.status}
                            </span>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}

export { CUSTOMER_NAV };
