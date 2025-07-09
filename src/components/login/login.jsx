'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/admin/auth/login', { email, password });
      const { token } = res.data;

      localStorage.setItem('token', token);
      router.push('/admindashboard');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  const handleForgotPassword = async () => {
    router.push('/adminforgot');
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Blue with Logo and Illustration */}
      <div className="w-1/2 bg-[#1F2A44] text-white flex flex-col items-center justify-center p-8">
        {/* Logo */}
        <Image
          src="/logo.png" 
          alt="MAF ITI Logo"
          width={300}
          height={300}
          className="mb-6"
        />
        {/* Illustration */}
        <Image
          src="/login.png"
          alt="Classroom"
          width={600}
          height={600}
          className="mb-6"
        />
        {/* Info Text */}
        <p className="text-yellow-400 text-2xl font-semibold text-center">
          Please login to manage the website.
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-full max-w-lg px-6">
          <h2 className="text-5xl font-bold mb-10 font-[Times_New_Roman] text-black text-center">
            Welcome to MAF ITI
          </h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block mb-1 text-xl font-[Times_New_Roman] text-black">
                Enter Email ID
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email ID"
                className="w-full px-4 py-3 bg-[#F4F9FF] rounded-lg shadow-md text-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-xl font-[Times_New_Roman] text-black">
                Enter Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Password"
                className="w-full px-4 py-3 bg-[#F4F9FF] rounded-lg shadow-md text-black focus:outline-none"
              />
            </div>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <div className="text-right text-xl font-[Times_New_Roman] text-gray-900">
              <span onClick={handleForgotPassword} className="hover:underline cursor-pointer">
                Forgot Password?
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-transparent text-[#1B264F] py-2 rounded-md font-semibold"
            >
              <span className="bg-[#1B264F] text-white text-xl px-8 py-3 rounded">
                Log In
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
