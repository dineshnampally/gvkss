import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const CareerForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false); // State for loading
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      await emailjs.sendForm(
        'service_bzxb7ln',
        'template_8mifi48',
        formRef.current,
        '5mEOR8X3HdEXTI1rR'
      );
      setSuccessMessage('Your application was submitted successfully!');
      formRef.current.reset(); 
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="flex justify-center w-full">
      <hr className="w-11/12 md:w-3/4 lg:w-1/2 my-4 border-gray-300" />
    </div>
    <div className="w-screen px-4 py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800">Application Form</h1>
        <p className="mt-2 text-lg text-gray-600">
          Please fill out this form to submit your application. Ensure all required fields are completed accurately.
        </p>
      </div>

      {/* Modern Glassmorphism Card with VFX */}
      <div className="relative max-w-4xl mx-auto mt-8">
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-2xl p-1 bg-gradient-to-r from-[#fbc2eb] via-[#a6c1ee] to-[#fbc2eb] animate-gradient-x" style={{backgroundSize:'200% 200%'}}></div>
        {/* Glassmorphism Card with Glow */}
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
        {/* Form Content */}
        <form ref={formRef} onSubmit={sendEmail} className="relative z-30 max-w-4xl mx-auto p-8 sm:p-12 space-y-6 rounded-2xl bg-white/80 backdrop-blur-xl">
          {/* Full Name */}
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            required
            className="w-full p-4 text-lg border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur placeholder-gray-400"
            style={{boxSizing: 'border-box'}}
          />
          {/* Mobile Number */}
          <input
            type="tel"
            name="number"
            placeholder="Mobile Number"
            required
            className="w-full p-4 text-lg border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur placeholder-gray-400"
            style={{boxSizing: 'border-box'}}
          />
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-4 text-lg border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-200 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur placeholder-gray-400"
            style={{boxSizing: 'border-box'}}
          />
          {/* Qualification */}
          <input
            type="text"
            name="qualification"
            placeholder="Highest Qualification"
            required
            className="w-full p-4 text-lg border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-200 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur placeholder-gray-400"
            style={{boxSizing: 'border-box'}}
          />
          {/* Position Applying For */}
          <input
            type="text"
            name="position"
            placeholder="Position Applying For"
            required
            className="w-full p-4 text-lg border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-200 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur placeholder-gray-400"
            style={{boxSizing: 'border-box'}}
          />
          {/* Resume Link */}
          <input
            type="url"
            name="resume"
            placeholder="Paste Resume Link (Google Drive, Dropbox, etc.)"
            required
            className="w-full p-4 text-lg border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur placeholder-gray-400"
            style={{boxSizing: 'border-box'}}
          />
          {/* Submit Button */}
          <div className="w-full p-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-4 text-xl font-bold rounded-lg bg-gradient-to-r from-pink-300 via-purple-200 to-blue-200 text-gray-900 shadow-md transition-all duration-300 transform hover:scale-105 hover:from-pink-400 hover:to-blue-300 focus:outline-none focus:ring-4 focus:ring-pink-200 ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
        {/* Success Message */}
        {successMessage && (
          <p className="mt-4 text-center text-green-600 font-semibold relative z-30">{successMessage}</p>
        )}
      </div>
    </div>
    <div className="flex justify-center w-full">
      <hr className="w-11/12 md:w-3/4 lg:w-1/2 my-4 border-gray-300" />
    </div>
    </>
  );
};

export default CareerForm;
