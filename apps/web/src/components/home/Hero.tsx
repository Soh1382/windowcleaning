import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <div className="relative bg-secondary-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Window Cleaner"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/90 to-secondary-900/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 text-primary-400 font-semibold tracking-wider uppercase text-sm mb-4">
            <span className="w-8 h-0.5 bg-primary-400" />
            <span>Family-Owned • Local • High Quality</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white drop-shadow-lg">
            Spotless, Streak-Free Windows in <span className="text-primary-400 drop-shadow-md">Huddersfield</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-200 mb-8 max-w-2xl leading-relaxed">
            We provide professional residential and commercial window cleaning services. 
            Reliable, safe, and fully insured. Get your property looking its best today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/quote">
              <Button size="lg" className="w-full sm:w-auto text-lg shadow-lg hover:shadow-primary-500/25">
                Get a Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg border-white text-white hover:bg-white/10 hover:border-white">
                Call 07979 790482
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center space-x-6 text-sm text-secondary-300">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              5-Star Rated
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Fully Insured
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Satisfaction Guaranteed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
