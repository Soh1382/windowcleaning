import { ServiceCard } from '../components/home/ServiceCard';
import { Droplets, Home as HomeIcon, Building2, PaintBucket } from 'lucide-react';

const ServicesIndex = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 mb-6">Our Services</h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Professional exterior cleaning solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
           <ServiceCard 
              title="Residential Windows" 
              description="Regular maintenance cleans for homes of all sizes. Frames, sills, and doors included as standard."
              icon={<HomeIcon className="w-6 h-6" />}
              link="/services/residential"
            />
            <ServiceCard 
              title="Commercial Cleaning" 
              description="Reliable service for offices, shops, and schools. RAMS provided + fully insured."
              icon={<Building2 className="w-6 h-6" />}
              link="/services/commercial"
            />
            <ServiceCard 
              title="Conservatory Valets" 
              description="Bring your conservatory back to life with our full roof and windows deep clean."
              icon={<Droplets className="w-6 h-6" />}
              link="/services/conservatory"
            />
            <ServiceCard 
              title="Gutters & Facias" 
              description="Gutter clearing and fascia/soffit washing to prevent damage and improve appearance."
              icon={<PaintBucket className="w-6 h-6" />}
              link="/services/gutters"
            />
        </div>
      </div>
    </div>
  );
};

export default ServicesIndex;
