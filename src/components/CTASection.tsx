'use client';

import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
  offerText?: string;
  backgroundImage?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  headline = 'הצטרפו למכון כושר אלפא עוד היום',
  subheadline = 'אימונים מותאמים אישית, מאמנים מקצועיים ואווירה תומכת',
  buttonText = 'קבע תור עכשיו',
  offerText = 'אימון ניסיון חינם + ייעוץ תזונה אישי',
  backgroundImage = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
}) => {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32 text-right" dir="rtl">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-black/40 backdrop-blur-sm" />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-2xl mr-auto">
          {/* Glass card container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {headline}
            </h2>
            
            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/90 mb-8">
              {subheadline}
            </p>
            
            {/* Special offer */}
            <div className="mb-8 bg-white/15 rounded-xl p-4 border border-white/20">
              <p className="text-white font-medium flex items-center">
                <span className="inline-block w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3 shadow-[0_4px_10px_rgba(150,206,180,0.5)]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                  </svg>
                </span>
                {offerText}
              </p>
            </div>
            
            {/* CTA Button */}
            <motion.button
              className={clsx(
                "w-full md:w-auto px-8 py-4 text-lg font-bold text-white rounded-xl",
                "bg-primary hover:bg-primary/90 transition-all duration-300",
                "shadow-[0_8px_15px_rgba(150,206,180,0.3)]",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black/50"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {buttonText}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;