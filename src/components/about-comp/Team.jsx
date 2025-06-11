import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <motion.div 
            variants={itemVariants}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <video
              src='https://cdn.pixabay.com/video/2017/03/08/8252-207598592.mp4'
              muted
              loop
              autoPlay
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8 relative"
          >
            {/* Sparkle Overlay */}
            <div className="pointer-events-none absolute inset-0 z-20">
              {/* Sparkle 1 */}
              <motion.svg
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: [0, 1, 0], scale: [0.7, 1.2, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0 }}
                className="absolute left-4 top-4"
                width="24" height="24" viewBox="0 0 24 24" fill="none"
              >
                <circle cx="12" cy="12" r="4" fill="#facc15" fillOpacity="0.7" />
              </motion.svg>
              {/* Sparkle 2 */}
              <motion.svg
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1.1, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
                className="absolute right-8 top-12"
                width="16" height="16" viewBox="0 0 16 16" fill="none"
              >
                <circle cx="8" cy="8" r="2.5" fill="#38bdf8" fillOpacity="0.7" />
              </motion.svg>
              {/* Sparkle 3 */}
              <motion.svg
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: [0, 1, 0], scale: [0.6, 1.3, 0.6] }}
                transition={{ duration: 2.8, repeat: Infinity, delay: 0.7 }}
                className="absolute left-1/2 bottom-6"
                width="20" height="20" viewBox="0 0 20 20" fill="none"
              >
                <circle cx="10" cy="10" r="3" fill="#a78bfa" fillOpacity="0.7" />
              </motion.svg>
            </div>
            {/* Floating Cards */}
            <motion.div
              className="bg-white p-6 rounded-xl border border-gray-200 relative z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'mirror' }}
            >
              <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                <FaCheck className="text-green-500 text-xl" />
                Built on Trust, Guided by Expertise
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Our team blends deep technical know-how with a commitment to transparency and collaboration,
                ensuring every decision we make is thoughtful, informed, and aligned with your goals.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl border border-gray-200 relative z-10"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatType: 'mirror', delay: 0.5 }}
            >
              <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                <FaCheck className="text-green-500 text-xl" />
                The People Powering the Vision
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Behind every solution we build is a team of curious minds, skilled professionals, and passionate
                creators—driven by purpose and united by a shared goal: delivering real impact.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl border border-gray-200 relative z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.7, repeat: Infinity, repeatType: 'mirror', delay: 1 }}
            >
              <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                <FaCheck className="text-green-500 text-xl" />
                Innovation Through Collaboration
              </h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We believe in the power of diverse perspectives. Our team's collaborative approach ensures
                innovative solutions that address complex challenges effectively.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
