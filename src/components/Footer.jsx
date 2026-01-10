import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: FiMapPin,
      label: 'Address',
      value: '123 Luxury Boulevard, City Center, State 12345',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+1 (555) 0123',
    },
    {
      icon: FiMail,
      label: 'Email',
      value: 'info@luxuryhaven.com',
    },
  ];

  const socialLinks = [
    { icon: FiFacebook, label: 'Facebook', href: '#' },
    { icon: FiTwitter, label: 'Twitter', href: '#' },
    { icon: FiInstagram, label: 'Instagram', href: '#' },
  ];

  return (
    <footer
      className="bg-gray-900 dark:bg-black text-white section-padding"
      role="contentinfo"
    >
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-4">Luxury Haven Hotel</h3>
            <p className="text-gray-400 leading-relaxed">
              Experience unparalleled luxury and world-class hospitality. Your perfect stay awaits.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <li key={index} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                    <div>
                      <span className="text-gray-400 text-sm">{info.label}:</span>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 hover:bg-primary-600 p-3 rounded-lg transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Luxury Haven Hotel. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

