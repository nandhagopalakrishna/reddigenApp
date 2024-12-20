import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  'AI-Powered Viral Posts',
  'Engagement pools',
  'Smart Comment Automation'
];

export default function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-24 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {features.map((text, index) => (
          index === currentIndex && (
            <motion.div
              key={text}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-full transform"
            >
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#9333EA] via-[#FF6B8B] to-[#FF8C7A] text-transparent bg-clip-text bg-[size:200%] animate-gradient tracking-wide">
                {text}
              </span>
            </motion.div>
          )
        ))}
      </AnimatePresence>
    </div>
  );
}