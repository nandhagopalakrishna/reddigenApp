import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import styles from './Button.module.css';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-black text-white py-24 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#ff4500] opacity-10" />
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start Growing on{' '}
            <span className="text-[#ff4500]">Reddit</span>{' '}
            Today
          </h2>
          <h3 className="text-xl md:text-2xl text-gray-400 mb-8">
            Transform Your Strategy with AI-Powered Automation
          </h3>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Join countless marketers using Reddireach to boost engagement on Reddit. 
            Create viral posts, trend in subreddits, and drive sales with smart, 
            AI-driven tools—no expertise needed.
          </p>

          <button 
            onClick={() => navigate('/waitlist')}
            className={`${styles.button} max-w-xs w-full mx-auto`}
          >
            <span className="flex items-center justify-center gap-2 font-medium">
              Start for Free
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
        </AnimatedSection>
      </div>
    </section>
  );
}