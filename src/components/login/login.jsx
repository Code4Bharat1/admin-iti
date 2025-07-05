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
      const res = await axios.post('http://localhost:5000/api/admin/auth/login', { email, password }); // ✅ Ensure correct route
      const { token } = res.data;

      // Store token locally (could be cookie instead)
      localStorage.setItem('token', token);

      // Redirect to dashboard or admin page
      router.push('/');
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side */}
      <div className="w-1/2 bg-[#1B264F] text-white flex flex-col items-center justify-center p-8">
        <Image
          src="/login.png"
          alt="Classroom"
          width={500}
          height={500}
          className="mb-6"
        />
        <p className="text-yellow-400 text-2xl font-semibold text-center">
          Please login to manage the website.
        </p>
      </div>

      {/* Right Side */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-full max-w-lg px-6">
          <h2 className="text-5xl font-bold mb-10 font-[Times_New_Roman] text-center">
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
                className="w-full px-4 py-3 bg-[#F4F9FF] rounded-lg shadow-md focus:outline-none"
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
                className="w-full px-4 py-3 bg-[#F4F9FF] rounded-lg shadow-md focus:outline-none"
              />
            </div>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <div className="text-right text-xl font-[Times_New_Roman] text-gray-900">
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
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
