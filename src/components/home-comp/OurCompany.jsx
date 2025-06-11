import React, { useState, useEffect } from 'react';

const OurCompany = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxStyle = {
    backgroundPosition: `center ${scrollY * 0.9}px`, // Adjust speed with multiplier
  };

  return (
    <section
      className="bg-[#FBFAFA] w-full overflow-hidden flex flex-col items-center justify-center"
      style={parallaxStyle}
    >
      <div className="p-8 sm:p-16 md:p-24 lg:p-32 max-w-screen-xl text-center font-bold">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug">
          Drive Your Vision Forward with{' '}
          <strong className="font-extrabold bg-clip-text text-transparent [background-image:linear-gradient(to_right,_#a855f7_0%,_#c084fc_50%,_#9333ea_100%)]">
            Smart Strategies
          </strong>
          <sup>*</sup>
        </p>
      </div>

      <div className="w-full px-4 md:px-8 mb-10 ">
        <div className="relative max-w-screen-xl mx-auto flex flex-col items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-2xl p-1 bg-gradient-to-r from-[#fbc2eb] via-[#a6c1ee] to-[#fbc2eb] animate-gradient-x" style={{backgroundSize:'200% 200%'}}></div>
          {/* Glassmorphism Card with Glow and Pastel Overlay */}
          <div className="absolute inset-0 m-1 rounded-2xl overflow-hidden">
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#fbc2eb]/40 via-[#a6c1ee]/30 to-[#fbc2eb]/40 blur-2xl opacity-60 z-0 rounded-2xl animate-pulse"></div>
            {/* Pastel Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-[#fbc2eb]/40 to-[#a6c1ee]/40 backdrop-blur-xl z-10" />
            {/* Sparkles */}
            <svg className="absolute left-8 top-8 z-20 animate-pulse" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="10" fill="#fbc2eb" fillOpacity="0.7" /></svg>
            <svg className="absolute right-16 top-20 z-20 animate-pulse" width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="6" fill="#a6c1ee" fillOpacity="0.7" /></svg>
            <svg className="absolute left-1/2 bottom-10 z-20 animate-pulse" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="8" fill="#fffbe7" fillOpacity="0.7" /></svg>
          </div>
          {/* Card Content */}
          <div className="relative z-30 text-center flex flex-col justify-center items-center px-4 py-10 sm:py-16 w-full h-full">
            <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight text-gray-900 drop-shadow-lg">
              Our Company
            </h3>
            <ul>
              <li>
                <p className="text-xl sm:text-base md:text-2xl max-w-xl text-center font-extralight text-gray-700">
                  We build greater futures for businesses across multiple industries.
                </p>
              </li>
              <li>
                <p className="text-xl sm:text-base md:text-2xl mt-2 max-w-xl text-center font-extralight text-gray-700">
                  We're in it for good, driving positive change for the benefit of all.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCompany;
