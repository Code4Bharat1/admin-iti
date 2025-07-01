'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';

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

export default function Eventgallery() {
  const router = useRouter();

  return (
    <section className="bg-[#e8f0fc] text-center py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-12">
          Student Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#22356F] text-white rounded-tl-4xl rounded-r-4xl px-6 pt-12 pb-6 shadow-lg"
            >
              <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full shadow-md">
                <FaUserCircle className="text-6xl text-[#1a264f]" />
              </div>
              <h3 className="font-semibold text-xl mb-4">{item.name}</h3>
              <p className="text-lg leading-relaxed mb-2 mx-2">"{item.quote}"</p>
            </div>
          ))}
        </div>

        <button
          onClick={() => router.push('/student_corner/testimonials')}
          className="bg-[#1a264f] cursor-pointer text-white px-6 py-2 rounded-md hover:bg-[#162143] transition"
        >
          VIEW MORE
        </button>

        {/* Event Gallery */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#1F2A44] mt-16 mb-10">
          Event Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-10">
          <Image
            src="/studentcorner/gallery1.png"
            alt="Graduation Event"
            width={600}
            height={400}
            className=" shadow-md w-full object-cover"
          />
          <Image
            src="/studentcorner/gallery2.png"
            alt="Seminar Event"
            width={600}
            height={400}
            className=" shadow-md w-full object-cover"
          />
        </div>

        <button
          onClick={() => router.push('/gallery')}
          className="bg-[#1a264f] text-white px-6 py-2 text-xl cursor-pointer rounded-md hover:bg-[#162143] transition"
        >
          VIEW MORE
        </button>
      </div>
    </section>
  );
}
