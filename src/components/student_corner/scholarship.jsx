'use client';

import Image from 'next/image';

export default function ScholarshipPage() {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-[400px] bg-white">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-[500px]">
        {/* Mobile: Simple image */}
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/studentcorner/student2.png"
            alt="Students writing exam"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Desktop: Clipped image with overlay */}
        <div 
          className="hidden md:block absolute inset-0 overflow-hidden"
          style={{
            clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)',
          }}
        >
          <Image
            src="/studentcorner/student2.png"
            alt="Students writing exam"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: '#1F2A4459',
              clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)',
            }}
          />
        </div>
        
        {/* Heading */}
        <h1 className="text-yellow-400 font-bold text-2xl sm:text-3xl md:text-5xl break-words absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-0 md:mx-20 z-10 max-w-[calc(100%-2rem)] sm:max-w-[calc(100%-3rem)] md:max-w-none">
          Scholarship Opportunities
        </h1>
      </div>

      {/* Right Text Section */}
      <div className="w-full md:w-1/2 px-4 py-4 sm:px-6 sm:py-6 md:py-6 flex flex-col justify-center bg-white">
        <p className="text-gray-800 text-sm sm:text-base md:text-2xl mx-2 sm:mx-4 text-center mb-4 sm:mb-5">
          Our institution supports students in availing various government-funded scholarships through recognized digital platforms. Eligible students can apply for scholarships using the following official portals:
        </p>
        
        <ul className="text-gray-800 list-disc list-inside mx-4 sm:mx-8 md:mx-20 text-sm sm:text-base md:text-2xl space-y-2 sm:space-y-3">
          <li>
            <strong>NSP (National Scholarship Portal)</strong><br />
            <span className="text-xs sm:text-sm md:text-xl">Website: </span>
            <a
              href="https://scholarships.gov.in"
              className="text-gray-800 underline text-xs sm:text-sm md:text-xl break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://scholarships.gov.in
            </a>
          </li>
          <li>
            <strong>MahaDBT (Maharashtra Direct Benefit Transfer Scholarship)</strong><br />
            <span className="text-xs sm:text-sm md:text-xl">Website: </span>
            <a
              href="https://mahadbt.maharashtra.gov.in"
              className="text-gray-800 underline text-xs sm:text-sm md:text-xl break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://mahadbt.maharashtra.gov.in
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}