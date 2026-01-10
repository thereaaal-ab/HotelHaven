import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiUsers, FiMaximize2, FiHome, FiArrowRight } from 'react-icons/fi';

const FeaturedRooms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const rooms = [
    {
      id: 1,
      title: 'Ocean View Suite',
      tagline: 'Breathtaking panoramic views',
      price: 420,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
      guests: 2,
      size: '45 m²',
      bedType: 'King Bed',
    },
    {
      id: 2,
      title: 'Deluxe Penthouse',
      tagline: 'Ultimate luxury experience',
      price: 850,
      image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
      guests: 4,
      size: '120 m²',
      bedType: 'King + Sofa',
    },
    {
      id: 3,
      title: 'Standard Room',
      tagline: 'Comfortable and elegant',
      price: 280,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
      guests: 2,
      size: '35 m²',
      bedType: 'Queen Bed',
    },
    {
      id: 4,
      title: 'Executive Suite',
      tagline: 'Perfect for business travelers',
      price: 550,
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80',
      guests: 2,
      size: '65 m²',
      bedType: 'King Bed',
    },
    {
      id: 5,
      title: 'Presidential Suite',
      tagline: 'The pinnacle of luxury',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
      guests: 4,
      size: '150 m²',
      bedType: 'King + Twin',
    },
    {
      id: 6,
      title: 'Garden View Deluxe',
      tagline: 'Serene and peaceful',
      price: 380,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
      guests: 2,
      size: '40 m²',
      bedType: 'Queen Bed',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const handleViewDetails = (roomId) => {
    // TODO: Navigate to room details page or open modal
    console.log('View details for room:', roomId);
    // For now, you can implement navigation or modal here
  };

  return (
    <section
      id="rooms"
      ref={ref}
      className="section-padding bg-white dark:bg-gray-900"
      aria-labelledby="rooms-heading"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            id="rooms-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Rooms & Suites
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-4" />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our handpicked selection of luxurious accommodations
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
        >
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <motion.button
                    onClick={() => handleViewDetails(room.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg"
                    aria-label={`View details for ${room.title}`}
                  >
                    View Details
                    <FiArrowRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title and Price */}
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                    {room.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {room.tagline}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      ${room.price}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">/ night</span>
                  </div>
                </div>

                {/* Icons Row */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <FiUsers className="w-4 h-4" />
                    <span className="text-sm">{room.guests} Guests</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <FiMaximize2 className="w-4 h-4" />
                    <span className="text-sm">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <FiHome className="w-4 h-4" />
                    <span className="text-sm">{room.bedType}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See All Rooms Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              // TODO: Navigate to /rooms or open modal
              console.log('See all rooms');
            }}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto"
            aria-label="View all rooms and suites"
          >
            See All Rooms & Suites
            <FiArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRooms;

