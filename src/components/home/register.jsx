'use client';
import { useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast.success('🎉 Registration Successful! We\'ll contact you soon!', {
          duration: 2000,
          position: 'top-center',
          style: {
            background: '#10B981',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '600',
            padding: '16px 24px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)',
          },
        });
        e.target.reset(); // Clear the form
      } else {
        toast.error('❌ Submission Failed! Please try again.', {
          duration: 4000,
          position: 'top-center',
          style: {
            background: '#EF4444',
            color: '#fff',
            fontSize: '16px',
            fontWeight: '600',
            padding: '16px 24px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)',
          },
        });
      }
    } catch (error) {
      toast.error('❌ Network Error! Please check your connection.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#EF4444',
          color: '#fff',
          fontSize: '16px',
          fontWeight: '600',
          padding: '16px 24px',
          borderRadius: '12px',
          boxShadow: '0 10px 25px rgba(239, 68, 68, 0.3)',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Toast Container */}
      <Toaster />
      
      {/* Desktop View */}
      <div
        className="hidden lg:flex relative min-h-[32rem] bg-cover bg-center items-center justify-between px-10"
        style={{ backgroundImage: "url('/home/contactus.png')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F2A44]/70 via-[#1F2A44]/50 to-[#1F2A44]/30 z-0" />

        {/* Left Side Text */}
        <div className="relative z-10 text-white text-center max-w-2xl mx-auto space-y-6 px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-extrabold">Register Now!</h1>

          <p className="text-2xl md:text-4xl font-bold text-[#FFD700]">
            "Take the First Step Toward
            <br />
            <span className="text-[#FFD700] font-extrabold text-4xl block mt-1">
              Success"
            </span>
          </p>

          <div className="space-y-4 text-lg mt-20">
            <div className="flex items-center justify-start space-x-3">
              <div className="bg-yellow-400 text-white p-2 rounded-full">
                <MdEmail className="text-2xl" />
              </div>
              <span className="text-white text-2xl">awtmaft@gmail.com</span>
            </div>

            <div className="flex items-center justify-start space-x-3">
              <div className="bg-yellow-400 text-white p-2 rounded-full">
                <BsTelephone className="text-2xl" />
              </div>
              <span className="text-white text-2xl">+91 8983508919</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="relative z-10 bg-white p-6 rounded-r-4xl rounded-t-4xl shadow-[0_2px_4px_0_rgba(195,195,195,0.8)] w-full max-w-sm p-14 mr-40">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 w-full max-w-xs mx-auto"
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="81580f00-4589-4c21-b377-2cfd3cf0e5b3"
            />

            {/* Email Subject */}
            <input
              type="hidden"
              name="subject"
              value="New Course Registration - Contact Form Submission"
            />

            {/* Email Template */}
            <input
              type="hidden"
              name="from_name"
              value="Course Registration Form"
            />

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
            />

            {/* Course */}
            <select
              name="course"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              <option value="">Select Course</option>
              <option value="Draughtsman Civil">Draughtsman Civil</option>
              <option value="Draughtsman Mechanical">Draughtsman Mechanical</option>  
              <option value="Copa">Computer Operator & Programming Assistant (COPA)</option>
              <option value="marine filter">Marine Fitter</option>
              <option value="ract">Refrigeration & Air Conditioning Technician (RACT)</option>
              <option value="Mechanical Fitter">Mechanical Fitter</option>
              <option value="Marine Electrician">Marine Electrician</option>  
              <option value="Marine Welder">Marine Welder</option>
            </select>

            {/* Hidden field to customize email format */}
            <input
              type="hidden"
              name="message"
              value="New registration received with the following details:"
            />
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-transparent py-3 rounded-md transition disabled:cursor-not-allowed"
            >
              <span
                className={`w-full flex items-center justify-center px-6 py-3 rounded-md shadow-md text-md font-medium tracking-wide transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    : 'bg-[#1a264f] text-white hover:bg-[#243764] transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span className="text-white text-sm">SUBMITTING...</span>
                  </span>
                ) : (
                  'SUBMIT'
                )}
              </span>
            </button>
          </form>
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden">
        {/* Hero Section */}
        <div
          className="relative min-h-[20rem] bg-cover bg-center flex items-center justify-center px-4"
          style={{ backgroundImage: "url('/home/contactus.png')" }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F2A44]/80 via-[#1F2A44]/70 to-[#1F2A44]/60 z-0" />

          {/* Hero Content */}
          <div className="relative z-10 text-white text-center space-y-4 px-4 py-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold">Register Now!</h1>
            <p className="text-xl sm:text-2xl font-bold text-[#FFD700]">
              "Take the First Step Toward
              <br />
              <span className="text-[#FFD700] font-extrabold text-2xl sm:text-3xl block mt-1">
                Success"
              </span>
            </p>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="bg-[#1F2A44] py-6 px-4">
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-yellow-400 text-white p-2 rounded-full">
                <MdEmail className="text-xl" />
              </div>
              <span className="text-white text-lg">awtmaft@gmail.com</span>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <div className="bg-yellow-400 text-white p-2 rounded-full">
                <BsTelephone className="text-xl" />
              </div>
              <span className="text-white text-lg">+91 8983508919</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gray-50 py-8 px-4">
          <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="81580f00-4589-4c21-b377-2cfd3cf0e5b3"
              />

              {/* Email Subject */}
              <input
                type="hidden"
                name="subject"
                value="New Course Registration - Contact Form Submission"
              />

              {/* Email Template */}
              <input
                type="hidden"
                name="from_name"
                value="Course Registration Form"
              />

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed text-base"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed text-base"
              />

              {/* Course */}
              <select
                name="course"
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100 disabled:cursor-not-allowed text-base"
              >
                <option value="">Select Course</option>
                <option value="Draughtsman Civil">Draughtsman Civil</option>
                <option value="Draughtsman Mechanical">Draughtsman Mechanical</option>  
                <option value="Copa">Computer Operator & Programming Assistant (COPA)</option>
                <option value="marine filter">Marine Fitter</option>
                <option value="ract">Refrigeration & Air Conditioning Technician (RACT)</option>
                <option value="Mechanical Fitter">Mechanical Fitter</option>
                <option value="Marine Electrician">Marine Electrician</option>  
                <option value="Marine Welder">Marine Welder</option>
              </select>

              {/* Hidden field to customize email format */}
              <input
                type="hidden"
                name="message"
                value="New registration received with the following details:"
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-transparent py-3 rounded-md transition disabled:cursor-not-allowed"
              >
                <span
                  className={`w-full flex items-center justify-center px-6 py-4 rounded-md shadow-md text-lg font-medium tracking-wide transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-[#1a264f] text-white hover:bg-[#243764] transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      <span className="text-white text-base">SUBMITTING...</span>
                    </span>
                  ) : (
                    'SUBMIT'
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}