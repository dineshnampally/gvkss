// ScrollMotion.jsx
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
}

const ScrollMotion: React.FC<Props> = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerVariants = {
    hidden: {
      y: '-100%',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    visible: {
      y: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      variants={headerVariants}
      animate={isHeaderVisible ? 'visible' : 'hidden'}
      initial="visible"
      style={{ position: 'sticky', top: 0, zIndex: 50 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollMotion;
