'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSendOTP = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:5000/api/admin/auth/send-otp', { email });
      setStep(2);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send OTP');
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await axios.post('http://localhost:5000/api/admin/auth/verify-otp', { email, otp });
      setStep(3);
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid OTP');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError('');
    if (newPassword !== confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      await axios.post('http://localhost:5000/api/admin/auth/reset-password', { email, otp, newPassword });
      setSuccess('Password reset successfully!');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password');
    }
  };

  const renderStepForm = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <label className="block mb-1 text-xl font-[Times_New_Roman] text-black">Enter Email ID</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email ID"
              className="w-full px-4 py-3 bg-[#F4F9FF] rounded-lg shadow-md text-black"
            />
            <button type="submit" className="w-full bg-transparent text-[#1B264F] py-2 rounded-md font-semibold">
              <span className="bg-[#1B264F] text-white text-xl px-8 py-3 rounded">
                Send OTP
              </span>
            </button>
          </form>
        );

      case 2:
        return (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <label className="block mb-1 text-xl font-[Times_New_Roman] text-black">Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              placeholder="OTP"
              className="w-full px-4 py-3 bg-[#F4F9FF] rounded-lg shadow-md text-black"
            />
            <button type="submit" className="w-full bg-transparent text-[#1B264F] py-2 rounded-md font-semibold">
              <span className="bg-[#1B264F] text-white text-xl px-8 py-3 rounded">
                Verify OTP
              </span>
            </button>
          </form>
        );

      case 3:
        return (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <label className="block mb-1 text-xl font-[Times_New_Roman] text-black">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-[#F4F9FF] rounded-lg shadow-md text-black"
            />

            <label className="block mb-1 text-xl font-[Times_New_Roman] text-black">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-[#F4F9FF] rounded-lg shadow-md text-black"
            />

            <button type="submit" className="w-full bg-transparent text-[#1B264F] py-2 rounded-md font-semibold">
              <span className="bg-[#1B264F] text-white text-xl px-8 py-3 rounded">
                Reset Password
              </span>
            </button>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-[#1B264F] text-white flex flex-col items-center justify-center p-8">
        <Image src="/login.png" alt="Classroom" width={500} height={500} className="mb-6" />
        <p className="text-yellow-400 text-2xl font-semibold text-center">
          Reset your password securely.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-full max-w-lg px-6">
          <h2 className="text-5xl font-bold mb-10 font-[Times_New_Roman] text-black text-center">
            Forgot Password
          </h2>

          {error && <p className="text-red-600 text-center">{error}</p>}
          {success && <p className="text-green-600 text-center">{success}</p>}

          {renderStepForm()}
        </div>
      </div>
    </div>
  );
}
