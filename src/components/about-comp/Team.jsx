import React from 'react';
import meeting from '../../assets/meeting.mp4';
import { FaCheck } from 'react-icons/fa';

const Team = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen w-full px-4 py-10 md:px-10 lg:px-16 bg-white">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-8">
        <h5 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">Our Team</h5>

        <div className="space-y-6">
          <div className="flex flex-col justify-around">
            <h3 className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 mb-1">
              <FaCheck className="text-green-600" />
              Built on Trust, Guided by Expertise
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our team blends deep technical know-how with a commitment to transparency and collaboration,
              ensuring every decision we make is thoughtful, informed, and aligned with your goals.
            </p>
          </div>

          <div className="flex flex-col justify-around">
            <h3 className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-bold text-gray-700 mb-1">
              <FaCheck className="text-green-600" />
              The People Powering the Vision
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Behind every solution we build is a team of curious minds, skilled professionals, and passionate
              creators—driven by purpose and united by a shared goal: delivering real impact.
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[80vh] relative mb-8 lg:mb-0 rounded-xl overflow-hidden">
        <video
          src={meeting}
          muted
          loop
          autoPlay
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Team;
