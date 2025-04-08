'use client';

import React from 'react';
import { FaDumbbell, FaUsers, FaAppleAlt, FaRunning, FaHeartbeat, FaStopwatch } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-neumorphic border border-white/20 relative overflow-hidden"
      whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(150, 206, 180, 0.5)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-3xl z-0"></div>
      <div className="relative z-10">
        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
          <div className="text-2xl">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaDumbbell />,
      title: "אימון אישי",
      description: "תוכנית אימונים מותאמת אישית עם מאמן מקצועי שיעזור לך להשיג את היעדים שלך במהירות ובבטיחות."
    },
    {
      icon: <FaUsers />,
      title: "אימוני קבוצה",
      description: "מגוון שיעורים קבוצתיים מאתגרים ומהנים כמו זומבה, ספינינג, פילאטיס ויוגה בהדרכת מדריכים מוסמכים."
    },
    {
      icon: <FaAppleAlt />,
      title: "ייעוץ תזונה",
      description: "ליווי תזונתי מקצועי שיעזור לך לבנות תפריט מאוזן התומך ביעדי הכושר והבריאות שלך."
    },
    {
      icon: <FaRunning />,
      title: "תוכניות אימון מתקדמות",
      description: "תוכניות ייעודיות לשיפור כוח, סיבולת, גמישות או ירידה במשקל בהתאמה אישית."
    },
    {
      icon: <FaHeartbeat />,
      title: "מעקב התקדמות",
      description: "מערכת מתקדמת למעקב אחר ההתקדמות שלך, כולל מדידות, ניתוח ביצועים והתאמת תוכנית האימונים בהתאם."
    },
    {
      icon: <FaStopwatch />,
      title: "אימוני אינטרוול",
      description: "אימונים קצרים ואינטנסיביים המיועדים לשריפת קלוריות מקסימלית ושיפור הכושר האירובי."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 relative overflow-hidden" dir="rtl">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            השירותים שלנו
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            במכון כושר אלפא אנו מציעים מגוון רחב של שירותים מקצועיים שיעזרו לך להשיג את יעדי הכושר והבריאות שלך
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full shadow-neumorphic-button transition-all duration-300 transform hover:-translate-y-1">
            לפרטים נוספים
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;