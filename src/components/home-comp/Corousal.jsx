import React from 'react'
import { motion } from 'framer-motion'

const Corousal = () => {
    const scrollToServices = () => {
        const servicesSection = document.getElementById('services-section');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
            <video
                className="absolute w-full h-full object-cover"
                src="https://videos.pexels.com/video-files/30064776/12896315_2560_1440_60fps.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <div className="flex flex-row justify-center items-center gap-2 text-7xl p-5 flex-wrap drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
                    <h2 className="font-extrabold text-[#fcfcfc]">Innovate</h2>
                    <h3 className="font-extrabold bg-clip-text text-transparent [background-image:linear-gradient(to_left,_#ff6ec4_32.5px,_#ffb86c_91px,_#faff00_100%)] drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
                        Forward
                    </h3>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToServices}
                    className="group relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1462dd] to-[#4a90e2] transition-all duration-300 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4a90e2] to-[#1462dd] opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    <span className="relative flex items-center gap-2">
                        Explore Now
                        <svg 
                            className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M17 8l4 4m0 0l-4 4m4-4H3" 
                            />
                        </svg>
                    </span>
                </motion.button>
            </div>
        </div>
    )
}

export default Corousal
