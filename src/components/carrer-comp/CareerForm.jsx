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
    <hr />
    <div className="w-screen px-4 py-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800">Application Form</h1>
        <p className="mt-2 text-lg text-gray-600">
          Please fill out this form to submit your application. Ensure all required fields are completed accurately.
        </p>
      </div>

      <form ref={formRef} onSubmit={sendEmail} className="max-w-4xl mx-auto mt-8 space-y-6">
        {/* Full Name */}
        <div className="w-full p-2">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            required
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{boxSizing: 'border-box'}}
          />
        </div>

        {/* Mobile Number */}
        <div className="w-full p-2">
          <input
            type="tel"
            name="number"
            placeholder="Mobile Number"
            required
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{boxSizing: 'border-box'}}
          />
        </div>

        {/* Email */}
        <div className="w-full p-2">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{boxSizing: 'border-box'}}
          />
        </div>

        {/* Qualification */}
        <div className="w-full p-2">
          <input
            type="text"
            name="qualification"
            placeholder="Highest Qualification"
            required
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{boxSizing: 'border-box'}}
          />
        </div>

        {/* Position Applying For */}
        <div className="w-full p-2">
          <input
            type="text"
            name="position"
            placeholder="Position Applying For"
            required
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{boxSizing: 'border-box'}}
          />
        </div>

        {/* Resume Link */}
        <div className="w-full p-2">
          <input
            type="url"
            name="resume"
            placeholder="Paste Resume Link (Google Drive, Dropbox, etc.)"
            required
            className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            style={{boxSizing: 'border-box'}}
          />
        </div>

        {/* Submit Button */}
        <div className="w-full p-2">
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-4 text-xl text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
              loading ? 'bg-gray-400 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

      {/* Success Message */}
      {successMessage && (
        <p className="mt-4 text-center text-green-600 font-semibold">{successMessage}</p>
      )}
    </div>
    <hr />
    </>
  );
};

export default CareerForm;
