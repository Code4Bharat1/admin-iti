'use client';

import Image from 'next/image';
import React from 'react';

export default function AboutUsPage() {
  return (
    <div className="bg-[#F1F7FF] text-gray-800 font-sans min-h-screen">
      {/* Banner Image */}
      <div className="w-full">
        <Image
          src="/aboutus/img1.png"
          alt="Mehrunnisa Abbas Fakih ITI"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* About Section */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-44 py-6 sm:py-8 md:py-10 text-[#1D2B53]">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight">
          About us
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-relaxed">
          Anjuman Waseeul Taleem Educational Trust, Raigad is a reputed institution in the Konkan region,
          dedicated to the educational upliftment of society. Established in Mazgaon, Murud (Raigad), the Trust
          founded Mehrunnissa Abbas Fakih ITI in 2006 to provide technical education to rural and underprivileged
          youth. The foundation was laid by Mr. P. A. Inamdar under the chairmanship of Mr. Habib Fakih. The
          institute is affiliated with NCVT, DGET, and recognised by the Govt. of Maharashtra under the Craftsman
          Training Scheme (CTS).
        </p>
      </div>

      {/* Vision & Mission Section with Yellow Layered Boxes */}
      <div className="relative py-12 sm:py-16 md:py-20 bg-[#f3f7ff] flex items-center justify-center overflow-hidden">
        {/* Yellow Boxes - Hidden on mobile for cleaner look */}
        <div className="absolute hidden md:grid md:grid-cols-2 gap-6 lg:gap-10 xl:gap-x-40 z-0">
          <div className="bg-[#FFD700] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-32 lg:w-48 lg:h-36 xl:w-118 xl:h-30 rounded-2xl lg:rounded-3xl shadow-lg"></div>
          <div className="bg-[#FFD700] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-32 lg:w-48 lg:h-36 xl:w-118 xl:h-30 rounded-2xl lg:rounded-3xl shadow-lg"></div>
          <div className="bg-[#FFD700] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-32 lg:w-48 lg:h-36 xl:w-118 xl:h-30 rounded-2xl lg:rounded-3xl shadow-lg"></div>
          <div className="bg-[#FFD700] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-32 lg:w-48 lg:h-36 xl:w-118 xl:h-30 rounded-2xl lg:rounded-3xl shadow-lg"></div>
        </div>

        {/* Foreground White Cards */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-x-46 px-4 sm:px-6 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div className="bg-white rounded-xl shadow-xl border-2 sm:border-4 border-[#1a264f] w-full max-w-sm md:max-w-md px-4 sm:px-6 py-4 sm:py-6 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a264f] mb-3 sm:mb-4">Our vision</h2>
            <p className="text-gray-900 font-[Lateef] font-semibold text-sm sm:text-base md:text-lg leading-relaxed">
              To become a leading center of skill development in the Konkan region by empowering rural and underprivileged youth through quality technical education, fostering self-reliance, and building a stronger, skilled society.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-xl shadow-xl border-2 sm:border-4 border-[#1a264f] w-full max-w-sm md:max-w-md px-4 sm:px-6 py-4 sm:py-6 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1a264f] mb-3 sm:mb-4">Our mission</h2>
            <p className="text-gray-900 font-[Lateef] font-semibold text-sm sm:text-base md:text-lg leading-relaxed">
              To deliver practical and industry-relevant training that helps youth build sustainable careers. We strive to foster confidence, skill, and dignity among students from disadvantaged backgrounds, enabling them to lead successful lives.
            </p>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="bg-[#F1F7FF] py-4 sm:py-6 md:py-8 lg:py-12 px-3 sm:px-6 md:px-8 lg:px-12">
        <div className="bg-[#1F2A44] rounded-2xl sm:rounded-3xl lg:rounded-4xl p-4 sm:p-6 md:p-8 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 justify-items-center px-2 sm:px-4 md:px-6 lg:px-10 py-4 sm:py-6">
            {[
              {
                icon: "/aboutus/teacher.png",
                text: (
                  <>
                    Learn from <br />
                    certified and <br />
                    experienced <br />
                    faculty.
                  </>
                ),
              },
              {
                icon: "/aboutus/book.png",
                text: (
                  <>
                    Empowering <br />
                    students with <br />
                    leadership and life <br />
                    skills.
                  </>
                ),
              },
              {
                icon: "/aboutus/pen.png",
                text: (
                  <>
                    Strong placement <br />
                    support with <br />
                    leading <br />
                    companies.
                  </>
                ),
              },
              {
                icon: "/aboutus/degree.png",
                text: (
                  <>
                    Clean, <br />
                    Disciplined, and <br />
                    student-friendly <br />
                    campus.
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white text-[#000000] w-full max-w-[200px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[260px] 
                           h-40 sm:h-44 md:h-48 lg:h-56 px-3 sm:px-4 py-4 sm:py-5 
                           flex flex-col justify-center items-center text-center
                           rounded-tl-[20px] sm:rounded-tl-[30px] md:rounded-tl-[40px] 
                           rounded-tr-[20px] sm:rounded-tr-[30px] md:rounded-tr-[40px] 
                           rounded-br-[20px] sm:rounded-br-[30px] md:rounded-br-[40px] 
                           rounded-bl-none
                           border border-gray-300 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <Image
                  src={item.icon}
                  alt="icon"
                  width={44}
                  height={44}
                  className="mb-2 sm:mb-3 md:mb-4 w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11"
                />
                <p className="text-xs sm:text-sm md:text-base font-bold leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}