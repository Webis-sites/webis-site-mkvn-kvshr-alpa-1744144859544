'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

interface Trainer {
  id: number;
  name: string;
  specialization: string;
  bio: string;
  image: string;
  socialMedia: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
}

const TrainersSection: React.FC = () => {
  const [hoveredTrainer, setHoveredTrainer] = useState<number | null>(null);

  const trainers: Trainer[] = [
    {
      id: 1,
      name: 'דניאל כהן',
      specialization: 'אימון כוח',
      bio: 'מאמן מקצועי עם ניסיון של 10 שנים בתחום אימוני הכוח. מתמחה בבניית תוכניות אימון מותאמות אישית.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      socialMedia: {
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 2,
      name: 'מיכל לוי',
      specialization: 'יוגה ופילאטיס',
      bio: 'מדריכת יוגה ופילאטיס מוסמכת. מלמדת טכניקות נשימה ותנועה לשיפור הגמישות והכוח הפנימי.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      socialMedia: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 3,
      name: 'עומר אברהם',
      specialization: 'תזונה ספורטיבית',
      bio: 'דיאטן קליני ויועץ תזונה ספורטיבית. עוזר למתאמנים להשיג את יעדי הכושר שלהם באמצעות תזונה מאוזנת.',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      socialMedia: {
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
      },
    },
    {
      id: 4,
      name: 'נועה ישראלי',
      specialization: 'אימון פונקציונלי',
      bio: 'מאמנת אישית המתמחה באימונים פונקציונליים. מסייעת למתאמנים לשפר את היכולות היומיומיות שלהם.',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      socialMedia: {
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
      },
    },
    {
      id: 5,
      name: 'אלון שמש',
      specialization: 'אימון אינטרוולים',
      bio: 'מאמן כושר המתמחה באימוני אינטרוולים בעצימות גבוהה. מסייע למתאמנים להגיע לשיאים חדשים.',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      socialMedia: {
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
        facebook: 'https://facebook.com',
      },
    },
  ];

  return (
    <section className="relative py-16 px-4 md:px-8 bg-gray-50 overflow-hidden rtl" dir="rtl">
      {/* Glassmorphism background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-primary-300/30 to-primary-500/30 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-primary-200/20 to-primary-400/20 blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            הצוות המקצועי שלנו
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: '120px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary-500 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            המאמנים המקצועיים שלנו מחויבים להוביל אתכם להשיג את היעדים שלכם. כל אחד מהם מתמחה בתחום שונה כדי לתת לכם את המענה המושלם.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: trainer.id * 0.1 }}
              onMouseEnter={() => setHoveredTrainer(trainer.id)}
              onMouseLeave={() => setHoveredTrainer(null)}
              className="relative group"
            >
              <div className="relative h-full rounded-2xl overflow-hidden bg-white backdrop-blur-sm bg-opacity-70 shadow-neomorphic transition-all duration-300 hover:shadow-neomorphic-hover">
                <div className="relative h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 right-0 left-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                    <p className="text-primary-300 font-medium">{trainer.specialization}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed">{trainer.bio}</p>
                  
                  <div className="flex justify-end space-x-4 space-x-reverse">
                    {trainer.socialMedia.instagram && (
                      <a 
                        href={trainer.socialMedia.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="text-lg" />
                      </a>
                    )}
                    {trainer.socialMedia.linkedin && (
                      <a 
                        href={trainer.socialMedia.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn className="text-lg" />
                      </a>
                    )}
                    {trainer.socialMedia.facebook && (
                      <a 
                        href={trainer.socialMedia.facebook} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 hover:bg-primary-500 hover:text-white transition-colors duration-300"
                        aria-label="Facebook"
                      >
                        <FaFacebookF className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Glassmorphism border effect */}
                <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block px-8 py-4 rounded-full bg-primary-500 text-white font-medium shadow-neomorphic-button hover:shadow-neomorphic-button-hover transition-all duration-300 hover:bg-primary-600"
          >
            קבע פגישת היכרות
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainersSection;