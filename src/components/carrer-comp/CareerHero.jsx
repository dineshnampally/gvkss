import React from 'react'
import { Link } from 'react-router-dom'

const CareerHero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Dotted Decoration */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-20 flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-24">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left px-4">
          <h2 className="text-3xl text-black font-extrabold sm:text-5xl">
          Grow with Us
          </h2>
          <p className="mt-8 text-2xl text-gray-800">
          Fill out the form and submit your resume to be contacted by the GVKSS hiring team.
          </p>
        </div>

        {/* Video Section */}
        <div className="lg:w-1/2 relative h-full lg:h-screen/2">
          {/* Decorative Elements */}
          <img
            src='https://cdn.pixabay.com/photo/2019/02/25/13/56/meeting-4019730_1280.jpg'
            muted
            loop
            autoPlay
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-10 -right-10 md:w-20 md:h-20 lg:w-40 lg:h-40 border-dotted border-4 border-green-400 rounded-full -z-10"></div>
        </div>
      </div>
    </div>
  )
}

export default CareerHero