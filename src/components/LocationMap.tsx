import React from 'react';
import { FaClock, FaParking, FaSubway, FaDirections, FaPhone, FaEnvelope } from 'react-icons/fa';

interface BusinessHours {
  day: string;
  hours: string;
}

const LocationMap: React.FC = () => {
  const businessHours: BusinessHours[] = [
    { day: 'ראשון', hours: '06:00 - 23:00' },
    { day: 'שני', hours: '06:00 - 23:00' },
    { day: 'שלישי', hours: '06:00 - 23:00' },
    { day: 'רביעי', hours: '06:00 - 23:00' },
    { day: 'חמישי', hours: '06:00 - 23:00' },
    { day: 'שישי', hours: '06:00 - 16:00' },
    { day: 'שבת', hours: '08:00 - 14:00' },
  ];

  return (
    <section className="location-section rtl bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 md:px-8 font-sans" dir="rtl">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 relative">
          <span className="relative z-10">המיקום שלנו</span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary rounded-full"></span>
        </h2>
        
        <div className="glassmorphism-card p-6 rounded-2xl overflow-hidden shadow-neumorphic">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Map Column */}
            <div className="lg:w-1/2 h-[400px] rounded-xl overflow-hidden glassmorphism-inner">
              {/* Placeholder for Google Maps - would be replaced with actual Google Maps component */}
              <div className="w-full h-full bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-gray-500">מפת Google תוטמע כאן</p>
                </div>
                {/* This is a placeholder image - in production use actual Google Maps */}
                <img 
                  src="https://maps.googleapis.com/maps/api/staticmap?center=32.0853,34.7818&zoom=15&size=600x400&markers=color:red%7C32.0853,34.7818&key=YOUR_API_KEY" 
                  alt="מיקום מכון כושר אלפא" 
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
            </div>
            
            {/* Info Column */}
            <div className="lg:w-1/2">
              <div className="bg-white bg-opacity-70 backdrop-blur-sm p-6 rounded-xl shadow-sm h-full">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">מכון כושר אלפא</h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-gray-700 flex items-center">
                      <FaDirections className="ml-2 text-primary" />
                      כתובת
                    </h4>
                    <p className="text-gray-600">רחוב הברזל 38, תל אביב</p>
                    <p className="text-gray-600">מיקוד: 6971052</p>
                  </div>
                  
                  {/* Contact */}
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-gray-700">יצירת קשר</h4>
                    <p className="text-gray-600 flex items-center mb-2">
                      <FaPhone className="ml-2 text-primary" />
                      03-1234567
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <FaEnvelope className="ml-2 text-primary" />
                      info@alpha-fitness.co.il
                    </p>
                  </div>
                  
                  {/* Business Hours */}
                  <div>
                    <h4 className="text-lg font-medium mb-3 text-gray-700 flex items-center">
                      <FaClock className="ml-2 text-primary" />
                      שעות פעילות
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {businessHours.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium">{item.day}:</span>
                          <span className="text-gray-600">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Parking & Transportation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-lg font-medium mb-3 text-gray-700 flex items-center">
                        <FaParking className="ml-2 text-primary" />
                        חניה
                      </h4>
                      <p className="text-gray-600">חניון תת-קרקעי בבניין</p>
                      <p className="text-gray-600">שעתיים חינם למתאמנים</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-3 text-gray-700 flex items-center">
                        <FaSubway className="ml-2 text-primary" />
                        תחבורה ציבורית
                      </h4>
                      <p className="text-gray-600">קווי אוטובוס: 24, 104, 204</p>
                      <p className="text-gray-600">תחנת רכבת: מרחק 10 דקות הליכה</p>
                    </div>
                  </div>
                </div>
                
                <button className="mt-8 bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-full shadow-neumorphic-button transition-all duration-300 hover:shadow-neumorphic-button-hover focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 w-full md:w-auto">
                  קבל הנחיות הגעה
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;