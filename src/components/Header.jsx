import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const location = useLocation();
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  let lastScrollY = useRef(0);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      height: 'auto',
      y: 0,
      scale: 1,
      boxShadow: '0 8px 32px 0 rgba(60,60,120,0.12)',
      transition: {
        type: 'spring',
        stiffness: 320,
        damping: 28,
        mass: 0.7,
        staggerChildren: 0.12
      }
    },
    closed: { 
      opacity: 0,
      height: 0,
      y: -60,
      scale: 0.98,
      boxShadow: '0 0px 0px 0 rgba(60,60,120,0)',
      transition: {
        type: 'spring',
        stiffness: 320,
        damping: 30,
        mass: 0.7,
        staggerChildren: 0.07,
        staggerDirection: -1
      }
    },
  };

  const menuItemVariants = {
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 }
    },
    closed: { 
      opacity: 0, 
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className="flex flex-col sticky top-0 z-50"
      variants={headerVariants}
      animate={isHeaderVisible ? 'visible' : 'hidden'}
      initial="visible"
    >
      <div ref={navRef}>
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 w-full shadow-sm">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2 flex-col sm:flex-row">
            {/* Logo */}
            <motion.div 
              className="mb-1 sm:mb-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                <img src={logo} alt="Store Logo" className="h-20 object-cover" />
              </NavLink>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-4 text-lg gap-10 font-medium">
              {['/', '/contact', '/about', '/career'].map((path, index) => {
                const labels = ['Home', 'Contact', 'About', 'Career'];
                return (
                  <motion.div
                    key={path}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <NavLink
                      to={path}
                      className={({ isActive }) =>
                        `relative px-2 py-1 ${
                          isActive
                            ? 'text-blue-600'
                            : 'text-gray-600 hover:text-blue-500'
                        }`
                      }
                    >
                      {labels[index]}
                      {location.pathname === path && (
                        <motion.div
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                          layoutId="underline"
                        />
                      )}
                    </NavLink>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex justify-end w-full sm:w-auto">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl text-gray-600 p-2 rounded-lg hover:bg-gray-100"
              >
                <FiMenu />
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="flex flex-col items-center bg-white/80 backdrop-blur-md py-2 lg:hidden font-medium overflow-hidden"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {['/', '/contact', '/about', '/career'].map((path, index) => {
                  const labels = ['Home', 'Contact', 'About', 'Career'];
                  return (
                    <motion.div
                      key={path}
                      variants={menuItemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <NavLink
                        to={path}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `block px-4 py-2 ${
                            isActive
                              ? 'text-blue-600'
                              : 'text-gray-600 hover:text-blue-500'
                          }`
                        }
                      >
                        {labels[index]}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;
