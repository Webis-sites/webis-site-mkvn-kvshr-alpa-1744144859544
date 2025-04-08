'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link as ScrollLink } from 'react-scroll';

interface NavItem {
  name: string;
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { name: 'home', label: 'דף הבית', href: 'home' },
    { name: 'services', label: 'שירותים', href: 'services' },
    { name: 'about', label: 'אודות', href: 'about' },
    { name: 'gallery', label: 'גלריה', href: 'gallery' },
    { name: 'membership', label: 'מנויים', href: 'membership' },
    { name: 'trainers', label: 'מאמנים', href: 'trainers' },
    { name: 'schedule', label: 'לוח זמנים', href: 'schedule' },
    { name: 'contact', label: 'צור קשר', href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-nav py-2'
          : 'bg-white py-4'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center mr-2">
              <span className="text-white font-bold text-xl">א</span>
            </div>
            <span className="text-xl font-bold text-gray-800">מכון כושר אלפא</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative px-3 py-2 text-gray-700 hover:text-primary transition-colors cursor-pointer mx-1 group"
                activeClass="text-primary"
              >
                {item.label}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="neumorphic-button px-6 py-2 rounded-full text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-button"
            >
              קבע תור עכשיו
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden glass-panel"
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-3 py-2 text-gray-700 hover:text-primary transition-colors rounded-md hover:bg-gray-50"
                activeClass="text-primary bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </ScrollLink>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="neumorphic-button mt-4 px-6 py-3 rounded-full text-white bg-primary hover:bg-primary-dark transition-all duration-300 shadow-button"
            >
              קבע תור עכשיו
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;