'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Blogs() {
  const router = useRouter();

  return (
    <div className="bg-blue-100 py-12 px-4">
        <button
      onClick={() => router.push('/courses')}
      className="mb-6 flex items-center cursor-pointer text-[#1F2C56] hover:text-blue-700 transition-colors duration-200"
    >   <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Back
        </button>
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1a264f] mb-10">
        Read Our Latest Blogs
      </h2>

      {/* Blog Container */}
      <div className="bg-[#1a264f] max-w-6xl mx-auto p-8 rounded-lg p-20 space-y-10">
        {/* Blog Item 1 */}
        <div
          onClick={() => router.push('/courses/blog/blog1')}
          className="flex flex-col md:flex-row items-center gap-6 cursor-pointer hover:opacity-90 transition"
        >
          <Image
            src="/home/blog2.png"
            alt="Draughtsman Civil"
            width={440}
            height={200}
            className="rounded-md"
          />
          <div className="text-white text-center mx-30 w-70 md:text-center">
            <h3 className="text-3xl font-semibold text-[#FFDF35]">
              Unveiling the Craft of Draughtsman Civil: Architects of Structural Ingenuity
            </h3>
            <p className="text-xl bg-white text-black p-1 mt-2">Wednesday, April 10, 2024</p>
          </div>
        </div>

        {/* Blog Item 2 */}
        <div
          onClick={() => router.push('/courses/blog/blog2')}
          className="flex flex-col md:flex-row items-center gap-6 cursor-pointer hover:opacity-90 transition"
        >
          <Image
            src="/home/blog3.png"
            alt="RACT"
            width={440}
            height={200}
            className="rounded-md"
          />
          <div className="text-white text-center mx-30 w-70 md:text-center">
            <h3 className="text-3xl font-semibold text-[#FFDF35]">
              Exploring the Craft of Refrigeration & Air Conditioning Technicians (RACT): Masters of Climate Control
            </h3>
            <p className="text-xl bg-white text-black p-1 mt-2">Wednesday, April 10, 2024</p>
          </div>
        </div>

        {/* Blog Item 3 */}
        <div
          onClick={() => router.push('/courses/blog/blog3')}
          className="flex flex-col md:flex-row items-center gap-6 cursor-pointer hover:opacity-90 transition"
        >
          <Image
            src="/home/blog1.png"
            alt="Draughtsman Mechanical"
            width={440}
            height={200}
            className="rounded-md"
          />
          <div className="text-white text-center mx-30 w-70 md:text-center">
            <h3 className="text-3xl font-semibold text-[#FFDF35]">
              Exploring the Role and Importance of Draughtsman Mechanical
            </h3>
            <p className="text-xl bg-white text-black p-1 mt-2">Wednesday, April 10, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}
