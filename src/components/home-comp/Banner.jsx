import React from 'react'
import logo from '../../assets/file.svg'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='w-full py-6 px-4'>
      <div className='flex flex-col md:flex-row justify-around items-center text-black gap-3'>
        
        {/* Left: Logo + Divider + Text */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-2 '>
          <img src={logo} alt="logo" className='h-[150px] w-[150px]' />
          
          {/* Vertical Line */}
          <div className='hidden md:block h-[150px] w-[2px] bg-black mx-4'></div>
          <div className='block md:hidden w-full h-[2px] bg-black my-4'></div>

          {/* Text */}
          <p className='text-lg md:text-2xl font-extralight text-center md:text-left font-sans'>
            Power In <br />Your Hand
          </p>
        </div>

        {/* Right: Contact Us */}
        <div>
          <Link
            to="/contact"
            className='border border-black px-4 py-2 rounded-md hover:bg-white hover:text-gray-700 transition duration-300 text-md mt-4'
          >
            Contact Us &gt;
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
