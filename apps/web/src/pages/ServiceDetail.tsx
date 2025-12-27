import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import serviceHeaderBg from '../assets/service_header_bg.png';

// Placeholder data - in a real app this would come from an API or config
const services = {
  residential: {
    title: 'Residential Window Cleaning',
    description: 'Keep your home looking bright and beautiful with our regular cleaning service.',
    features: ['Frames and sills cleaned', 'Pure water system', 'Hard to reach windows', 'Reliable 4 or 8 weekly schedule'],
    price: 'From £15'
  },
  commercial: {
    title: 'Commercial Window Cleaning',
    description: 'Professional image for your business premises.',
    features: ['Offices', 'Schools', 'Retail', 'Risk Assessments provided'],
    price: 'Custom Quote'
  },
  conservatory: {
    title: 'Conservatory Valet',
    description: 'Restore your conservatory to its former glory.',
    features: ['Roof panels cleaned', 'Finials and cresting', 'Gutters cleared', 'Inside and Out options'],
    price: 'From £60'
  },
  gutters: {
    title: 'Gutter Cleaning & Facias',
    description: 'Protect your property from water damage.',
    features: ['Debris removal', 'Downpipes unblocked', 'Soffits washed', 'Camera inspection'],
    price: 'From £40'
  }
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: keyof typeof services }>();
  const service = slug ? services[slug] : null;

  if (!service) {
    return <div className="p-20 text-center">Service not found</div>;
  }

  return (
    <div className="bg-white">
      <div className="relative py-32 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url(${serviceHeaderBg})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        />
        
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 via-secondary-800/75 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight leading-tight">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            {service.description}
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">What's Included?</h2>
            <ul className="space-y-4">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center text-secondary-700">
                  <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
             <div className="mt-8 p-6 bg-primary-50 rounded-lg">
              <p className="text-lg font-bold text-secondary-900">Pricing: {service.price}</p>
              <p className="text-sm text-secondary-600 mt-2">Final price depends on property size and frequency.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-secondary-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Ready to book?</h3>
            <p className="text-center text-secondary-600 mb-6">Get a free, no-obligation quote in minutes.</p>
            <Button size="lg" className="w-full">Get a Quote Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
