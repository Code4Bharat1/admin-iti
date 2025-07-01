'use client';

import Image from 'next/image';

export default function PlacementStats() {
  return (
    <section className="relative bg-[#f5f9ff] overflow-hidden">
      {/* Top Half Circle SVG Curve */}
      <div className="absolute top-0 left-0 w-full z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path 
            fill="#f5f9ff" 
            d="M0,0 Q720,120 1440,0 L1440,0 L0,0 Z" 
          />
        </svg>
      </div>

      {/* Blue curved background */}
      <div className="relative z-10 bg-[#FFDF35]  py-33">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Card 1 */}
          <div className="relative bg-[#192139] text-white p-14 pt-16 rounded-t-3xl rounded-r-3xl shadow-md flex flex-col items-center gap-4">
            <div className="absolute -top-12 w-[100px] h-[100px]">
              <Image
                src="/placement/icon1.png"
                alt="Companies"
                fill
                className="object-contain border-4 border-white bg-white rounded-full"
              />
            </div>
            <p className="font-semibold text-2xl mt-4">30+ Companies Visited</p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-[#192139] text-white p-14 pt-16 rounded-t-3xl rounded-r-3xl shadow-md flex flex-col items-center gap-4">
            <div className="absolute -top-12 w-[100px] h-[100px]">
              <Image
                src="/placement/icon2.png"
                alt="Placements"
                fill
                className="object-contain border-4 border-white bg-white rounded-full"
              />
            </div>
            <p className="font-semibold text-2xl mt-4">50+ Students Placed in Top Roles</p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-[#192139] text-white p-14 pt-16 rounded-t-3xl rounded-r-3xl shadow-md flex flex-col items-center gap-4">
            <div className="absolute -top-12 w-[100px] h-[100px]">
              <Image
                src="/placement/icon3.png"
                alt="Internships"
                fill
                className="object-contain border-4 border-white bg-white rounded-full"
              />
            </div>
            <p className="font-semibold text-2xl mt-4">Internship Opportunities in 10+ Fields</p>
          </div>
        </div>
      </div>

      {/* Bottom Half Circle SVG Curve */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >
          <path 
            fill="#f5f9ff" 
            d="M0,120 Q720,0 1440,120 L1440,120 L0,120 Z" 
          />
        </svg>
      </div>
    </section>
  );
}