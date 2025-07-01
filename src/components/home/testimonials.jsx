'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { PiUserCircleFill } from "react-icons/pi";

const testimonials = [
  {
    name: 'Hanzala Dadnak',
    quote: 'The campus life here is vibrant, which makes learning even more enjoyable.',
  },
  {
    name: 'Arman Khatib',
    quote:
      'Placement department bahut active hai, aur bahut saare students ko top companies mein jobs dilwane mein successful rahi hai.',
  },
  {
    name: 'Adina Bakker',
    quote:
      'Iss institute ne mujhe not just academically, but personally bhi grow karne mein madad ki hai.',
  },
];

export default function Testimonials() {
     const router = useRouter();
  return (
    <section className="bg-[#f5f9ff] text-center py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1F2A44] mb-16">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#22356F] text-white rounded-tl-4xl rounded-r-4xl px-6 pt-12 pb-6 shadow-lg"
            >
              

  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">

    
        {/* Inner white background with icon */}
        <div className="bg-white border border-[#D9D9D9] rounded-full">
          <PiUserCircleFill className="text-black text-7xl" />
        </div>
    


</div>


              <h3 className="font-semibold text-xl mb-4">{item.name}</h3>
              <p className="text-lg font-normal leading-relaxed mb-2 mx-2">"{item.quote}"</p>
            </div>
          ))}
        </div>

       
        <button
          onClick={() => router.push('/student_corner/testimonials')}
          className="bg-[#1a264f] text-white px-6 cursor-pointer py-2 rounded-md hover:bg-[#162143] transition"
        >
          VIEW MORE
        </button>
      </div>
    </section>
  );
}
