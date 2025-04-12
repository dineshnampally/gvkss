import React from 'react';
import { Link } from 'react-router-dom';
import team from '../../assets/team.mp4';

const AboutHero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Dotted Decoration */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-24">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left px-4">
          <h2 className="text-4xl text-gray-400 font-ex sm:text-8xl">
            About <span className="bg-clip-text text-transparent [background-image:linear-gradient(to_left,_#ff6ec4_32.5px,_#ffb86c_91px,_#faff00_100%)] font-extrabold">GVKSS</span>
          </h2>
          <p className="mt-8 text-2xl text-gray-800">
            Delivering reliable and affordable software solutions designed to drive your success.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block px-6 py-2 bg-purple-500 text-white font-bold text-lg rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
            >
              Enquire Now
            </Link>
          </div>
        </div>

        {/* Video Section */}
        <div className="lg:w-1/2 relative h-full lg:h-screen/2">
          {/* Decorative Elements */}
          <video
            src={team}
            muted
            loop
            autoPlay
            className="w-full h-full object-cover rounded-lg shadow-lg"
          ></video>
          <div className="absolute -bottom-10 -right-10 md:w-20 md:h-20 lg:w-40 lg:h-40 border-dotted border-4 border-green-400 rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
