import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment, FaMobile, FaGlobe, FaLocationArrow } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import image from '../assets/favicon.svg'

const Contact = () => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState({ show: false, success: false, message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const serviceID = 'service_i6jskiv';
    const templateID = 'template_fexkizx';
    const publicKey = '5mEOR8X3HdEXTI1rR';

    const templateParams = { fullname, email, message };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFullName('');
        setEmail('');
        setMessage('');
        setFormStatus({
          show: true,
          success: true,
          message: 'Message sent successfully!'
        });
        setIsSending(false);
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setFormStatus({ show: false, success: false, message: '' });
        }, 5000);
      },
      (error) => {
        console.log('FAILED...', error);
        setFormStatus({
          show: true,
          success: false,
          message: 'Failed to send message. Please try again later.'
        });
        setIsSending(false);
        
        // Hide error message after 5 seconds
        setTimeout(() => {
          setFormStatus({ show: false, success: false, message: '' });
        }, 5000);
      }
    );
  };

  return (
    <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 max-w-7xl mx-auto text-[15px] sm:text-[16px] mb-10">
      {/* Header Section */}
      <div className="relative mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* Main content - Contact form and Let's Connect */}
      <div className="flex flex-col md:flex-row gap-12 mb-10 p-5">
        {/* Let's Connect Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <div className="p-6 h-full">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Let's Connect</h3>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you! Share your details below, and we'll get back to you shortly.
            </p>
            <div className="overflow-hidden">
              <img
                src='https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_23-2149167947.jpg'
                alt="Let's Connect"
                className="w-full h-auto transition-transform duration-500 hover:scale-105 hover:rotate-1"
              />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2">
          <div className="bg-white p-6 sm:p-8 border-gray-400">
            {formStatus.show && (
              <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                {formStatus.message}
              </div>
            )}
            
            <form className="w-full max-w-md mx-auto space-y-6" onSubmit={handleSubmit}>
              <div className="group">
                <div className="flex items-center border-b-2 border-gray-200 pb-2 transition-colors duration-300 group-focus-within:border-blue-500">
                  <FaUser className="mr-3 text-gray-500 group-focus-within:text-blue-500 transition-colors duration-300" />
                  <input
                    name="fullname"
                    type="text"
                    value={fullname}
                    placeholder="Full Name *"
                    className="w-full border-none focus:outline-none placeholder-gray-400 text-gray-800 bg-transparent"
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="group">
                <div className="flex items-center border-b-2 border-gray-200 pb-2 transition-colors duration-300 group-focus-within:border-blue-500">
                  <FaEnvelope className="mr-3 text-gray-500 group-focus-within:text-blue-500 transition-colors duration-300" />
                  <input
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Email *"
                    className="w-full border-none focus:outline-none placeholder-gray-400 text-gray-800 bg-transparent"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="group">
                <div className="flex items-start border-b-2 border-gray-200 pb-2 transition-colors duration-300 group-focus-within:border-blue-500">
                  <FaComment className="mr-3 text-gray-500 mt-[6px] group-focus-within:text-blue-500 transition-colors duration-300" />
                  <textarea
                    name="message"
                    value={message}
                    placeholder="Message / Description *"
                    className="w-full border-none focus:outline-none resize-none placeholder-gray-400 text-gray-800 h-[120px] bg-transparent"
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-lg font-semibold shadow-md transition duration-300 transform hover:-translate-y-1 ${isSending ? 'opacity-60 cursor-not-allowed' : 'hover:from-blue-600 hover:to-blue-800 hover:shadow-lg'}`}
              >
                {isSending ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Submit Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Reach Us Section  */}
      <div className="mt-16 w-full bg-gradient-to-br from-[#e5f3f8] to-[#f0f9fe] rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row justify-evenly items-center p-6 md:p-10">
          <div className="md:w-1/2 mb-8 md:mb-0 px-4 md:px-8">
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 text-center md:text-left">Reach Us</h3>
            <div className="text-center md:text-left text-gray-700 mb-8">
              <h5 className="text-xl font-medium">Kalyani Venkatesh</h5>
              <p className="text-gray-500">CEO & Founder</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-[14px]">
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-sm">
                <div className="bg-blue-100 p-2 rounded-full">
                  <FaMobile className="text-blue-600" />
                </div>
                <span>+91 7441 143 143</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-sm">
                <div className="bg-blue-100 p-2 rounded-full">
                  <FaEnvelope className="text-blue-600" />
                </div>
                <span className="truncate">gvkssceo@gvkss.com</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 p-3 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-sm">
                <div className="bg-blue-100 p-2 rounded-full">
                  <FaGlobe className="text-blue-600" />
                </div>
                <span>www.gvkss.com</span>
              </div>
              <div className="flex items-start gap-3 bg-white/60 p-3 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-sm">
                <div className="bg-blue-100 p-2 rounded-full mt-1">
                  <FaLocationArrow className="text-blue-600" />
                </div>
                <span className="text-[13px]">
                  Plot no. 109, Road No.3,<br />
                  Brudhavan Colony, Gurramguda,<br />
                  Hyderabad - 501 510, Telangana, India.
                </span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img 
              src="https://assets.dochipo.com/editor/illustrations/contact-us/fbab5134-2a33-48bb-a2c5-0c5901b6f163.png" 
              alt="Contact Illustration" 
              className="max-w-full h-auto transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
