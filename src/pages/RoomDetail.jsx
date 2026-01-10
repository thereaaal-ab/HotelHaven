import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getRoomBySlug } from '../data/rooms';
import { FiUsers, FiMaximize2, FiHome, FiArrowLeft, FiChevronLeft, FiChevronRight, FiCheck } from 'react-icons/fi';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const RoomDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const room = getRoomBySlug(slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  if (!room) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Room Not Found</h1>
          <Link to="/rooms" className="text-primary-600 dark:text-primary-400 hover:underline">
            Back to Rooms
          </Link>
        </div>
      </div>
    );
  }

  useDocumentTitle(room.title);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const handleBookRoom = () => {
    navigate('/reservation', { state: { preselectedRoom: room.slug } });
  };

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="container-custom py-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        >
          <FiArrowLeft className="w-5 h-5" />
          Back to Rooms
        </button>
      </div>

      {/* Image Gallery */}
      <section className="mb-12">
        <div className="container-custom">
          <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden shadow-xl">
            <motion.img
              key={currentImageIndex}
              src={room.images[currentImageIndex]}
              alt={room.title}
              className="w-full h-full object-cover cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setShowLightbox(true)}
              loading="eager"
            />
            {room.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  aria-label="Previous image"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 p-3 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  aria-label="Next image"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {room.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex
                          ? 'bg-white'
                          : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Thumbnail Gallery */}
          {room.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4 mt-4">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-24 rounded-lg overflow-hidden ${
                    index === currentImageIndex ? 'ring-2 ring-primary-600' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${room.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Room Details */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                  {room.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                  {room.tagline}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                  {room.description}
                </p>

                {/* Room Info */}
                <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-center">
                    <FiUsers className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Guests</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{room.guests}</div>
                  </div>
                  <div className="text-center">
                    <FiMaximize2 className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Size</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{room.size}</div>
                  </div>
                  <div className="text-center">
                    <FiHome className="w-6 h-6 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                    <div className="text-sm text-gray-600 dark:text-gray-400">Bed</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{room.bedType}</div>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                    Amenities
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {room.amenities.map((amenity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <FiCheck className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{amenity}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar - Pricing & Booking */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    ${room.price}
                    <span className="text-lg text-gray-600 dark:text-gray-400">/ night</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Starting price, taxes included
                  </p>
                </div>

                <button
                  onClick={handleBookRoom}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-4"
                >
                  Book This Room
                </button>

                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <p>✓ Free cancellation</p>
                  <p>✓ No prepayment needed</p>
                  <p>✓ Best price guarantee</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setShowLightbox(false)}
          >
            <motion.img
              src={room.images[currentImageIndex]}
              alt={room.title}
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoomDetail;

