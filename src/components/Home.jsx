import React from 'react';
import { motion } from 'framer-motion';
import Corousal from './home-comp/Corousal';
import OurCompany from './home-comp/OurCompany';
import CareerHome from './home-comp/CareerHome';
import Banner from './home-comp/Banner';
import Services from './about-comp/Services';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10 overflow-visible">
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <Corousal />
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <OurCompany />
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <Services />
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full py-10 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none" />
        <div className="absolute inset-0 opacity-30 pointer-events-none" />
        <CareerHome />
      </motion.section>
    </div>
  );
};

export default Home;
