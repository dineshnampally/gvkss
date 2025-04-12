import React from 'react';

const Location = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen w-full px-4 py-12 bg-gradient-to-br from-[#3b82f6] via-[#9333ea] to-[#6b7280] text-white">
      
      {/* Address Section */}
      <div className="w-full lg:w-1/2 px-4 sm:px-10 lg:px-16 space-y-8">
        <h5 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Our Office</h5>

        <div className="space-y-6 font-extralight">
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light mb-2 text-white">GVKSS, Hyderabad</h3>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
             No. 3, near Shivalayam, <br /> Brindavan Colony, Gurram Guda,<br /> Hyderabad, Telangana 501510
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-light mb-2 text-white">Contact Us</h3>
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
              Phone: +91 7441 143 143<br />
              Email: gvkssceo@gvkss.com
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 rounded-xl overflow-hidden shadow-xl h-[300px] sm:h-[400px] lg:h-[80vh]">
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
  );
};

export default Location;
