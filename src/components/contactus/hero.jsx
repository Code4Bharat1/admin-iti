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
    const value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length <= 10) {
      setFormData(prev => ({
        ...prev,
        mobile: value
      }));
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      setSubmitStatus('validation');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('invalid_email');
      setIsSubmitting(false);
      return;
    }

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
   <section className="py-16 bg-[#f5faff]">
      <h2 className="text-center text-5xl font-extrabold text-[#1F2A44] mb-14">
        Contact Us
      </h2>

      <div
        className="w-full max-w-[90rem] px-6 md:px-16 mx-auto bg-cover bg-center overflow-hidden relative flex flex-col md:flex-row shadow-lg"
        style={{ backgroundImage: "url('/contactus/class.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F2A44]/80 via-[#1F2A44]/60 to-[#1F2A44]/40" />

{/* Contact Info - centered with adjusted spacing and clean line breaks */}
<div className="flex-1 flex items-center justify-center relative z-10">
  <div className="space-y-6 text-white px-8 md:px-20 py-16 max-w-xl">
    
    {/* Address */}
    <div className="flex items-start gap-4">
      <div className="bg-yellow-400 rounded-full p-4">
        <FaMapMarkerAlt className="text-white text-3xl" />
      </div>
      <div className="text-2xl md:text-3xl font-semibold leading-snug">
        <p>Mazgaon, Taluka Murud</p>
        <p>District Raigad</p>
        <p>Maharashtra – 402401</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-center gap-4">
      <div className="bg-yellow-400 rounded-full p-4">
        <FaEnvelope className="text-white text-3xl" />
      </div>
      <p className="text-2xl md:text-3xl font-semibold">awtmtaft@gmail.com</p>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-4">
      <div className="bg-yellow-400 rounded-full p-4">
        <FaPhone className="text-white text-3xl" />
      </div>
      <p className="text-2xl md:text-3xl font-semibold">+91 8983508919</p>
    </div>
  </div>
</div>



        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex-1 p-10 md:p-20 relative z-10 space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-white outline-none placeholder-black text-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-white outline-none placeholder-black text-lg"
            required
          />
          <div className="relative">
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleMobileChange}
              placeholder="Your Mobile no. (10 digits)"
              className="w-full p-4 rounded-lg bg-white outline-none placeholder-black text-lg"
              required
              maxLength="10"
              pattern="[0-9]{10}"
              title="Please enter exactly 10 digits"
            />
            <div className="absolute right-4 top-4 text-sm text-gray-500">
              {formData.mobile.length}/10
            </div>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows={5}
            className="w-full p-4 rounded-lg bg-white outline-none placeholder-black text-lg"
            required
          />

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="text-green-300 text-center font-semibold text-lg">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="text-red-300 text-center font-semibold text-lg">
              Failed to send message. Please try again.
            </div>
          )}
          {submitStatus === 'validation' && (
            <div className="text-yellow-300 text-center font-semibold text-lg">
              Please fill in all fields.
            </div>
          )}
          {submitStatus === 'invalid_email' && (
            <div className="text-yellow-300 text-center font-semibold text-lg">
              Please enter a valid email address.
            </div>
          )}
          {submitStatus === 'invalid_mobile' && (
            <div className="text-yellow-300 text-center font-semibold text-lg">
              Please enter exactly 10 digits for mobile number.
            </div>
          )}

          <div className="flex justify-center pt-2">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[#FFD700] hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md text-lg transition-colors duration-300"
            >
              {isSubmitting ? 'SENDING...' : 'SUBMIT'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
