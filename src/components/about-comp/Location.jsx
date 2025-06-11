import React from 'react';
import { motion } from 'framer-motion';

const sparkleVariants = {
  initial: { opacity: 0, scale: 0.7 },
  animate: (delay) => ({
    opacity: [0, 1, 0],
    scale: [0.7, 1.2, 0.7],
    transition: { duration: 2.5, repeat: Infinity, delay }
  })
};

const Location = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen w-full px-4 py-12 bg-gradient-to-br from-[#1e293b] via-[#6366f1] to-[#312e81] relative overflow-hidden">
      {/* Sparkle VFX */}
      <motion.svg
        custom={0}
        initial="initial"
        animate={sparkleVariants.animate(0)}
        className="absolute left-10 top-10 z-10"
        width="56" height="56" viewBox="0 0 56 56" fill="none"
      >
        <circle cx="28" cy="28" r="14" fill="#ffe066" fillOpacity="0.8" />
      </motion.svg>
      <motion.svg
        custom={0.7}
        initial="initial"
        animate={sparkleVariants.animate(0.7)}
        className="absolute right-24 top-24 z-10"
        width="40" height="40" viewBox="0 0 40 40" fill="none"
      >
        <circle cx="20" cy="20" r="8" fill="#38bdf8" fillOpacity="0.7" />
      </motion.svg>
      <motion.svg
        custom={1.2}
        initial="initial"
        animate={sparkleVariants.animate(1.2)}
        className="absolute left-1/2 bottom-20 z-10"
        width="48" height="48" viewBox="0 0 48 48" fill="none"
      >
        <circle cx="24" cy="24" r="12" fill="#a78bfa" fillOpacity="0.7" />
      </motion.svg>

      {/* Address Section */}
      <motion.div
        className="w-full lg:w-1/2 px-4 sm:px-10 lg:px-16 flex flex-col items-start relative z-20"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
      >
        <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl shadow-2xl p-10 w-full max-w-xl mx-auto relative overflow-hidden">
          {/* Glow */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-[#ffe066]/30 via-[#38bdf8]/20 to-[#a78bfa]/30 blur-2xl opacity-60 z-0 rounded-3xl animate-pulse"></div>
          <h5 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 relative z-10 drop-shadow-lg">
            Our Office
          </h5>
          <div className="space-y-8 font-extralight relative z-10">
            <div>
              <h3 className="text-2xl lg:text-3xl font-light mb-2 text-white/90">GVKSS, Hyderabad</h3>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                No. 3, near Shivalayam, <br /> Brindavan Colony, Gurram Guda,<br /> Hyderabad, Telangana 501510
              </p>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-light mb-2 text-white/90">Contact Us</h3>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                Phone: <span className="font-semibold text-[#ffe066]">+91 7441 143 143</span><br />
                Email: <span className="font-semibold text-[#38bdf8]">gvkssceo@gvkss.com</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Map Section without border */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center relative z-20">
        <div className="rounded-2xl overflow-hidden bg-black/70 backdrop-blur-xl shadow-xl h-[300px] sm:h-[400px] lg:h-[80vh] w-[90vw] max-w-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.3382607956073!2d78.56439307500807!3d17.29922098357303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1003f78d4d3%3A0x6fe36cfedd07e4f2!2sGVKSS%20SOFTWARE%20PVT%20LIMITED!5e0!3m2!1sen!2sin!4v1744460979914!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
