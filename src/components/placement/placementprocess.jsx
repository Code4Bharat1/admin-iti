'use client';
import React from 'react';

const steps = [
  {
    step: '01',
    title: 'Preparation & Resume Building',
    description: 'Basic skill assessment, resume drafting, and portfolio creation.',
  },
  {
    step: '02',
    title: 'Training & Mock Sessions',
    description: 'Aptitude tests, soft skills training, and mock interviews/ GDs.',
  },
  {
    step: '03',
    title: 'Recruiter Interaction & Selection',
    description: 'Campus drives, company-specific prep, and virtual interviews.',
  },
  {
    step: '04',
    title: 'Offers & Career Support',
    description: 'Offer letters, onboarding help, and career transition guidance.',
  },
];

export default function PlacementProcess() {
  return (
    <>
      {/* Desktop Layout - Preserves Original Design */}
      <section className="relative w-full hidden md:block">
        {/* Light Blue Top Half */}
        <div className="bg-[#f5f9ff] h-[200px] flex items-center justify-center px-4">
          <h2 className="text-4xl mb-18 font-extrabold text-[#0a194f] text-center z-10">
            Our 4-Step Placement Process
          </h2>
        </div>

        {/* Dark Blue Bottom Half */}
        <div className="bg-[#22356F] h-[310px] w-full" />

        {/* Cards Section */}
        <div className="absolute top-[140px] text-center left-1/2 transform -translate-x-1/2 w-full px-16 z-10">
          <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.step}
                className="bg-[#FFDF35] text-black rounded-2xl shadow-lg p-6 relative z-10"
              >
                {/* Blue Background Circle */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-13 h-13 bg-[#1F2A44] rounded-full z-0"></div>

                {/* Foreground Number Circle */}
                <div className="text-white bg-[#0a194f] rounded-full w-10 h-10 text-2xl flex items-center justify-center font-bold mb-4 relative z-10 mx-auto">
                  {step.step}
                </div>

                <h3 className="text-lg font-semibold mb-4">{step.title}</h3>
                <p className="text-2xl font-semibold mb-2">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile/Tablet Layout - Merged Single Section */}
      <section className="w-full md:hidden bg-gradient-to-b from-[#f5f9ff] via-[#FFDF35] to-[#22356F] py-8">
        {/* Title */}
        <div className="px-4 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0a194f] text-center">
            Our 4-Step Placement Process
          </h2>
        </div>

        {/* Cards */}
        <div className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.step}
                className="bg-white text-black rounded-2xl shadow-lg p-4 sm:p-5 relative border-2 border-[#0a194f]"
              >
                {/* Number Circle */}
                <div className="text-white bg-[#0a194f] rounded-full w-8 h-8 sm:w-9 sm:h-9 text-lg sm:text-xl flex items-center justify-center font-bold mb-3 mx-auto">
                  {step.step}
                </div>

                <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 leading-tight text-center">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium leading-snug text-center text-gray-700">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}