import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiCalendar, FiUsers, FiMail, FiUser, FiCheck } from 'react-icons/fi';
import { useReservations } from '../contexts/ReservationsContext';

const Reservation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const { addReservation } = useReservations();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const bookingData = {
      ...data,
      checkIn: checkInDate?.toISOString() || null,
      checkOut: checkOutDate?.toISOString() || null,
    };
    
    // Save to reservations context
    addReservation(bookingData);
    
    console.log('Booking submitted:', bookingData);
    setShowConfirmation(true);
    reset();
    setCheckInDate(null);
    setCheckOutDate(null);
    
    // Scroll to top to show the message
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => setShowConfirmation(false), 5000);
  };

  const formFields = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      icon: FiUser,
      validation: {
        required: 'Name is required',
        minLength: {
          value: 2,
          message: 'Name must be at least 2 characters',
        },
      },
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      icon: FiMail,
      validation: {
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address',
        },
      },
    },
    {
      name: 'guests',
      label: 'Number of Guests',
      type: 'number',
      icon: FiUsers,
      validation: {
        required: 'Number of guests is required',
        min: { value: 1, message: 'At least 1 guest required' },
        max: { value: 10, message: 'Maximum 10 guests' },
      },
    },
  ];

  const roomTypes = [
    { value: 'standard', label: 'Standard Room' },
    { value: 'deluxe', label: 'Deluxe Suite' },
    { value: 'penthouse', label: 'Penthouse' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="reservation"
      ref={ref}
      className="section-padding bg-gray-50 dark:bg-gray-800"
      aria-labelledby="reservation-heading"
    >
      {/* Success Message */}
      {showConfirmation && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4"
        >
          <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3">
            <FiCheck className="w-6 h-6 flex-shrink-0" />
            <div>
              <p className="font-semibold">Reservation Booked!</p>
              <p className="text-sm text-white/90">Your booking has been confirmed successfully.</p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            id="reservation-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            Book Your Stay
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Reserve your perfect room and experience luxury like never before
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto"
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 md:p-8 space-y-6"
            noValidate
          >
            {/* Date Pickers */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="checkIn"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Check-in Date
                </label>
                <div className="relative">
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    selectsStart
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    minDate={new Date()}
                    placeholderText="Select check-in date"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                    aria-label="Check-in date"
                  />
                  <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="checkOut"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Check-out Date
                </label>
                <div className="relative">
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    selectsEnd
                    startDate={checkInDate}
                    endDate={checkOutDate}
                    minDate={checkInDate || new Date()}
                    placeholderText="Select check-out date"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                    aria-label="Check-out date"
                  />
                  <FiCalendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </motion.div>
            </div>

            {/* Form Fields */}
            {formFields.map((field, index) => {
              const Icon = field.icon;
              return (
                <motion.div key={field.name} variants={itemVariants}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type={field.type}
                      id={field.name}
                      {...register(field.name, field.validation)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                        errors[field.name]
                          ? 'border-red-500'
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                      aria-invalid={errors[field.name] ? 'true' : 'false'}
                      aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                    />
                  </div>
                  {errors[field.name] && (
                    <p
                      id={`${field.name}-error`}
                      className="mt-1 text-sm text-red-500"
                      role="alert"
                    >
                      {errors[field.name].message}
                    </p>
                  )}
                </motion.div>
              );
            })}

            {/* Room Type Selection */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="roomType"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Room Type
              </label>
              <select
                id="roomType"
                {...register('roomType', { required: 'Please select a room type' })}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-invalid={errors.roomType ? 'true' : 'false'}
              >
                <option value="">Select a room type</option>
                {roomTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.roomType && (
                <p className="mt-1 text-sm text-red-500" role="alert">
                  {errors.roomType.message}
                </p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                aria-label="Submit reservation form"
              >
                Confirm Reservation
              </button>
            </motion.div>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;

