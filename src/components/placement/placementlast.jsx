'use client';

import { FaUserCircle } from 'react-icons/fa';

const placements = [
  {
    name: 'Safeer Ashraf Chogle',
    company: 'S.K Auto Rider,\nRoyal Enfield',
  },
  {
    name: 'Sajid Mehmood Khan',
    company: 'Aditya Birla\nGrasim, Bharuch',
  },
  {
    name: 'Adina Sadique Bakar',
    company: 'Student\nAlliance LLP',
  },
];

export default function Placementlast() {
  return (
    <section className="bg-[#f5f9ff] py-8 sm:py-10 md:py-12">
      <h2 className="text-center text-xl sm:text-2xl md:text-4xl font-extrabold text-[#1F2A44] mb-6 sm:mb-8 md:mb-10 px-4">
        Placement at our MAF ITI
      </h2>
      
      <section className="bg-white p-4 sm:p-8 md:p-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8 bg-white max-w-6xl mx-auto">
          {placements.map((person, index) => (
            <div key={index} className="relative bg-[#1F2A44] text-[#1a264f] rounded-2xl p-4 pt-8 sm:p-5 sm:pt-10 md:p-6 md:pt-12 shadow-md py-6 sm:py-8 md:py-10 text-center">
              {/* User icon */}
              <div className="absolute -top-4 sm:-top-6 md:-top-7 left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full shadow-md">
                <FaUserCircle className="text-4xl sm:text-5xl md:text-6xl text-black" />
              </div>
              
              <h3 className="font-semibold text-white text-base sm:text-lg md:text-lg mb-3 sm:mb-4 mt-2 sm:mt-3 px-2">
                {person.name}
              </h3>
              
              <div className="bg-white text-sm sm:text-md md:text-lg font-semibold text-black rounded p-3 px-6 sm:p-4 sm:px-8 md:p-4 md:px-8 whitespace-pre-line inline-block">
                {person.company}
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}