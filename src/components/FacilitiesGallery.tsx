'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface FacilityItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

const FacilitiesGallery: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const facilities: FacilityItem[] = [
    {
      id: 1,
      title: 'אזור משקולות חופשיות',
      description: 'מגוון משקולות חופשיות מקצועיות לאימון מושלם',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48',
      alt: 'אזור משקולות חופשיות במכון כושר אלפא',
    },
    {
      id: 2,
      title: 'מכשירי כוח',
      description: 'ציוד חדיש ומתקדם לאימוני כוח ממוקדים',
      imageUrl: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f',
      alt: 'מכשירי כוח במכון כושר אלפא',
    },
    {
      id: 3,
      title: 'אזור קרדיו',
      description: 'מכשירי קרדיו מתקדמים לשריפת שומנים יעילה',
      imageUrl: 'https://images.unsplash.com/photo-1570829460005-c840387bb1ca',
      alt: 'אזור קרדיו במכון כושר אלפא',
    },
    {
      id: 4,
      title: 'אזור פונקציונלי',
      description: 'מרחב לאימונים פונקציונליים ואימוני HIIT',
      imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a',
      alt: 'אזור פונקציונלי במכון כושר אלפא',
    },
    {
      id: 5,
      title: 'אזור מתיחות',
      description: 'מרחב ייעודי למתיחות ושחרור שרירים',
      imageUrl: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a',
      alt: 'אזור מתיחות במכון כושר אלפא',
    },
    {
      id: 6,
      title: 'חדרי אימון אישי',
      description: 'חדרים פרטיים לאימונים אישיים עם מאמנים מקצועיים',
      imageUrl: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2',
      alt: 'חדרי אימון אישי במכון כושר אלפא',
    },
    {
      id: 7,
      title: 'מלתחות מפוארות',
      description: 'מלתחות נקיות ומרווחות עם מקלחות ולוקרים',
      imageUrl: 'https://images.unsplash.com/photo-1545350536-04bd6abbdb31',
      alt: 'מלתחות במכון כושר אלפא',
    },
    {
      id: 8,
      title: 'בר תזונה',
      description: 'בר תזונה עם משקאות חלבון ומוצרים משלימים',
      imageUrl: 'https://images.unsplash.com/photo-1532635248-cdd3d399f56c',
      alt: 'בר תזונה במכון כושר אלפא',
    },
  ];

  return (
    <section className="facilities-gallery py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-gray-900 dir-rtl" dir="rtl">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            <span className="text-primary border-b-4 border-primary pb-2">המתקנים שלנו</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            מכון כושר אלפא מציע לכם את הציוד המתקדם והחדשני ביותר, בסביבה מרווחת ונעימה לאימון מושלם
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: facility.id * 0.1 }}
              whileHover={{ y: -5 }}
              className={clsx(
                "facility-card rounded-xl overflow-hidden",
                "bg-white dark:bg-gray-800",
                "shadow-neomorphic dark:shadow-neomorphic-dark",
                "transition-all duration-300 h-full"
              )}
              onMouseEnter={() => setActiveImage(facility.id)}
              onMouseLeave={() => setActiveImage(null)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={`${facility.imageUrl}?auto=format&fit=crop&w=800&q=80`}
                  alt={facility.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={clsx(
                    "object-cover transition-transform duration-500",
                    activeImage === facility.id ? "scale-110" : "scale-100"
                  )}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
              </div>
              <div className="glassmorphism-card p-6 relative z-10 -mt-16 mx-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{facility.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesGallery;