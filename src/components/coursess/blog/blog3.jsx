'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
export default function Blog3() {
  const router = useRouter();
  return (
    <section className="flex w-full min-h-screen">
             
      {/* Right side - full width on mobile, 3/4 on desktop */}
      <div className="w-full bg-[#f5f9ff] p-4 sm:p-6 lg:p-8 text-[#1a264f]">
        <button
      onClick={() => router.push('/courses/blog')}
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
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-4 sm:mx-8 lg:mx-50 font-bold mb-2">
          Exploring the Role and Importance of Draughtsman Mechanical
        </h1>
        <p className="text-base sm:text-lg text-gray-800 mx-4 sm:mx-8 lg:mx-50 mb-4">– Wednesday, April 10, 2024</p>

        {/* Image - Responsive layout */}
        <div className="relative flex min-h-40 sm:min-h-60 lg:min-h-90 mb-6">
          {/* Left - hidden on mobile, 1/4 on desktop */}
          <div className="hidden lg:block lg:w-1/4 bg-[#1a264f]"></div>

          {/* Right - full width on mobile, 3/4 on desktop */}
         <div className="w-full lg:w-3/4 relative z-10 px-4 sm:px-6 lg:pr-60">
                    <Image
                      src="/home/blog1.png"
                      alt="3D building design"
                      width={700}
                      height={550}
                      className="rounded shadow-md w-full h-110 lg:-ml-80 z-10 mt-2 sm:mt-4 lg:mt-14"
                    />
                  </div>
        </div>

        {/* Article content */}
     
    <div className="space-y-10 max-w-5xl mx-auto text-justify">
      <section>
        <p className=" text-lg">
         In the realm of modern comfort and convenience, few innovations have had as profound an impact as refrigeration and air conditioning systems. Behind the scenes, ensuring the smooth operation of these systems are the skilled artisans known as Refrigeration & Air Conditioning Technicians (RACT). Join us as we delve into the fascinating world of RACT and uncover the vital role they play in keeping our environments cool, comfortable, and conducive to productivity
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Mastering the Art of Climate Control
        </h2>
        <p className='text-lg'>
         Refrigeration & Air Conditioning Technicians are the backbone of the HVAC (Heating, Ventilation, and Air Conditioning) industry, possessing a unique blend of technical expertise and hands-on skill. Their primary responsibility revolves around the installation, maintenance, and repair of refrigeration and air conditioning systems, ranging from residential units to commercial and industrial-scale applications.
Equipped with in-depth knowledge of thermodynamics, fluid mechanics, and electrical systems, RACT professionals are adept at diagnosing and troubleshooting complex issues to ensure optimal performance and energy efficiency. Whether it's installing a new air conditioning unit in a high-rise building or repairing a malfunctioning refrigeration system in a supermarket, RACT technicians are the go-to experts for all things climate control.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Navigating Through Diverse Environments
        </h2>
        <p className="mb-4 text-lg">
         The expertise of Refrigeration & Air Conditioning Technicians extends across a wide array of environments and industries, each with its unique set of challenges and requirements:
        </p>
        <ol className="list-decimal text-lg list-inside space-y-2">
          <li>
            <strong>Residential Settings:</strong> In residential settings, RACT technicians are responsible for installing and servicing air conditioning units, heat pumps, and refrigerators to maintain comfortable living conditions for homeowners. Their prompt and reliable service ensures that households stay cool and comfortable year-round.
          </li>
          <li>
            <strong>Commercial Facilities:</strong> From office buildings and retail stores to restaurants and hospitals, commercial facilities rely on RACT technicians to provide efficient and reliable HVAC solutions. These professionals design and install custom cooling systems tailored to the specific needs of each commercial establishment, ensuring optimal comfort and air quality for occupants
          </li>
          <li>
            <strong>Industrial Applications:</strong> In industrial settings such as food processing plants, cold storage facilities, and manufacturing plants, refrigeration systems play a critical role in preserving perishable goods and maintaining optimal production conditions. RACT technicians are responsible for designing, installing, and maintaining industrial-scale refrigeration systems to ensure uninterrupted operation and compliance with industry regulations.
          </li>
          <li>
            <strong>Transportation Sector:</strong> Maintaining temperature-sensitive cargo
           In the transportation sector, RACT technicians play a vital role in maintaining refrigerated trucks, cargo containers, and shipping vessels used for the transportation of perishable goods. Their expertise ensures that temperature-sensitive cargo remains fresh and intact during transit, preserving the quality and safety of the products being transported.
          </li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Embracing Technological Advancements
        </h2>
        <p className='text-lg'>
         As technology continues to advance, so too does the field of refrigeration and air conditioning. RACT technicians are at the forefront of innovation, leveraging cutting-edge technologies to enhance the efficiency, performance, and sustainability of HVAC systems. From the integration of smart thermostats and IoT (Internet of Things) devices to the adoption of environmentally friendly refrigerants and energy-efficient designs, RACT professionals are committed to staying abreast of the latest developments in the industry
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Charting the Future of Climate Control
        </h2>
        <p className='text-lg'>
          In an era of rapid urbanization and infrastructure development, the role of Draughtsman Civil has never been more vital. Their meticulous craftsmanship, technical expertise, and adaptability continue to drive innovation and excellence in the field of architecture and construction.
        </p>
        <p className="mt-4 text-lg">
          As we look to the future, Draughtsman Civil will play a pivotal role in embracing emerging technologies such as artificial intelligence, virtual reality, and sustainable design practices. Their ability to integrate these advancements into their workflow will not only enhance efficiency and productivity but also pave the way for more resilient and sustainable built environments
        </p>
        <p className='text-lg'>In conclusion, the craft of Draughtsman Civil is a testament to the artistry and ingenuity that defines the world of architecture and construction. With their keen eye for detail and unwavering commitment to excellence, they remain the architects of structural brilliance, shaping the landscapes of tomorrow with every stroke of their pen.</p>
      </section>
    </div>
  

      </div>
    </section>
  );
}