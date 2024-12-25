import React from 'react';
import { Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

import { scrollToSection } from '../utils/scroll';

export default function Footer() {
  return (
    <footer id="footer" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo and description section */}
          <div className="col-span-1 text-center md:text-left">
            <div className="flex items-center space-x-2">
              <img src="https://i.imghippo.com/files/IEv6086SE.png" alt="Reddigen Logo" className="w-8 h-8" />
              <span className="text-xl font-bold">reddigen</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm md:text-base">
              Turn Reddit into your most powerful lead generation channel with our AI-powered automation tool.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              <a 
                href="https://x.com/NandhaCreator" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links sections container */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => scrollToSection('features')} 
                    className="text-gray-400 hover:text-white text-sm md:text-base transition-colors duration-200"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('faq')} 
                    className="text-gray-400 hover:text-white text-sm md:text-base transition-colors duration-200"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('pricing')} 
                    className="text-gray-400 hover:text-white text-sm md:text-base transition-colors duration-200"
                  >
                    Pricing
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="mailto:nandhagopalakrishnan3@gmail.com" 
                    className="text-gray-400 hover:text-white text-sm md:text-base transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
              <ul className="space-y-3">
                <li><Link to="/privacy" className="text-gray-400 hover:text-white text-sm md:text-base">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-400 hover:text-white text-sm md:text-base">Terms of Service</Link></li>
                <li><Link to="/refund" className="text-gray-400 hover:text-white text-sm md:text-base">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright section */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Reddigen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}