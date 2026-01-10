import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-gray-50 dark:bg-gray-800"
      aria-labelledby="about-heading"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            About Us
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Nestled in the heart of the city, <strong className="text-primary-600 dark:text-primary-400">Luxury Haven Hotel</strong> offers world-class hospitality since 2010. Our commitment to excellence and attention to detail has made us a premier destination for discerning travelers.
            </p>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              We pride ourselves on providing an unparalleled experience that combines timeless elegance with modern amenities. Each guest is treated to personalized service that reflects our dedication to creating memorable stays.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">13+</h3>
                <p className="text-gray-600 dark:text-gray-400">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">50K+</h3>
                <p className="text-gray-600 dark:text-gray-400">Happy Guests</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
              alt="Luxury hotel lobby interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

