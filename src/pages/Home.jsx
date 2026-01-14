import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import FeaturedRooms from '../components/FeaturedRooms';
import Services from '../components/Services';
import Reservation from '../components/Reservation';
import { FiArrowRight } from 'react-icons/fi';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Home = () => {
  useDocumentTitle('Home');

  return (
    <>
      <Hero />
      <FeaturedRooms />
      <Services />
      
      {/* About Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              About Luxury Haven
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Nestled in the heart of the city, <strong className="text-primary-600 dark:text-primary-400">Luxury Haven Hotel</strong> offers world-class hospitality since 2010. Our commitment to excellence and attention to detail has made us a premier destination for discerning travelers.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                We pride ourselves on providing an unparalleled experience that combines timeless elegance with modern amenities. Each guest is treated to personalized service that reflects our dedication to creating memorable stays.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                From our elegant rooms to our world-class dining and spa facilities, every aspect of Luxury Haven is designed to exceed expectations and create lasting memories.
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
                <div>
                  <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">200+</h3>
                  <p className="text-gray-600 dark:text-gray-400">Luxury Rooms</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">24/7</h3>
                  <p className="text-gray-600 dark:text-gray-400">Concierge Service</p>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors mt-6"
              >
                Learn More About Us
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                alt="Luxury hotel lobby"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <Reservation />
    </>
  );
};

export default Home;


