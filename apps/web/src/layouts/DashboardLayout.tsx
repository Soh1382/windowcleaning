import { type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, FileText, Settings, LogOut, type LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

interface DashboardLayoutProps {
  children: ReactNode;
  navItems?: NavItem[];
  title?: string;
}

const ADMIN_NAV_ITEMS = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Jobs', href: '/dashboard/jobs', icon: Calendar },
  { label: 'Customers', href: '/dashboard/customers', icon: Users },
  { label: 'Quotes', href: '/dashboard/quotes', icon: FileText },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export const DashboardLayout = ({ children, navItems = ADMIN_NAV_ITEMS, title = 'Aquamarine Admin' }: DashboardLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary-900 text-white flex-shrink-0 hidden md:flex flex-col">
        <div className="p-6">
          <h1 className="text-xl font-bold text-primary-400">{title}</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'bg-primary-600 text-white' 
                    : 'text-secondary-300 hover:bg-secondary-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-secondary-800">
          <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-secondary-300 hover:text-white hover:bg-secondary-800 rounded-md transition-colors">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm border-b border-gray-200 py-4 px-6 flex justify-between items-center md:hidden">
           <h1 className="text-lg font-bold text-secondary-900">{title}</h1>
           {/* Mobile menu toggle would go here */}
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
