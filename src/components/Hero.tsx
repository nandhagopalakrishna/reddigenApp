import React from 'react';
import AnimatedText from './AnimatedText';
import SubHeadlines from './SubHeadlines';
import Features from './Features';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import styles from './Button.module.css';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimatedSection>
          <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text tracking-tight leading-tight" itemProp="headline">
            Sell More on <span className="text-[#ff4500]">Reddit</span>
          </h1>
          <div className="mb-8">
            <p className="text-xl text-gray-400 mb-2 font-light tracking-wide" itemProp="description">with:</p>
            <AnimatedText />
            <SubHeadlines />
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <button
              className={`${styles.button} max-w-xs w-full`}
              onClick={() => navigate('/waitlist')}
            >
              <span className="flex items-center justify-center gap-2 font-medium">
                Join waitlist
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </span>
            </button>
            
          </div>
          <div className="mb-24"></div>
          <Features />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}