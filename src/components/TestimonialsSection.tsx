'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import clsx from 'clsx';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  text: string;
  image: string;
  transformation?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'דניאל כהן',
    age: 32,
    text: 'מכון כושר אלפא שינה את חיי לחלוטין. אחרי חצי שנה של אימונים קבועים, הצלחתי להוריד 15 קילו ולבנות מסת שריר משמעותית. המאמנים האישיים מקצועיים ותמיד זמינים לעזור.',
    image: '/testimonials/daniel.jpg',
    transformation: 'ירידה של 15 ק"ג ב-6 חודשים'
  },
  {
    id: 2,
    name: 'מיכל לוי',
    age: 28,
    text: 'הגעתי למכון כושר אלפא אחרי לידה, במטרה לחזור לכושר. התוכנית האישית שבנו עבורי הייתה מדויקת לצרכים שלי, והתוצאות לא איחרו להגיע. האווירה במכון מדהימה ותומכת.',
    image: '/testimonials/michal.jpg',
    transformation: 'חזרה לכושר אחרי לידה תוך 3 חודשים'
  },
  {
    id: 3,
    name: 'אבי שמעוני',
    age: 45,
    text: 'בגיל 45 חשבתי שכבר מאוחר מדי להתחיל להתאמן, אבל המאמנים במכון כושר אלפא הוכיחו לי שטעיתי. אחרי שנה של אימונים קבועים, הכאבים בגב נעלמו ואני מרגיש צעיר ב-10 שנים.',
    image: '/testimonials/avi.jpg',
    transformation: 'שיפור משמעותי בכאבי גב כרוניים'
  },
  {
    id: 4,
    name: 'שירה גולן',
    age: 35,
    text: 'האימונים הקבוצתיים במכון כושר אלפא הם חוויה מדהימה. האנרגיה, המוזיקה והמאמנים המקצועיים הופכים כל אימון לחגיגה. מאז שהתחלתי להתאמן כאן, הכושר שלי השתפר פלאים.',
    image: '/testimonials/shira.jpg'
  },
  {
    id: 5,
    name: 'יוסי מזרחי',
    age: 29,
    text: 'התחלתי להתאמן במכון כושר אלפא לפני תחרות פיתוח גוף. המאמן האישי שלי ליווה אותי לאורך כל הדרך, והצלחתי להגיע למקום השני בתחרות! המקצועיות והידע במכון הם ברמה הגבוהה ביותר.',
    image: '/testimonials/yossi.jpg',
    transformation: 'זכייה במקום שני בתחרות פיתוח גוף ארצית'
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoplay]);

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  return (
    <section className="testimonials-section py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-white dark:bg-gray-900 rtl">
      <div className="glass-container max-w-6xl mx-auto rounded-2xl p-8 md:p-12 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-white/10 dark:from-gray-800/40 dark:to-gray-800/10 backdrop-blur-md rounded-2xl z-0 border border-white/20 dark:border-gray-700/20"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              מה הלקוחות שלנו אומרים
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card neumorphic-card"
              >
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="testimonial-image-container mb-6 md:mb-0">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden neumorphic-image">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="testimonial-content text-right flex-1">
                    <FaQuoteRight className="text-4xl text-primary mb-4 opacity-30" />
                    <p className="text-lg md:text-xl mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {testimonials[activeIndex].text}
                    </p>
                    
                    <div className="testimonial-info">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        גיל: {testimonials[activeIndex].age}
                      </p>
                      {testimonials[activeIndex].transformation && (
                        <div className="mt-2">
                          <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {testimonials[activeIndex].transformation}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="navigation-controls flex justify-center mt-8 gap-2">
              <button
                onClick={handlePrev}
                className="neumorphic-button-circle p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-300"
                aria-label="הקודם"
              >
                <FaChevronRight className="text-xl" />
              </button>
              
              <div className="dots-container flex items-center gap-2 mx-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={clsx(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === activeIndex
                        ? "bg-primary scale-125"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-primary/50"
                    )}
                    aria-label={`עבור לעדות ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="neumorphic-button-circle p-3 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary transition-all duration-300"
                aria-label="הבא"
              >
                <FaChevronLeft className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;