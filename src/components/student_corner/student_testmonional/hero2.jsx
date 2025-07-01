'use client';

import React from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f8fbff] py-12 px-4 md:px-16">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-bold text-[#1F2A44] mb-10">
        See What Our Students Say About Us
      </h2>




      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10 mx-30 ">
        {/* First Video */}
        <div className="w-120 h-64 md:h-80">
          <iframe
            className="w-full h-full  shadow-lg"
            src="https://www.youtube.com/embed/QS_amt6LaT8"
            title="Student Testimonial 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Second Video */}
        <div className="w-120 h-64 md:h-80">
          <iframe
            className="w-full h-full  shadow-lg"
            src="https://www.youtube.com/embed/REPLACE_WITH_VIDEO_ID_2"
            title="Success After COPA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

  


   
    <div className="relative overflow-hidden mx-10">
      {/* Background Image */}
      <Image
        src="/home/hero.jpg"
        alt="Institute Background"
        width={1200}
        height={600}
        className="w-full h-120    object-cover "
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-blue-900/10   p-6 md:p-10  items-center">
        <p className="text-yellow-400 text-lg md:text-4xl font-semibold leading-relaxed">
          At MAF ITI, we focus on skill-based learning and personal growth. We
          support each student at every step to help them build a successful
          and confident future.
        </p>
      </div>
    </div>
  


    </section>
  );
}
