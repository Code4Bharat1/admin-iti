'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    // Only allow digits and limit to 10 characters
    const numbersOnly = value.replace(/[^0-9]/g, '');
    if (numbersOnly.length <= 10) {
      setFormData(prev => ({
        ...prev,
        mobile: numbersOnly
      }));
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate form
    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      setSubmitStatus('validation');
      setIsSubmitting(false);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('invalid_email');
      setIsSubmitting(false);
      return;
    }

    // Mobile number validation - exactly 10 digits
    if (formData.mobile.length !== 10) {
      setSubmitStatus('invalid_mobile');
      setIsSubmitting(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("mobile", formData.mobile);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("access_key", "81580f00-4589-4c21-b377-2cfd3cf0e5b3");
    
    // Email configuration to show user's actual email
    formDataToSend.append("from_name", `${formData.name} (via Your Website)`);
    
    formDataToSend.append("subject", `New Contact Form Submission from ${formData.name}`);

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-12 bg-[#f5faff]">
      <h2 className="text-center text-4xl font-extrabold text-[#1F2A44] mb-10">
        Contact Us
      </h2>

      <div
        className="max-w-6xl mx-auto bg-cover bg-center  overflow-hidden relative flex flex-col md:flex-row shadow-lg"
        style={{ backgroundImage: "url('/contactus/class.png')" }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#1F2A44]/80 via-[#1F2A44]/60 to-[#1F2A44]/40"
        />
        
        {/* Contact Info */}
        <div className="flex-1 text-white p-16 relative z-10 space-y-6">
          {/* Address */}
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 rounded-full p-3">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <p className='text-xl'>
              Mazgaon, Taluka Murud, <br />
              District Raigad, <br />
              Maharashtra – 402401
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 rounded-full p-3">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <p className='text-xl'>awtmtaft@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-400 rounded-full p-3">
              <FaPhone className="text-white text-xl" />
            </div>
            <p className='text-xl'>+91 8983508919</p>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 p-8 relative z-10 mx-10 space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white outline-none"
            required
          />
          <div className="relative">
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleMobileChange}
              placeholder="Your Mobile no. (10 digits)"
              className="w-full p-3 rounded-lg bg-white outline-none"
              required
              maxLength="10"
              pattern="[0-9]{10}"
              title="Please enter exactly 10 digits"
            />
            <div className="absolute right-3 top-3 text-sm text-gray-500">
              {formData.mobile.length}/10
            </div>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows={4}
            className="w-full p-3 rounded-lg bg-white outline-none"
            required
          />
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="text-green-300 text-center font-semibold text-sm">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-300 text-center font-semibold text-sm">
              Failed to send message. Please try again.
            </div>
          )}
          {submitStatus === 'validation' && (
            <div className="text-yellow-300 text-center font-semibold text-sm">
              Please fill in all fields.
            </div>
          )}
          {submitStatus === 'invalid_email' && (
            <div className="text-yellow-300 text-center font-semibold text-sm">
              Please enter a valid email address.
            </div>
          )}
          {submitStatus === 'invalid_mobile' && (
            <div className="text-yellow-300 text-center font-semibold text-sm">
              Please enter exactly 10 digits for mobile number.
            </div>
          )}

          <div className="flex justify-center">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FFD700] hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md transition-colors duration-300"
            >
              {isSubmitting ? 'SENDING...' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}