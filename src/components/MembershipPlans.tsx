'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUserFriends, FaClock, FaCheckCircle, FaTimesCircle, FaStar } from 'react-icons/fa';
import clsx from 'clsx';

interface PlanFeature {
  id: string;
  text: string;
  included: boolean;
}

interface MembershipPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: PlanFeature[];
  isRecommended?: boolean;
  icon: React.ReactNode;
}

const MembershipPlans: React.FC = () => {
  const plans: MembershipPlan[] = [
    {
      id: 'basic',
      name: 'בסיסי',
      price: 149,
      period: 'לחודש',
      description: 'המסלול המושלם למתאמנים מתחילים',
      icon: <FaDumbbell className="text-2xl" />,
      features: [
        { id: 'f1', text: 'גישה למכון בשעות מוגבלות (8:00-20:00)', included: true },
        { id: 'f2', text: 'גישה לציוד בסיסי', included: true },
        { id: 'f3', text: 'אימון היכרות עם מדריך', included: true },
        { id: 'f4', text: 'גישה לשיעורי סטודיו', included: false },
        { id: 'f5', text: 'אימונים אישיים', included: false },
        { id: 'f6', text: 'גישה לסאונה וג׳קוזי', included: false },
      ],
    },
    {
      id: 'standard',
      name: 'סטנדרט',
      price: 249,
      period: 'לחודש',
      description: 'המסלול הפופולרי ביותר שלנו',
      icon: <FaUserFriends className="text-2xl" />,
      isRecommended: true,
      features: [
        { id: 'f1', text: 'גישה למכון 24/7', included: true },
        { id: 'f2', text: 'גישה לכל הציוד', included: true },
        { id: 'f3', text: '2 אימונים אישיים בחודש', included: true },
        { id: 'f4', text: 'גישה לכל שיעורי הסטודיו', included: true },
        { id: 'f5', text: 'תוכנית אימונים אישית', included: true },
        { id: 'f6', text: 'גישה לסאונה וג׳קוזי', included: false },
      ],
    },
    {
      id: 'premium',
      name: 'פרימיום',
      price: 349,
      period: 'לחודש',
      description: 'חוויית אימון מושלמת ללא פשרות',
      icon: <FaStar className="text-2xl" />,
      features: [
        { id: 'f1', text: 'גישה למכון 24/7', included: true },
        { id: 'f2', text: 'גישה לכל הציוד', included: true },
        { id: 'f3', text: '4 אימונים אישיים בחודש', included: true },
        { id: 'f4', text: 'גישה לכל שיעורי הסטודיו', included: true },
        { id: 'f5', text: 'תוכנית אימונים ותזונה אישית', included: true },
        { id: 'f6', text: 'גישה לסאונה וג׳קוזי', included: true },
      ],
    },
    {
      id: 'family',
      name: 'משפחתי',
      price: 599,
      period: 'לחודש',
      description: 'מסלול מושלם לכל המשפחה (עד 4 אנשים)',
      icon: <FaClock className="text-2xl" />,
      features: [
        { id: 'f1', text: 'גישה למכון 24/7', included: true },
        { id: 'f2', text: 'גישה לכל הציוד', included: true },
        { id: 'f3', text: '2 אימונים אישיים לכל חבר בחודש', included: true },
        { id: 'f4', text: 'גישה לכל שיעורי הסטודיו', included: true },
        { id: 'f5', text: 'תוכנית אימונים משפחתית', included: true },
        { id: 'f6', text: 'גישה לסאונה וג׳קוזי', included: true },
      ],
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100 font-sans" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">מסלולי מנוי במכון כושר אלפא</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            בחרו את המסלול המתאים לכם ביותר והתחילו את המסע לכושר מושלם
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={clsx(
                'relative rounded-2xl overflow-hidden backdrop-blur-sm',
                'transition-all duration-300 h-full',
                plan.isRecommended
                  ? 'bg-primary bg-opacity-90 text-white shadow-[0_8px_30px_rgb(150,206,180,0.3)]'
                  : 'bg-white bg-opacity-70 text-gray-800 shadow-[0_8px_30px_rgba(0,0,0,0.1)]'
              )}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 left-0 right-0 py-2 bg-white bg-opacity-20 text-white text-center font-medium">
                  מומלץ ביותר
                </div>
              )}
              <div className="p-8 h-full flex flex-col">
                <div className="mb-6 flex items-center justify-center">
                  <div
                    className={clsx(
                      'w-16 h-16 rounded-full flex items-center justify-center',
                      plan.isRecommended ? 'bg-white bg-opacity-20' : 'bg-primary bg-opacity-10'
                    )}
                  >
                    {plan.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-center">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">₪{plan.price}</span>
                  <span className="text-lg opacity-80"> {plan.period}</span>
                </div>
                <p
                  className={clsx(
                    'text-center mb-8',
                    plan.isRecommended ? 'text-white text-opacity-90' : 'text-gray-600'
                  )}
                >
                  {plan.description}
                </p>
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature.id} className="flex items-start">
                      {feature.included ? (
                        <FaCheckCircle
                          className={clsx(
                            'mt-1 flex-shrink-0',
                            plan.isRecommended ? 'text-white' : 'text-green-500'
                          )}
                        />
                      ) : (
                        <FaTimesCircle
                          className={clsx(
                            'mt-1 flex-shrink-0',
                            plan.isRecommended ? 'text-white text-opacity-50' : 'text-gray-400'
                          )}
                        />
                      )}
                      <span
                        className={clsx(
                          'mr-3',
                          feature.included
                            ? plan.isRecommended
                              ? 'text-white'
                              : 'text-gray-700'
                            : plan.isRecommended
                            ? 'text-white text-opacity-60'
                            : 'text-gray-400'
                        )}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  className={clsx(
                    'w-full py-3 px-6 rounded-xl font-medium transition-all duration-300',
                    'hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2',
                    plan.isRecommended
                      ? 'bg-white text-primary hover:bg-gray-100 focus:ring-white'
                      : 'bg-primary text-white hover:bg-primary-dark focus:ring-primary'
                  )}
                >
                  הצטרפו עכשיו
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            יש לכם שאלות? אנחנו כאן בשבילכם! צרו קשר בטלפון 03-1234567
          </p>
          <p className="text-sm text-gray-500">
            * המחירים כוללים מע"מ. תנאי המנוי כפופים לתקנון מכון כושר אלפא.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;