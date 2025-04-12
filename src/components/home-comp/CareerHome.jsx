import React from 'react';
import { Link } from 'react-router-dom';

const CareerHome = () => {
  return (
    <div className='flex flex-col items-start justify-center px-4 py-10 w-full text-white mt-0'>
      <h2 className='text-2xl text-black sm:text-2xl font-semibold uppercase tracking-wider mb-6 font-sans ml-24 '>
        Careers
      </h2>

      <div className="w-full max-w-7xl mx-auto rounded-sm p-6 md:p-12 flex flex-col justify-center gap-6 bg-[url(https://images.pexels.com/photos/4069291/pexels-photo-4069291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)] bg-no-repeat bg-center bg-cover h-auto sm:h-[300px] md:h-[500px] lg:h-[600px]">
        <div className='flex flex-col justify-center items-start rounded-xl p-6 sm:p-8 md:p-10 max-w-3xl'>
          <h3 className='text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight'>
            Careers at GVKSS
          </h3>
          <p className='text-lg sm:text-xl md:text-2xl font-extralight font-sans'>
            You are invited to pursue your aspirations with purpose. <br className="hidden sm:block" />
            Seek what inspires your best self. Let your spark flourish.
          </p>

          <p className='mt-6'>
            <Link
              to='/career'
              className='inline-flex items-center gap-3 px-6 py-2 bg-[#5f1ebe] text-white text-lg font-extralight rounded-xl hover:bg-blue-700 transition duration-300 font-sans'
            >
              Visit Careers
              <img
                src='https://hcltech.imgix.net/sites/default/files/images/icons/readmore-arrow.svg'
                alt='arrow'
                className='w-5 h-5 invert'
              />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerHome;
