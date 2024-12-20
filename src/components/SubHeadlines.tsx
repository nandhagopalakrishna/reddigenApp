import React from 'react';
import { motion } from 'framer-motion';

const text = "Post Smarter with AI, Trend Faster with Engagement Pools, Sell More with 24/7 Comments";

export default function SubHeadlines() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="max-w-2xl mx-auto mt-4 mb-6 text-center px-4"
    >
      <p className="text-lg md:text-xl font-medium text-gray-200 leading-relaxed tracking-wide">
        {text}
      </p>
    </motion.div>
  );
}