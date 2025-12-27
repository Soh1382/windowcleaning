import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-primary-600 tracking-tight" onClick={() => setIsOpen(false)}>
          Aquamarine
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-secondary-800 hover:text-primary-600 font-medium transition-colors">Services</Link>
          <Link to="/about" className="text-secondary-800 hover:text-primary-600 font-medium transition-colors">About</Link>
          <Link to="/contact" className="text-secondary-800 hover:text-primary-600 font-medium transition-colors">Contact</Link>

          <Link to="/quote" className="bg-primary-500 text-white px-5 py-2.5 rounded-full shadow-lg hover:bg-primary-600 hover:shadow-primary-500/30 transition-all transform hover:-translate-y-0.5 font-bold">
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button with Rotation Animation */}
        <div className="md:hidden flex items-center z-50">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-secondary-800 hover:text-primary-600 focus:outline-none p-2 relative w-8 h-8 flex items-center justify-center group"
          >
            <div className="relative w-6 h-6 transform transition-all duration-300 ease-in-out">
               <Menu className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ease-in-out transform ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`} />
               <X className={`w-6 h-6 absolute top-0 left-0 transition-all duration-300 ease-in-out transform ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Smooth Slide Logic */}
      <div className={`md:hidden fixed inset-0 w-full h-screen bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
              <Link 
                to="/services" 
                onClick={() => setIsOpen(false)} 
                className={`text-3xl font-bold text-secondary-800 hover:text-primary-600 transition-all duration-500 delay-100 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)} 
                className={`text-3xl font-bold text-secondary-800 hover:text-primary-600 transition-all duration-500 delay-150 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)} 
                className={`text-3xl font-bold text-secondary-800 hover:text-primary-600 transition-all duration-500 delay-200 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
              >
                Contact
              </Link>

              <div className={`pt-8 w-full max-w-xs transition-all duration-500 delay-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
                <Link to="/quote" onClick={() => setIsOpen(false)} className="block w-full text-center bg-primary-500 text-white px-6 py-4 rounded-full shadow-lg font-bold text-xl hover:bg-primary-600 transition-colors">
                  Get a Quote
                </Link>
              </div>
          </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-secondary-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p>&copy; {new Date().getFullYear()} Aquamarine Window Cleaning. All rights reserved.</p>
    </div>
  </footer>
);

export const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
