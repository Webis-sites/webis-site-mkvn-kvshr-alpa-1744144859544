'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  date: Date | null;
  time: string;
  message: string;
}

const BookingSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    control,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      date: null,
      time: '',
      message: ''
    }
  });

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', 
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsLoading(false);
    reset();
  };

  const handleNewBooking = () => {
    setIsSubmitted(false);
  };

  return (
    <section className="booking-section py-16 px-4 md:px-8 bg-gray-50 rtl" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card bg-white bg-opacity-70 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-neumorphic">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            קביעת תור במכון כושר אלפא
          </h2>
          
          {!isSubmitted ? (
            <motion.form 
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    שם מלא <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={clsx(
                      "w-full px-4 py-3 rounded-lg bg-gray-50 border focus:outline-none focus:ring-2 transition-all",
                      errors.name 
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                        : "border-gray-200 focus:border-primary focus:ring-primary/20"
                    )}
                    placeholder="הכנס את שמך המלא"
                    {...register("name", { 
                      required: "שדה חובה",
                      minLength: { value: 2, message: "שם חייב להכיל לפחות 2 תווים" }
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    טלפון נייד <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={clsx(
                      "w-full px-4 py-3 rounded-lg bg-gray-50 border focus:outline-none focus:ring-2 transition-all",
                      errors.phone 
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                        : "border-gray-200 focus:border-primary focus:ring-primary/20"
                    )}
                    placeholder="הכנס מספר טלפון"
                    {...register("phone", { 
                      required: "שדה חובה",
                      pattern: {
                        value: /^0[2-9]\d{7,8}$/,
                        message: "אנא הכנס מספר טלפון תקין"
                      }
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    דוא"ל <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={clsx(
                      "w-full px-4 py-3 rounded-lg bg-gray-50 border focus:outline-none focus:ring-2 transition-all",
                      errors.email 
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                        : "border-gray-200 focus:border-primary focus:ring-primary/20"
                    )}
                    placeholder="your@email.com"
                    {...register("email", { 
                      required: "שדה חובה",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "אנא הכנס כתובת דוא\"ל תקינה"
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                    תאריך <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    control={control}
                    name="date"
                    rules={{ required: "אנא בחר תאריך" }}
                    render={({ field }) => (
                      <DatePicker
                        selected={field.value}
                        onChange={(date) => field.onChange(date)}
                        locale={he}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                        placeholderText="בחר תאריך"
                        className={clsx(
                          "w-full px-4 py-3 rounded-lg bg-gray-50 border focus:outline-none focus:ring-2 transition-all",
                          errors.date 
                            ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                            : "border-gray-200 focus:border-primary focus:ring-primary/20"
                        )}
                      />
                    )}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                    שעה <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="time"
                    className={clsx(
                      "w-full px-4 py-3 rounded-lg bg-gray-50 border focus:outline-none focus:ring-2 transition-all",
                      errors.time 
                        ? "border-red-300 focus:border-red-500 focus:ring-red-200" 
                        : "border-gray-200 focus:border-primary focus:ring-primary/20"
                    )}
                    {...register("time", { required: "אנא בחר שעה" })}
                  >
                    <option value="">בחר שעה</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                  )}
                </div>

                <div className="form-group md:col-span-2">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="ספר לנו על המטרות שלך או שאל שאלות"
                    {...register("message")}
                  ></textarea>
                </div>
              </div>

              <div className="text-center mt-8">
                <motion.button
                  type="submit"
                  className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-neumorphic-button hover:shadow-neumorphic-button-hover active:shadow-neumorphic-button-active transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      מעבד...
                    </span>
                  ) : (
                    "קבע תור עכשיו"
                  )}
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.div 
              className="confirmation-message text-center py-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="success-icon mx-auto mb-6 w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">התור נקבע בהצלחה!</h3>
              <p className="text-gray-600 mb-8">
                תודה שבחרת במכון כושר אלפא. נשלח לך אישור במייל בקרוב.
              </p>
              <button
                onClick={handleNewBooking}
                className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg shadow-neumorphic-button hover:shadow-neumorphic-button-hover transition-all duration-300"
              >
                קביעת תור נוסף
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;