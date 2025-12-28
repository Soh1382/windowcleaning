import { useState, useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { ServiceCard } from '../components/home/ServiceCard';
import { Droplets, Home as HomeIcon, Building2, PaintBucket } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const reviews = [
  {
    name: "John D.",
    location: "Lindley, Huddersfield",
    text: "Absolutely fantastic service. My windows have never looked this clean. The online booking and payment system makes it so easy to manage.",
    initials: "JD"
  },
  {
    name: "Sarah M.",
    location: "Holmfirth",
    text: "Reliable, friendly and very professional. The pure water system they use really does make a huge difference. Highly recommended!",
    initials: "SM"
  },
  {
    name: "David P.",
    location: "Marsh",
    text: "Great job on the conservatory roof. It looked brand new again. Will definitely be using Aquamarine for regular window cleaning from now on.",
    initials: "DP"
  }
];

const Home = () => {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Professional Cleaning Services</h2>
            <p className="text-lg text-secondary-600">
              We offer more than just window cleaning. Our comprehensive exterior cleaning services help maintain your property's value and curb appeal.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </section>

      {/* Trust/About Snippet */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary-900 rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Wave Animation Background */}
             <div className="absolute inset-x-0 bottom-0 h-48 opacity-20 pointer-events-none overflow-hidden z-0">
               <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
                 <path fill="#22d3ee" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    <animate attributeName="d" dur="10s" repeatCount="indefinite"
                      values="
                        M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                        M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,229.3C960,213,1056,171,1152,160C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                        M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                      "
                    />
                 </path>
               </svg>
               <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" style={{ animationDelay: '-5s' }}>
                <path fill="#0891b2" fillOpacity="0.5" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,160C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  <animate attributeName="d" dur="15s" repeatCount="indefinite"
                    values="
                      M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,160C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                      M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,149.3C672,160,768,224,864,240C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
                      M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,160C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z
                    "
                  />
                </path>
               </svg>
             </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-900/10 transform skew-x-12 translate-x-1/4 z-0" />
            <div className="grid md:grid-cols-2 gap-12 p-12 lg:p-16 relative z-10 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Why Choose Aquamarine?</h2>
                <div className="space-y-4 text-secondary-200">
                  <p>
                    Aquamarine Window Cleaning is a family-owned business dedicated to serving Huddersfield and the surrounding areas with pride. We combine traditional values with modern technology.
                  </p>
                  <ul className="space-y-3 mt-6">
                    {['Reliable 4 or 8-weekly schedule', 'Pure water technology for streak-free results', 'Frames and sills included every time', 'Easy online payments and booking'].map((item, i) => (
                      <li key={i} className="flex items-center text-white">
                        <span className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8">
                  <Link to="/about">
                    <Button variant="outline" className="text-white border-white hover:bg-white/10">Read Our Story</Button>
                  </Link>
                </div>
              </div>
              <div className="text-white bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 relative overflow-hidden transition-all duration-500">
                <div key={currentReview} className="animate-fade-in">
                  <div className="flex items-center mb-6">
                     <div className="flex text-yellow-400">
                       {[...Array(5)].map((_, i) => (
                         <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                         </svg>
                       ))}
                     </div>
                     <span className="ml-2 font-bold">5.0 / 5.0</span>
                  </div>
                  <blockquote className="text-lg font-medium mb-6 italic min-h-[80px]">
                    "{reviews[currentReview].text}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold">
                        {reviews[currentReview].initials}
                    </div>
                    <div className="ml-3">
                      <div className="font-bold">{reviews[currentReview].name}</div>
                      <div className="text-sm text-secondary-400">{reviews[currentReview].location}</div>
                    </div>
                  </div>
                </div>
                
                {/* Pagination Dots */}
                <div className="flex gap-2 mt-6 justify-center">
                    {reviews.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setCurrentReview(idx)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentReview === idx ? 'bg-primary-400 w-6' : 'bg-white/20 hover:bg-white/40'}`}
                            aria-label={`Go to review ${idx + 1}`}
                        />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary-600">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-sm">
            Ready for Sparkling Clean Windows?
          </h2>
          <p className="text-primary-50 text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Get an instant price estimate online and book your first clean in under 60 seconds.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link to="/quote" className="group">
              <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50 w-full sm:w-auto px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                Get Instant Quote
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-2 border-primary-200 text-white hover:bg-white/10 w-full sm:w-auto px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
