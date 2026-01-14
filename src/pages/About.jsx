import { motion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const About = () => {
  useDocumentTitle('About Us');

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&q=80"
            alt="Luxury Haven Hotel"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
            About Luxury Haven
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            World-class hospitality since 2010
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Nestled in the heart of the city, <strong className="text-primary-600 dark:text-primary-400">Luxury Haven Hotel</strong> offers world-class hospitality since 2010. Our commitment to excellence and attention to detail has made us a premier destination for discerning travelers.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                We pride ourselves on providing an unparalleled experience that combines timeless elegance with modern amenities. Each guest is treated to personalized service that reflects our dedication to creating memorable stays.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                From our elegant rooms to our world-class dining and spa facilities, every aspect of Luxury Haven is designed to exceed expectations and create lasting memories.
              </p>
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
                alt="Hotel lobby"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Mission & Values */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To provide exceptional hospitality experiences that exceed our guests' expectations through personalized service, luxurious accommodations, and attention to every detail.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Our Values
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Excellence in service</li>
                <li>• Respect for our guests</li>
                <li>• Sustainability and responsibility</li>
                <li>• Innovation and tradition</li>
              </ul>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { number: '13+', label: 'Years of Excellence' },
              { number: '50K+', label: 'Happy Guests' },
              { number: '200+', label: 'Luxury Rooms' },
              { number: '24/7', label: 'Concierge Service' },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
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
              Photo Gallery
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
              'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
              'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=600&q=80',
              'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80',
              'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
              'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&q=80',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg group"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Our Location
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto mb-6" />
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              123 Luxury Boulevard, City Center, State 12345
            </p>
            <div className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132191576!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;


