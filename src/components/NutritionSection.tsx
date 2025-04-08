'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaAppleAlt, FaClipboardCheck, FaUserMd, FaRegLightbulb } from 'react-icons/fa';
import { IoFastFoodOutline } from 'react-icons/io5';
import { GiMeal } from 'react-icons/gi';

interface NutritionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const NutritionCard: React.FC<NutritionCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary mx-auto">
        <div className="text-2xl">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

interface MealItemProps {
  time: string;
  name: string;
  description: string;
}

const MealItem: React.FC<MealItemProps> = ({ time, name, description }) => {
  return (
    <div className="flex mb-4 items-start">
      <div className="min-w-[80px] text-primary font-bold">{time}</div>
      <div className="glassmorphism p-4 rounded-lg flex-1">
        <h4 className="font-bold mb-1">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const NutritionSection: React.FC = () => {
  return (
    <section dir="rtl" className="py-16 px-4 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background decoration */}
      <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            תזונה נכונה לאורח חיים בריא
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            במכון כושר אלפא אנו מאמינים שתזונה נכונה היא המפתח להצלחה. הצוות המקצועי שלנו יבנה עבורך תוכנית תזונה מותאמת אישית שתסייע לך להשיג את היעדים שלך.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <NutritionCard 
            icon={<FaUserMd />}
            title="ייעוץ תזונתי אישי"
            description="פגישה אישית עם תזונאי מוסמך שיבנה עבורך תוכנית תזונה מותאמת למטרותיך האישיות."
          />
          <NutritionCard 
            icon={<FaClipboardCheck />}
            title="תוכניות תזונה מותאמות"
            description="תוכניות תזונה מותאמות לירידה במשקל, עלייה במסת שריר או שיפור הביצועים הספורטיביים."
          />
          <NutritionCard 
            icon={<FaAppleAlt />}
            title="חינוך לתזונה נכונה"
            description="סדנאות והרצאות בנושא תזונה נכונה, הרגלי אכילה בריאים וטיפים לאורח חיים בריא."
          />
        </div>

        {/* Sample Meal Plan & Image */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="corporate-card p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <GiMeal className="text-2xl text-primary mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">דוגמה לתפריט יומי</h3>
              </div>
              
              <MealItem 
                time="07:00" 
                name="ארוחת בוקר" 
                description="חביתת ירק מ-3 ביצים, לחם מחיטה מלאה, אבוקדו, ירקות טריים וכוס תה ירוק."
              />
              <MealItem 
                time="10:30" 
                name="ארוחת ביניים" 
                description="יוגורט יווני עם פירות יער ואגוזים."
              />
              <MealItem 
                time="13:00" 
                name="ארוחת צהריים" 
                description="חזה עוף צלוי, קינואה, סלט ירקות גדול עם שמן זית ולימון."
              />
              <MealItem 
                time="16:00" 
                name="ארוחת ביניים" 
                description="שייק חלבון עם בננה ושקדים."
              />
              <MealItem 
                time="19:00" 
                name="ארוחת ערב" 
                description="דג סלמון, ירקות מאודים וסלט."
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061" 
                alt="ארוחה בריאה מאוזנת" 
                className="rounded-2xl shadow-lg relative z-10 h-full object-cover"
              />
            </div>
            
            <div className="mt-8 bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-neumorphic">
              <div className="flex items-center mb-4">
                <FaRegLightbulb className="text-xl text-primary ml-3" />
                <h3 className="text-xl font-bold text-gray-800">טיפים לתזונה נכונה</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold ml-2">•</span>
                  <span>שתו לפחות 8 כוסות מים ביום</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold ml-2">•</span>
                  <span>הקפידו לאכול ירקות בכל ארוחה</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold ml-2">•</span>
                  <span>העדיפו פחמימות מורכבות על פני פחמימות פשוטות</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold ml-2">•</span>
                  <span>אכלו מזונות עשירים בחלבון לאחר אימון</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="glassmorphism inline-block px-8 py-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">מוכנים להתחיל?</h3>
            <p className="mb-6 text-gray-600">קבעו פגישת ייעוץ תזונתי עם אחד המומחים שלנו</p>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg shadow-neumorphic-button transition-all duration-300 transform hover:-translate-y-1">
              לתיאום פגישה
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NutritionSection;