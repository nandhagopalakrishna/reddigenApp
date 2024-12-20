import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import { useLoopsForm } from '../hooks/useLoopsForm';

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const { formState, handleSubmit, resetForm } = useLoopsForm();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(formData.email, formData.name);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-xl mx-auto pt-8">
        <Link 
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to home
        </Link>

        <div className="bg-[#111] rounded-2xl p-8 md:p-12">
          <div className="inline-block px-4 py-1 bg-[#ff4500]/10 rounded-full text-[#ff4500] text-sm font-medium mb-8">
            Early Access
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join the Waitlist
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Be among the first to experience the future of Reddit marketing
          </p>

          {formState.isSuccess ? (
            <div className="text-center">
              <p className="text-xl text-[#ff4500] mb-6">Thanks! We'll be in touch!</p>
              <button
                onClick={resetForm}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 bg-[#1a1a1a] rounded-lg border transition-colors text-white ${
                    formState.isError ? 'border-red-500' : 'border-gray-800 focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500]'
                  }`}
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                  disabled={formState.isLoading}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 bg-[#1a1a1a] rounded-lg border transition-colors text-white ${
                    formState.isError ? 'border-red-500' : 'border-gray-800 focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500]'
                  }`}
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                  disabled={formState.isLoading}
                />
              </div>

              {formState.isError && (
                <p className="text-red-500 text-sm">{formState.errorMessage}</p>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-[#ff4500] text-white py-4 rounded-lg font-medium transition-colors flex items-center justify-center group ${
                  formState.isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-[#ff5500]'
                }`}
                type="submit"
                disabled={formState.isLoading}
              >
                {formState.isLoading ? 'Please wait...' : 'Join the Waitlist'}
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </motion.button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}