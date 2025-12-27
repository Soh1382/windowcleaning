import { Users, Calendar, DollarSign, TrendingUp } from 'lucide-react';

const stats = [
  { name: 'Total Revenue', value: '£12,345', change: '+12%', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-100' },
  { name: 'Active Customers', value: '128', change: '+4%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-100' },
  { name: 'Jobs This Week', value: '42', change: '+8%', icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-100' },
  { name: 'Conversion Rate', value: '24.5%', change: '+2%', icon: TrendingUp, color: 'text-yellow-600', bg: 'bg-yellow-100' },
];

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-secondary-900 mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex items-center">
            <div className={`p-4 rounded-full ${stat.bg} ${stat.color} mr-4`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-secondary-500">{stat.name}</p>
              <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
              <span className="text-xs font-medium text-green-600">{stat.change} from last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-96">
            <h2 className="text-lg font-bold text-secondary-900 mb-4">Revenue Trend</h2>
            <div className="flex items-center justify-center h-full text-secondary-400 bg-secondary-50 rounded">
                Chart Placeholder
            </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 h-96">
            <h2 className="text-lg font-bold text-secondary-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center text-sm border-b border-gray-100 pb-2 last:border-0">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="font-medium mr-2">New Quote Request</span>
                        <span className="text-secondary-500">from John Doe</span>
                        <span className="ml-auto text-secondary-400 text-xs">2 hours ago</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
}
