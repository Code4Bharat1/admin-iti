'use client';
import React from 'react';

const aboutItems = [
  {
    text: "Anjuman Waseeul Taleem Educational Trust, Raigad is a leading institution in the Konkan region. It is committed to empowering rural communities through technical education.",
  },
  {
    text: "Located in Mazgaon, Taluka Murud, the Trust supports underprivileged youth. It focuses on skill-based education to build self-reliance and dignity.",
  },
  {
    text: "Established in 2006, Mehrunnissa Abbas Fakih ITI offers vocational training. It runs five trades under the Craftsman Training Scheme (CTS).",
  },
  {
    text: "Affiliated with NCVT and DGET (DGET-12/01/2007-TC), Govt. of Maharashtra recognized. The foundation was laid in 2005 by Mr. P. A. Inamdar with Mr. Habib Fakih’s guidance.",
  },
];

export default function HomeAboutUs() {
  return (
    <section className="relative bg-white py-10 px-4 overflow-hidden">
      {/* Heading */}
    <h2 className="text-center text-5xl md:text-5xl font-extrabold  text-[#1F2A44] z-40 relative mb-12">
    About Us
  </h2>
      {/* Black line behind cards */}
   <div className="absolute top-1/2 left-0 right-0 mx-35 h-8 bg-[#1F2A44] font-bold z-20 rounded shadow-md shadow-[#C3C3C3]" />

      {/* Card container */}
      <div className="relative z-20 flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-6 max-w-7xl mx-auto px-4 mb-10">
        {aboutItems.map((item, index) => (
          <div key={index} className="relative w-full md:w-[45%] lg:w-[22%]">
            
            {/* Yellow background box with one rounded corner */}
        <div className="absolute inset-0 w-60 bg-yellow-400 border border-[#C3C3C3] rounded-tl-3xl rounded-r-3xl h-80 z-10" />


            {/* White top card */}
            <div className="ml-4 relative w-65 z-30 bg-white mt-2 h-76 border border-[#C3C3C3] rounded-tl-3xl rounded-r-3xl p-8 shadow-lg text-center text-[#0a1f44]">
              <p className="text-base md:text-md font-semibold leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom wave (optional, can tweak color/shape) */}
    <div className="absolute bottom-0 bg-[#BAC7E5] left-0 w-full z-10">
  <svg
    viewBox="0 0 1440 100"
    className="w-full h-[260px]"
    preserveAspectRatio="none"
  >
    {/* Mirrored the wave by flipping the path horizontally */}
    <path fill="white" d="M1440,0 C960,100 480,0 0,100 L0,0 L1440,0 Z" />
  </svg>
</div>

  
    </section>
  );
}
