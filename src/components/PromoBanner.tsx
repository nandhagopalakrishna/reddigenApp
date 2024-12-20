import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { usePromoBanner } from '../contexts/PromoBannerContext';

const isMobile = () => window.innerWidth < 768;

export default function PromoBanner() {
  const { isVisible, setIsVisible } = usePromoBanner();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(isMobile());

  useEffect(() => {
    const handleResize = () => {
      setMobile(isMobile());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-[#ff4500] fixed w-full top-0 z-50"
      >
        <div className="w-full">
          <div className="max-w-[90rem] mx-auto px-4 py-1 md:py-2.5 flex items-center justify-between">
            <p className="text-white font-medium flex-1 text-center text-xs md:text-base">
              <span className="inline-block mr-1.5" style={{ fontSize: mobile ? '14px' : '16px' }}>🎉</span>
              Launch Week Special! Get lifetime deal for $49 instead of $29 per month
            </p>
            <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
              {!mobile && (
                <button
                  onClick={() => navigate('/waitlist')}
                  className="bg-white text-[#ff4500] rounded-full px-3 md:px-5 py-1 text-xs md:text-sm font-medium hover:bg-white/90 transition-colors whitespace-nowrap"
                >
                  Join waitlist
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsVisible(false)}
                className="text-white hover:bg-black/10 transition-colors rounded-md p-1 md:px-3 md:py-1 flex items-center gap-1 md:gap-1.5"
              >
                <span className="text-xs md:text-sm font-medium hidden md:inline">Hide</span>
                <span className="sr-only">Dismiss</span>
                <X className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}