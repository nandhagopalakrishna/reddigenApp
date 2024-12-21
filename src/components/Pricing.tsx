import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import styles from './Button.module.css';

const lifetimeFeatures = [
  "AI-Powered Viral Post Generator",
  "Exclusive Access to Engagement Pools",
  "24/7 Smart Comment Automation",
  "Advanced Keyword Search",
  "Priority Support"
];

const monthlyFeatures = [
  "AI-Powered Viral Post Generator",
  "Exclusive Access to Engagement Pools",
  "24/7 Smart Comment Automation",
  "Email Support"
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-24 scroll-mt-20" id="pricing">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <AnimatedSection>
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <div className="bg-gradient-to-r from-[#ff4500]/20 to-[#ff6b6b]/20 backdrop-blur-sm rounded-full px-6 py-2 border border-[#ff4500]/30">
              <span className="text-sm md:text-base font-medium bg-gradient-to-r from-[#ff4500] to-[#ff6b6b] bg-clip-text text-transparent">
                🚀 Special Launch Pricing
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Close deals in minutes, not hours, with just a few minutes of setup
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Ideal for entrepreneurs, marketers, and dealmakers!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Monthly Plan Card */}
            <div className="bg-[#1a1a1a]/50 backdrop-blur rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-300 hover:bg-[#1a1a1a]/60">
              <h3 className="text-2xl font-bold mb-2 opacity-75">Monthly access</h3>
              <div className="flex items-center justify-center gap-2 mb-4 opacity-75">
                <span className="text-5xl font-bold text-gray-400">$39</span>
                <span className="text-lg">/month</span>
              </div>
              <p className="text-gray-500 mb-8">Monthly subscription</p>
              
              <div className="space-y-4 mb-8">
                {monthlyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-gray-400" />
                    </div>
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-gray-800 text-gray-300 py-4 rounded-lg font-medium opacity-75 cursor-not-allowed">
                Coming Soon
              </button>
              
              {/* Blur Overlay */}
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
            </div>

            {/* Lifetime Plan - Main Card */}
            <div className="bg-[#111] rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-2xl border border-[#ff4500]/20">
              <div className="relative md:absolute md:top-4 md:right-4 mb-4 md:mb-0">
                <span className="bg-gradient-to-r from-[#ff4500] to-[#ff6b6b] text-white px-4 py-1 rounded-full text-sm font-medium animate-pulse">
                  LIMITED TIME OFFER
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2">Lifetime access</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-gray-400 line-through text-xl">$499</span>
                <span className="text-5xl font-bold bg-gradient-to-r from-[#ff4500] to-[#ff6b6b] text-transparent bg-clip-text">$69</span>
              </div>
              <p className="text-gray-400 mb-8 text-sm md:text-base">One-time payment. No subscription</p>

            <div className="space-y-4 mb-8">
              {lifetimeFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start md:items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#ff4500]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#ff4500]" />
                  </div>
                  <span className="text-gray-300 text-sm md:text-base leading-tight md:leading-normal">{feature}</span>
                </motion.div>
              ))}
            </div>

            <button 
              onClick={() => navigate('/waitlist')}
              className="w-full bg-gradient-to-r from-[#ff4500] to-[#ff6b6b] text-white py-4 rounded-lg font-medium hover:opacity-90 transition-opacity transform hover:scale-[1.02] duration-200"
            >
              Start for free
            </button>
          </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}