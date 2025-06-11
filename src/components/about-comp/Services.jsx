import React from 'react';
import { motion } from 'framer-motion';
import image from '../../assets/services-bg.jpg';

const Services = () => {
  const services = [
    { title: 'Web Development', icon: '💻' },
    { title: 'Web Design', icon: '🎨' },
    { title: 'E-Commerce Development', icon: '🛒' },
    { title: 'Mobile App Development', icon: '📱' },
    { title: 'Digital Marketing', icon: '📈' },
    { title: 'Support', icon: '🛠️' }
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    hover: { scale: 1.05, backgroundColor: '#ffe4e6', transition: { duration: 0.3 } } // Light pink hover
  };

  return (
    <div
      id="services-section"
      className="relative bg-no-repeat bg-cover bg-center min-h-screen w-full pointer-events-auto"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <div className="w-11/12 md:w-3/4 lg:w-1/2 h-1 bg-[#67B047] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8"
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
            >
              <div className="flex flex-col items-center">
                <div className="mb-6 w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <h5 className="text-2xl font-semibold text-gray-800">
                  {service.title}
                </h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
