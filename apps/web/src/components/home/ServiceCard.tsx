import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-secondary-100 p-6 hover:shadow-md transition-shadow group">
      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-secondary-900">{title}</h3>
      <p className="text-secondary-600 mb-4 leading-relaxed">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
      >
        Learn more <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};
