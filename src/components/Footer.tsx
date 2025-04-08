'use client';

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface NewsletterFormData {
  email: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = useState<NewsletterFormData>({
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Newsletter signup:', formData);
    setIsSubmitted(true);
    setFormData({ email: '' });
    
    // Reset the submission status after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white rtl text-right relative overflow-hidden" dir="rtl">
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm z-0"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About & Logo */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative mr-3 rounded-lg overflow-hidden neumorphic-logo">
                <Image 
                  src="/logo.png" 
                  alt="מכון כושר אלפא"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">מכון כושר אלפא</h3>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              אנו מספקים סביבת אימון מקצועית ומתקדמת לכל רמות הכושר. בואו להתאמן איתנו ולהגיע לשיאים חדשים.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <motion.a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ y: -3 }}
                aria-label="פייסבוק"
              >
                <FaFacebook size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ y: -3 }}
                aria-label="אינסטגרם"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ y: -3 }}
                aria-label="טוויטר"
              >
                <FaTwitter size={20} />
              </motion.a>
              <motion.a 
                href="https://wa.me/972501234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                whileHover={{ y: -3 }}
                aria-label="וואטסאפ"
              >
                <FaWhatsapp size={20} />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-primary/30 pb-2">ניווט מהיר</h3>
            <ul className="space-y-2">
              {[
                { name: 'דף הבית', path: '/' },
                { name: 'אודות', path: '/about' },
                { name: 'שירותים', path: '/services' },
                { name: 'מאמנים', path: '/trainers' },
                { name: 'לוח זמנים', path: '/schedule' },
                { name: 'מחירון', path: '/pricing' },
                { name: 'צור קשר', path: '/contact' },
                { name: 'בלוג', path: '/blog' },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.path}>
                    <a className="text-gray-600 hover:text-primary transition-colors duration-300 block py-1">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info & Hours */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-primary/30 pb-2">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaPhone className="ml-2 text-primary" />
                <a href="tel:+972-3-1234567" className="text-gray-600 hover:text-primary transition-colors duration-300">03-1234567</a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="ml-2 text-primary" />
                <a href="https://wa.me/972501234567" className="text-gray-600 hover:text-primary transition-colors duration-300">050-1234567</a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="ml-2 text-primary" />
                <a href="mailto:info@alpha-gym.co.il" className="text-gray-600 hover:text-primary transition-colors duration-300">info@alpha-gym.co.il</a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="ml-2 text-primary mt-1" />
                <span className="text-gray-600">רחוב הרצל 123, תל אביב</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3 border-b border-primary/30 pb-2">שעות פעילות</h3>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span className="text-gray-600">ראשון - חמישי:</span>
                <span className="text-gray-800">06:00 - 23:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">שישי:</span>
                <span className="text-gray-800">06:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">שבת:</span>
                <span className="text-gray-800">08:00 - 20:00</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-primary/30 pb-2">הישארו מעודכנים</h3>
            <p className="text-gray-600 mb-4">
              הירשמו לניוזלטר שלנו וקבלו עדכונים על מבצעים, אירועים ועצות כושר.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="הזינו את כתובת האימייל שלכם"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 text-right neumorphic-input"
                  aria-label="כתובת אימייל לניוזלטר"
                />
              </div>
              <motion.button
                type="submit"
                className={clsx(
                  "w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 neumorphic-button",
                  isSubmitted ? "bg-green-500 text-white" : "bg-primary text-white"
                )}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitted ? "נרשמת בהצלחה!" : "הרשמה לניוזלטר"}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom section with copyright and links */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} מכון כושר אלפא. כל הזכויות שמורות.
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <Link href="/terms">
                <a className="text-gray-500 hover:text-primary transition-colors duration-300">תנאי שימוש</a>
              </Link>
              <Link href="/privacy">
                <a className="text-gray-500 hover:text-primary transition-colors duration-300">מדיניות פרטיות</a>
              </Link>
              <Link href="/accessibility">
                <a className="text-gray-500 hover:text-primary transition-colors duration-300">נגישות</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          color: #fff;
          background-color: var(--color-primary);
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .neumorphic-input {
          background: #f8f9fa;
          box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.05), 
                      inset -2px -2px 5px rgba(255, 255, 255, 0.5);
          transition: all 0.3s ease;
        }
        
        .neumorphic-input:focus {
          box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.1), 
                      inset -4px -4px 8px rgba(255, 255, 255, 0.8);
        }
        
        .neumorphic-button {
          box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1), 
                     -3px -3px 6px rgba(255, 255, 255, 0.4);
          transition: all 0.3s ease;
        }
        
        .neumorphic-button:hover {
          box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.15), 
                     -4px -4px 8px rgba(255, 255, 255, 0.5);
        }
        
        .neumorphic-button:active {
          box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.15), 
                      inset -2px -2px 5px rgba(255, 255, 255, 0.5);
        }
        
        .neumorphic-logo {
          box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1), 
                     -3px -3px 6px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </footer>
  );
};

export default Footer;