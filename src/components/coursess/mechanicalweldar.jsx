'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function MarineWelder() {
      const router = useRouter();
  return (
    <div className="bg-[#F4F8FC] px-4 py-12 text-[#1F2C56]">
      {/* Marine Welder Section */}
      <div className="max-w-7xl mx-auto mb-16">
        {/* Back Button */}
       <button
      onClick={() => router.push('/courses')}
      className="mb-6 flex items-center cursor-pointer text-[#1F2C56] hover:text-blue-700 transition-colors duration-200"
    >
          <svg 
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
        
        <h2 className="text-3xl font-extrabold mb-4">Marine Welder</h2>

        {/* Image and Description */}
        <div className="grid md:grid-cols-2 gap-2 items-start">
          <div>
            <img
              src="/contactus/marinewelder.png"
              alt="Marine Welder"
              className="rounded h-100 w-130 object-cover"
            />
          </div>
          <div className="text-[23px] leading-relaxed md:ml-6">
            <p>
              The Marine Welder trade is a specialized training program that equips students with the skills to perform welding operations on ships, boats, and other marine structures. The course focuses on different forms of welding techniques used in the marine industry, including underwater welding, structural fabrication, and pipe welding. Students learn to work in shipyards, offshore rigs, and maintenance docks, making this course ideal for those interested in technical, hands-on careers in the maritime and offshore sectors.
            </p>
          </div>
        </div>

        {/* Key Learning */}
        <div className="mt-8">
          <h3 className="text-2xl font-extrabold mb-6 underline">Key Learning :</h3>
          <ul
            className="list-disc list-inside text-xl space-y-4 text-gray-900 "
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            <li>
              Understand types of welding (Arc, MIG, TIG, Gas) and their applications in marine structures.
            </li>
            <li>
              Learn to weld ship hulls, tanks, and structural components using proper marine welding standards.
            </li>
            <li>
              Perform welding on steel pipes and marine components exposed to water pressure and harsh environments.
            </li>
            <li>
              Introduction to underwater welding techniques and safety (advanced training may require specialization).
            </li>
            <li>
              Follow safety guidelines for marine environments, including welding in confined spaces and on watercraft.
            </li>
            <li>
              Operate and maintain welding machines and equipment, and learn basic testing of weld quality (visual and non-destructive).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}