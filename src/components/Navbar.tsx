import React from 'react';
import { Menu } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';
import { scrollToSection } from '../utils/scroll';
import { useScrollBehavior } from '../hooks/useScrollDirection';
import { usePromoBanner } from '../contexts/PromoBannerContext';

export default function Navbar() {
  const navigate = useNavigate();
  const { scrollDirection, showNavbar } = useScrollBehavior();
  const { isVisible } = usePromoBanner();

  return (
    <nav className={`fixed w-full bg-black text-white z-40 transition-all duration-300 ${
      isVisible ? 'top-8 md:top-12' : 'top-0'
    } ${
      !showNavbar ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex-shrink-0 font-bold text-xl">
            reddigen
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('footer')} 
                className="hover:text-gray-300 transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => navigate('/waitlist')}
                className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
          
          <div className="block md:hidden">
            <button 
              onClick={() => navigate('/waitlist')}
              className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors text-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}