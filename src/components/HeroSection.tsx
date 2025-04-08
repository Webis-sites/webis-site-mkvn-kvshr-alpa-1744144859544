'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section 
      className={clsx(
        'relative min-h-[80vh] flex items-center justify-center overflow-hidden rtl',
        className
      )}
      dir="rtl"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="רקע מכון כושר"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 md:px-8 text-center">
        <div className="glassmorphism-card max-w-3xl mx-auto py-12 px-8 rounded-2xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-primary text-xl md:text-2xl font-bold">מכון כושר אלפא</h2>
          </motion.div>
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            מכון כושר מוביל בישראל
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-10 max-w-xl mx-auto"
          >
            חווית לקוח מושלמת בכל ביקור
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button 
              className="neumorphic-button bg-primary text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full text-lg transition-all duration-300 hover:bg-opacity-90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              onClick={() => console.log('CTA clicked')}
            >
              קבע תור עכשיו
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;