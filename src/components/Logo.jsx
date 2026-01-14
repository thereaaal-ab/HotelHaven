import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 group">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="flex items-center space-x-2"
      >
        {/* Crown Icon - Elegant Luxury Design */}
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-600 dark:text-primary-400 transition-colors duration-300 ease-in-out"
        >
          {/* Main Crown Shape */}
          <path
            d="M21 6L15 14L9 12L7 20L21 36L35 20L33 12L27 14L21 6Z"
            fill="currentColor"
            className="text-primary-600 dark:text-primary-400"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          {/* Center Gem */}
          <circle
            cx="21"
            cy="18"
            r="3"
            fill="white"
            className="dark:fill-gray-900"
            opacity="0.9"
          />
          {/* Side Gems */}
          <circle
            cx="13"
            cy="16"
            r="2"
            fill="white"
            className="dark:fill-gray-900"
            opacity="0.8"
          />
          <circle
            cx="29"
            cy="16"
            r="2"
            fill="white"
            className="dark:fill-gray-900"
            opacity="0.8"
          />
          {/* Base Line */}
          <line
            x1="9"
            y1="20"
            x2="33"
            y2="20"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-primary-700 dark:text-primary-300"
          />
        </svg>
        
        {/* Text Logo */}
        <div className="flex flex-col hidden sm:flex">
          <span className="text-xl md:text-2xl font-serif font-bold text-primary-600 dark:text-primary-400 leading-tight transition-colors duration-300 ease-in-out">
            Luxury Haven
          </span>
          <span className="text-xs text-gray-600 dark:text-gray-400 font-light tracking-wider transition-colors duration-300 ease-in-out">
            HOTEL
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default Logo;

