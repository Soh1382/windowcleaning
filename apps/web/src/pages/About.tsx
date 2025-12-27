import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import aboutHeaderBg from '../assets/about_header_bg.png';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative py-32 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url(${aboutHeaderBg})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
          }}
        />
        
        {/* Gradient Overlay - Warm/Friendly tone */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-800/75 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-tight">
            About Aquamarine
          </h1>
          <p className="text-xl md:text-2xl text-primary-50 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Your local, family-owned window cleaning experts in Huddersfield.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg text-secondary-600 mx-auto">
          <h2 className="text-3xl font-bold text-secondary-900 mb-6">Our Story</h2>
          <p>
            Founded in Huddersfield, Aquamarine Window Cleaning started with a simple mission: to provide the most reliable, highest quality window cleaning service in West Yorkshire. What began as a one-man operation with a ladder and a bucket has grown into a professional team using state-of-the-art water-fed pole technology.
          </p>
          <p>
            Despite our growth, we have never lost sight of our core values. We are still family-owned, we still treat every home as if it were our own, and we are still obsessed with streak-free results.
          </p>
          
          <h2 className="text-3xl font-bold text-secondary-900 mt-12 mb-6">Why "Aquamarine"?</h2>
          <p>
            The name reflects our commitment to using pure water technology. Unlike traditional methods that use soaps (which leave sticky residues that attract dirt), our system uses 100% purified, de-ionised water. This dries naturally to a crystal-clear finish without any chemicals.
          </p>

          <h2 className="text-3xl font-bold text-secondary-900 mt-12 mb-6">Our Promise</h2>
          <ul className="space-y-4 list-none pl-0">
             <li className="flex items-start">
               <span className="text-primary-500 mr-2 font-bold">✓</span>
               <span><strong>Reliability:</strong> We turn up when we say we will. We send you a text the day before.</span>
             </li>
             <li className="flex items-start">
               <span className="text-primary-500 mr-2 font-bold">✓</span>
               <span><strong>Quality:</strong> We clean frames, sills, and doors as standard, not just the glass.</span>
             </li>
             <li className="flex items-start">
               <span className="text-primary-500 mr-2 font-bold">✓</span>
               <span><strong>Safety:</strong> We work from the ground using extendable poles, protecting your privacy and property.</span>
             </li>
             <li className="flex items-start">
               <span className="text-primary-500 mr-2 font-bold">✓</span>
               <span><strong>Guarantee:</strong> If you're not happy, let us know within 24 hours and we'll reclean for free.</span>
             </li>
          </ul>
        </div>

        <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Join hundreds of happy customers</h3>
            <div className="flex justify-center gap-4">
               <Link to="/quote">
                 <Button size="lg">Get a Quote</Button>
               </Link>
               <Link to="/contact">
                 <Button variant="outline" size="lg">Contact Us</Button>
               </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;
