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
        <div className="bg-[url('https://images.unsplash.com/photo-1676676701395-5fd57415a91a?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover rounded-sm text-white max-w-screen-xl mx-auto p-6 sm:p-10 flex flex-col items-center justify-center gap-6 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <div className="text-center flex flex-col justify-center items-center px-4 text-shadow-black">
            <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight">
              Our Company
            </h3>
            <ul>
              <li >
                <p className="text-xl sm:text-base md:text-2xl max-w-xl text-center font-extralight">
                  We build greater futures for businesses across multiple industries.
                </p>
              </li>
              <li>
                <p className="text-xl sm:text-base md:text-2xl mt-2 max-w-xl text-center font-extralight">
                  We’re in it for good, driving positive change for the benefit of all.
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
