import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiCoffee,
  FiHome,
  FiStar,
  FiDroplet,
  FiActivity,
  FiCalendar,
} from 'react-icons/fi';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: FiCoffee,
      title: 'Breakfast & Dining',
      description: 'Complimentary breakfast buffet and fine-dining restaurant with world-class cuisine.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
    },
    {
      icon: FiHome,
      title: 'Luxury Rooms',
      description: 'Elegant standard rooms, deluxe suites, and exclusive penthouse options with premium amenities.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    },
    {
      icon: FiStar,
      title: 'Premium Suites',
      description: 'Spacious suites with stunning views, private balconies, and personalized butler service.',
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
    },
    {
      icon: FiDroplet,
      title: 'Spa & Wellness',
      description: 'Relax and rejuvenate at our world-class spa with professional therapists and premium treatments.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
    },
    {
      icon: FiActivity,
      title: 'Fitness & Pool',
      description: 'State-of-the-art fitness center and outdoor infinity pool with panoramic city views.',
      image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=600&q=80',
    },
    {
      icon: FiCalendar,
      title: 'Events & Conferences',
      description: 'Host memorable weddings, conferences, and corporate events in our elegant banquet halls.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
    },
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="section-padding bg-white dark:bg-gray-900"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover world-class amenities and services designed to make your stay unforgettable
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary-600 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

