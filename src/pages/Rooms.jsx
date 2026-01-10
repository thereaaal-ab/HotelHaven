import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { rooms, filterRooms } from '../data/rooms';
import { FiUsers, FiMaximize2, FiHome, FiFilter, FiX } from 'react-icons/fi';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Rooms = () => {
  useDocumentTitle('Rooms & Suites');
  const [filters, setFilters] = useState({
    type: '',
    view: '',
    minPrice: '',
    maxPrice: '',
  });
  const [showFilters, setShowFilters] = useState(false);

  const filteredRooms = useMemo(() => {
    return filterRooms({
      type: filters.type || undefined,
      view: filters.view || undefined,
      minPrice: filters.minPrice ? parseInt(filters.minPrice) : undefined,
      maxPrice: filters.maxPrice ? parseInt(filters.maxPrice) : undefined,
    });
  }, [filters]);

  const clearFilters = () => {
    setFilters({ type: '', view: '', minPrice: '', maxPrice: '' });
  };

  const roomTypes = ['standard', 'deluxe', 'suite', 'penthouse'];
  const views = ['ocean', 'city', 'garden'];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-800 section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Rooms & Suites
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover our collection of luxurious accommodations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white dark:bg-gray-900 py-6 border-b border-gray-200 dark:border-gray-700 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <FiFilter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {filteredRooms.length} room{filteredRooms.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid md:grid-cols-4 gap-4 pt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Room Type
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                >
                  <option value="">All Types</option>
                  {roomTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  View
                </label>
                <select
                  value={filters.view}
                  onChange={(e) => setFilters({ ...filters, view: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                >
                  <option value="">All Views</option>
                  {views.map((view) => (
                    <option key={view} value={view}>
                      {view.charAt(0).toUpperCase() + view.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Min Price
                </label>
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
                  placeholder="$0"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Max Price
                </label>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                  placeholder="$2000"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
                />
              </div>
              {(filters.type || filters.view || filters.minPrice || filters.maxPrice) && (
                <div className="md:col-span-4">
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700"
                  >
                    <FiX className="w-4 h-4" />
                    Clear Filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          {filteredRooms.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                No rooms match your filters. Try adjusting your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredRooms.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Link to={`/rooms/${room.slug}`}>
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={room.images[0]}
                        alt={room.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${room.price}/night
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                        {room.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {room.tagline}
                      </p>
                      <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                          <FiUsers className="w-4 h-4" />
                          {room.guests}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                          <FiMaximize2 className="w-4 h-4" />
                          {room.size}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                          <FiHome className="w-4 h-4" />
                          {room.bedType}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Rooms;

