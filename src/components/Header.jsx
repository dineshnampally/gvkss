import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import logo from '../assets/logo.jpg';
import { motion, AnimatePresence } from 'framer-motion';

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
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
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
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex flex-col sticky top-0 z-50"
      variants={headerVariants}
      animate={isHeaderVisible ? 'visible' : 'hidden'}
      initial="visible"
    >
      <div className="w-screen flex flex-row justify-between items-center py-1 px-4 bg-[#333FAF] text-white text-[10px]">
        <h6 className="text-center">The Power In Your Hand</h6>
        <p className="text-center">
          Office Mob: <span>7441 &nbsp; 143 &nbsp; 143 &nbsp; &nbsp; </span>
        </p>
      </div>

      <div ref={navRef}>
        <nav className="bg-[#FBFAFA] border-b-2 border-gray-400 w-full">
          <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2 flex-col sm:flex-row">
            {/* Logo */}
            <div className="mb-1 sm:mb-0">
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                <img src={logo} alt="Store Logo" className="h-24 object-cover" />
              </NavLink>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-4 text-lg gap-10 font-extrabold">
              {['/', '/contact', '/about', '/career'].map((path, index) => {
                const labels = ['Home', 'Contact', 'About', 'Career'];
                return (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-blue-600 font-semibold'
                        : 'text-gray-700 hover:text-blue-500'
                    }
                  >
                    {labels[index]}
                  </NavLink>
                );
              })}
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden flex justify-end w-full sm:w-auto">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-700">
                <FiMenu />
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="flex flex-col items-center bg-[#FBFAFA] py-2 lg:hidden font-extrabold overflow-hidden"
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {['/', '/contact', '/about', '/career'].map((path, index) => {
                  const labels = ['Home', 'Contact', 'About', 'Career'];
                  return (
                    <NavLink
                      key={path}
                      to={path}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        (isActive ? 'text-blue-600 font-semibold' : 'text-gray-700') +
                        ' py-1'
                      }
                    >
                      {labels[index]}
                    </NavLink>
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
