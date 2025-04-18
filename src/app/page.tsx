'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import FacilitiesGallery from '../components/FacilitiesGallery';
import MembershipPlans from '../components/MembershipPlans';
import TrainersSection from '../components/TrainersSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ClassSchedule from '../components/ClassSchedule';
import BookingSection from '../components/BookingSection';
import FAQSection from '../components/FAQSection';
import LocationMap from '../components/LocationMap';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import NutritionSection from '../components/NutritionSection';
import SuccessStories from '../components/SuccessStories';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <main className="flex-1 container mx-auto">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
        <Navbar />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <FacilitiesGallery />
    <MembershipPlans />
    <TrainersSection />
    <TestimonialsSection />
    <ClassSchedule />
    <BookingSection />
    <FAQSection />
    <LocationMap />
    <CTASection />
    <NutritionSection />
    <SuccessStories />
    <Footer />
  </main>
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 מכון כושר אלפא. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
  );
}