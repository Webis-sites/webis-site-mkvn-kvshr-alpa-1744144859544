'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ className }) => {
  return (
    <section 
      dir="rtl" 
      className={clsx(
        "py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-white to-gray-50",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="glassmorphism-container rounded-3xl overflow-hidden p-1">
          <div className="glassmorphism-inner rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Image Column */}
              <motion.div 
                className="order-2 md:order-1 h-full min-h-[300px] md:min-h-[500px] relative rounded-2xl overflow-hidden neumorphic-image"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
                  alt="מכון כושר אלפא - מתקני כושר מודרניים"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
              
              {/* Content Column */}
              <motion.div 
                className="order-1 md:order-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="neumorphic-card p-8 rounded-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                    <span className="text-primary">אודות</span> מכון כושר אלפא
                  </h2>
                  
                  <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                    אנחנו מכון כושר מוביל בתחום הבריאות עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="corporate-card">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">ההיסטוריה שלנו</h3>
                      <p className="text-gray-600">
                        מכון כושר אלפא נוסד בשנת 2010 מתוך חזון להנגיש אימוני כושר איכותיים לכל אדם. מאז, הפכנו למוקד מרכזי לאורח חיים בריא ופעיל.
                      </p>
                    </div>
                    
                    <div className="corporate-card">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">הערכים שלנו</h3>
                      <p className="text-gray-600">
                        אנו מאמינים במקצועיות, יושרה ויחס אישי. כל מתאמן מקבל תשומת לב מלאה וליווי צמוד להשגת המטרות האישיות שלו.
                      </p>
                    </div>
                    
                    <div className="corporate-card">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">המומחיות שלנו</h3>
                      <p className="text-gray-600">
                        הצוות שלנו מורכב ממאמנים מוסמכים בעלי ניסיון רב בתחומים מגוונים - מאימוני כוח, דרך אירובי ועד תזונה נכונה וליווי אישי.
                      </p>
                    </div>
                  </div>
                  
                  <motion.button 
                    className="mt-8 neumorphic-button px-8 py-3 rounded-full text-white bg-primary hover:bg-primary/90 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    קרא עוד עלינו
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;