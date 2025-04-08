'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BiDumbbell, BiRun, BiTimer } from 'react-icons/bi';

interface SuccessStory {
  id: number;
  name: string;
  age: number;
  duration: string;
  beforeImage: string;
  afterImage: string;
  weightLoss: number;
  strengthGain: number;
  quote: string;
  program: string;
  methods: string[];
}

const SuccessStories: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const successStories: SuccessStory[] = [
    {
      id: 1,
      name: 'דניאל כהן',
      age: 32,
      duration: '8 חודשים',
      beforeImage: '/images/success-stories/daniel-before.jpg',
      afterImage: '/images/success-stories/daniel-after.jpg',
      weightLoss: 18,
      strengthGain: 65,
      quote: 'אלפא שינה את חיי לחלוטין. לא רק שהורדתי משקל, אלא גם הרגשתי חזק ובריא יותר מאי פעם.',
      program: 'תוכנית כוח וירידה במשקל',
      methods: ['אימוני כוח', 'אימוני HIIT', 'ייעוץ תזונתי']
    },
    {
      id: 2,
      name: 'מיכל לוי',
      age: 28,
      duration: '6 חודשים',
      beforeImage: '/images/success-stories/michal-before.jpg',
      afterImage: '/images/success-stories/michal-after.jpg',
      weightLoss: 12,
      strengthGain: 40,
      quote: 'המאמנים באלפא נתנו לי את הכלים והמוטיבציה להגיע ליעדים שלי. אני מרגישה חזקה ובטוחה בעצמי.',
      program: 'תוכנית טונוס וחיטוב',
      methods: ['אימוני פונקציונליים', 'פילאטיס', 'יוגה']
    },
    {
      id: 3,
      name: 'אבי גולן',
      age: 45,
      duration: '12 חודשים',
      beforeImage: '/images/success-stories/avi-before.jpg',
      afterImage: '/images/success-stories/avi-after.jpg',
      weightLoss: 25,
      strengthGain: 80,
      quote: 'בגיל 45 חשבתי שכבר מאוחר מדי לשינוי, אבל אלפא הוכיח לי שאף פעם לא מאוחר מדי. השינוי שעברתי הוא מעבר למשקל - זה שינוי בגישה לחיים.',
      program: 'תוכנית לשיקום ובניית כוח',
      methods: ['אימוני כוח מותאמים אישית', 'הידרותרפיה', 'תוכנית תזונה מיוחדת']
    },
    {
      id: 4,
      name: 'נועה ברק',
      age: 35,
      duration: '10 חודשים',
      beforeImage: '/images/success-stories/noa-before.jpg',
      afterImage: '/images/success-stories/noa-after.jpg',
      weightLoss: 15,
      strengthGain: 55,
      quote: 'אחרי שנים של ניסיונות כושל, סוף סוף מצאתי את המקום שבאמת עזר לי להשיג את המטרות שלי. הצוות המקצועי והאווירה התומכת עשו את כל ההבדל.',
      program: 'תוכנית משולבת לירידה במשקל וטונוס',
      methods: ['אימוני קבוצתיים', 'אימוני TRX', 'ריצה']
    }
  ];

  const nextStory = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % successStories.length);
  };

  const prevStory = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + successStories.length) % successStories.length);
  };

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        nextStory();
      }, 8000);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const activeStory = successStories[activeIndex];

  return (
    <section 
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 rtl"
      dir="rtl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">סיפורי הצלחה</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            הכירו את הלקוחות שלנו שהשיגו תוצאות מדהימות עם תוכניות האימון במכון כושר אלפא
          </p>
        </div>

        <div className="relative glassmorphism-card p-6 md:p-8 rounded-2xl backdrop-blur-md bg-white/60 shadow-neumorphic">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 space-y-6">
              <div className="flex flex-col md:flex-row gap-4 relative">
                <div className="relative w-full md:w-1/2 h-80 rounded-xl overflow-hidden shadow-neumorphic-inset">
                  <span className="absolute top-2 right-2 z-10 bg-gray-800/70 text-white px-3 py-1 text-sm rounded-full">לפני</span>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    key={`before-${activeStory.id}`}
                    className="absolute inset-0"
                  >
                    <img 
                      src={activeStory.beforeImage} 
                      alt={`${activeStory.name} לפני`} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <div className="relative w-full md:w-1/2 h-80 rounded-xl overflow-hidden shadow-neumorphic">
                  <span className="absolute top-2 right-2 z-10 bg-primary/90 text-white px-3 py-1 text-sm rounded-full">אחרי</span>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    key={`after-${activeStory.id}`}
                    className="absolute inset-0"
                  >
                    <img 
                      src={activeStory.afterImage} 
                      alt={`${activeStory.name} אחרי`} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                {successStories.map((story, index) => (
                  <button
                    key={story.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-primary w-6' : 'bg-gray-300'
                    }`}
                    aria-label={`עבור לסיפור של ${story.name}`}
                  />
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.div
                key={activeStory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">{activeStory.name}</h3>
                  <span className="text-gray-500">גיל {activeStory.age}</span>
                </div>

                <div className="flex items-center gap-2 text-primary">
                  <BiTimer className="text-xl" />
                  <span className="font-medium">משך הטרנספורמציה: {activeStory.duration}</span>
                </div>

                <div className="flex flex-wrap gap-6 my-6">
                  <div className="flex-1 min-w-[120px] bg-white/80 p-4 rounded-xl shadow-neumorphic-sm">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <BiRun className="text-xl" />
                      <h4 className="font-medium">ירידה במשקל</h4>
                    </div>
                    <p className="text-2xl font-bold">{activeStory.weightLoss} ק"ג</p>
                  </div>
                  <div className="flex-1 min-w-[120px] bg-white/80 p-4 rounded-xl shadow-neumorphic-sm">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <BiDumbbell className="text-xl" />
                      <h4 className="font-medium">עלייה בכוח</h4>
                    </div>
                    <p className="text-2xl font-bold">{activeStory.strengthGain}%</p>
                  </div>
                </div>

                <div className="relative bg-white/70 p-5 rounded-xl shadow-neumorphic-sm">
                  <FaQuoteRight className="absolute top-3 right-3 text-primary/20 text-4xl" />
                  <blockquote className="text-gray-700 italic pt-4 pr-8">
                    "{activeStory.quote}"
                  </blockquote>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">תוכנית אימון:</h4>
                  <p className="text-gray-700">{activeStory.program}</p>
                  
                  <h4 className="font-semibold text-gray-800">שיטות אימון:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {activeStory.methods.map((method, index) => (
                      <li 
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {method}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full left-0 px-4 pointer-events-none">
            <button
              onClick={prevStory}
              className="w-10 h-10 rounded-full bg-white shadow-neumorphic flex items-center justify-center text-gray-700 hover:text-primary transition-colors pointer-events-auto"
              aria-label="סיפור קודם"
            >
              <FaArrowRight className="text-lg" />
            </button>
            <button
              onClick={nextStory}
              className="w-10 h-10 rounded-full bg-white shadow-neumorphic flex items-center justify-center text-gray-700 hover:text-primary transition-colors pointer-events-auto"
              aria-label="סיפור הבא"
            >
              <FaArrowLeft className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;