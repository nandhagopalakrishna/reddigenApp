import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import styles from './Button.module.css';

const features = [
  {
    title: "Craft Viral Posts in Seconds with AI",
    description: "Let AI craft posts that grab attention and spark engagement in just seconds. Trained on 50,000+ viral Reddit posts, it's like having a social media expert at your fingertips—no guesswork needed.",
    align: "right"
  },
  {
    title: "Trend your Post in Minutes via Engagement Pools",
    description: "Boost your visibility with Reddit's first Engagement Pool. More upvotes, more interaction, and better chances of trending—all in just a few minutes.",
    align: "left"
  },
  {
    title: "Generate Sales 24/7 with Smart Comment Automation",
    description: "Let our AI scan Reddit 24/7 to identify potential leads, engage with them instantly through comments, and convert them - all without you lifting a finger.",
    align: "right"
  }
];

export default function Features() {
  const navigate = useNavigate();

  return (
    <div id="features" className="py-24 bg-black scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-40 md:space-y-48">
        {features.map((feature, index) => ( 
          <AnimatedSection key={index} delay={index * 0.2}>
            <div className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-16 md:gap-16`}>
            <div className="flex-1 text-white">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#ff4500] to-[#ff6b6b] bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-8 hidden md:block">
                <button 
                  onClick={() => navigate('/waitlist')}
                  className={`${styles.button} max-w-xs w-full md:w-auto`}
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
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <img
                  src="https://i.imghippo.com/files/P4135Y.gif"
                  alt="Feature illustration"
                  className="w-full max-w-lg rounded-lg shadow-2xl mb-8 sm:mb-0"
                />
                <div className="block md:hidden w-full sm:w-auto">
                  <button 
                    onClick={() => navigate('/waitlist')}
                    className={`${styles.button} max-w-none sm:max-w-[200px] w-full`}
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
                </div>
              </div>
            </div>

            </div>
          </AnimatedSection>
        ))}
        </div>
      </div>
    </div>
  );
}