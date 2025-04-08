'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "מהן שעות הפעילות של מכון הכושר?",
      answer: "מכון הכושר אלפא פתוח בימים א'-ה' בין השעות 06:00-23:00, בימי שישי בין 06:00-18:00, ובשבת בין 08:00-20:00. שעות הפעילות עשויות להשתנות בחגים ובמועדים מיוחדים, אנא בדקו באתר או בעמוד הפייסבוק שלנו לעדכונים."
    },
    {
      id: 2,
      question: "איך ניתן לבטל מנוי?",
      answer: "ביטול מנוי מתבצע באמצעות טופס מקוון באתר שלנו או בפנייה ישירה לצוות שירות הלקוחות במכון. יש להודיע על ביטול לפחות 30 יום מראש. במקרה של ביטול לפני תום תקופת ההתחייבות, ייתכן ותחויבו בדמי ביטול בהתאם לתנאי ההסכם."
    },
    {
      id: 3,
      question: "איך נרשמים לשיעורים קבוצתיים?",
      answer: "ההרשמה לשיעורים קבוצתיים מתבצעת דרך האפליקציה שלנו או באתר האינטרנט. ניתן להירשם לשיעורים עד 48 שעות מראש. אנו ממליצים להירשם מוקדם ככל האפשר מכיוון שהמקומות מוגבלים. במקרה של ביטול, אנא הודיעו לנו לפחות 4 שעות מראש כדי לאפשר למתאמנים אחרים להשתתף."
    },
    {
      id: 4,
      question: "האם יש מאמנים אישיים במכון?",
      answer: "כן, במכון כושר אלפא יש צוות מקצועי של מאמנים אישיים מוסמכים ובעלי ניסיון רב. ניתן לקבוע פגישת ייעוץ ראשונית ללא עלות, ולאחר מכן לרכוש חבילות אימון אישי בהתאם לצרכים שלכם. המחירים משתנים בהתאם למספר האימונים והמאמן הספציפי."
    },
    {
      id: 5,
      question: "מה כולל המנוי הבסיסי?",
      answer: "המנוי הבסיסי כולל גישה לכל אזורי המכון (חדר כושר, אזור משקולות חופשיות, אזור קרדיו), שימוש במלתחות ובמקלחות, וכן השתתפות בשיעורים קבוצתיים בסיסיים. המנוי אינו כולל אימונים אישיים, שיעורים מתקדמים מסוימים, או שימוש בספא (במידה וקיים במכון)."
    },
    {
      id: 6,
      question: "האם יש המלצות למתאמנים מתחילים?",
      answer: "בהחלט! אנו ממליצים למתאמנים חדשים להתחיל עם פגישת הדרכה עם אחד המאמנים שלנו, שתינתן ללא עלות בהצטרפות. בנוסף, כדאי להתחיל באימונים קלים יותר ולהגביר את העצימות בהדרגה. שיעורי הסטודיו המסומנים כ'מתחילים' מתאימים במיוחד לחדשים. אל תהססו לפנות לצוות המכון בכל שאלה או התלבטות."
    },
    {
      id: 7,
      question: "האם יש חניה זמינה למתאמנים?",
      answer: "כן, למכון כושר אלפא יש חניון פרטי הזמין למנויים ללא תשלום נוסף. החניה מוגבלת לשעתיים במהלך שעות השיא. בנוסף, ישנה חניה ציבורית בתשלום בסביבת המכון. אנו ממליצים להגיע בתחבורה ציבורית בשעות העומס."
    },
    {
      id: 8,
      question: "האם ניתן להקפיא מנוי לתקופה מסוימת?",
      answer: "כן, ניתן להקפיא מנוי לתקופה של עד חודשיים בשנה (במצטבר) ללא עלות נוספת. הקפאות מעבר לתקופה זו כרוכות בתשלום סמלי. יש להגיש בקשת הקפאה דרך האתר או במשרדי המכון לפחות 7 ימים לפני תאריך ההקפאה המבוקש. הקפאה אפשרית רק במנויים שנתיים."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section rtl text-right py-12 px-4 md:px-8 max-w-4xl mx-auto" dir="rtl">
      <div className="glass-container p-8 rounded-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">שאלות נפוצות</h2>
        
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id} 
              className="faq-item neumorphic-card rounded-xl overflow-hidden"
            >
              <button
                className={`w-full text-right p-5 flex justify-between items-center transition-all duration-300 ${
                  activeIndex === faq.id ? 'bg-opacity-10 bg-primary' : 'bg-white bg-opacity-80'
                }`}
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={activeIndex === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary"
                >
                  <IoIosArrowDown size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {activeIndex === faq.id && (
                  <motion.div
                    id={`faq-answer-${faq.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white bg-opacity-60 backdrop-blur-sm"
                  >
                    <div className="p-5 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;