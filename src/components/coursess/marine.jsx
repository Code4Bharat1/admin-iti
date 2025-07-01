'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
export default function MarineElectricianSection() {
    const router = useRouter();
  return (
    <div className="bg-[#F4F8FC] text-[#1F2C56] px-4 py-12">
      <div className="max-w-7xl mx-auto space-y-10">
       <button
      onClick={() => router.push('/courses')}
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
        {/* Marine Electrician Title & Image + Text */}
        <div className="md:flex gap-6 items-start">
          {/* Title & Image */}
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-5xl font-extrabold mb-10">Marine Electrician</h2>
            <Image
              src="/aboutus/Electrician.png"
              alt="Marine Electrician"
              width={500}
              height={400}
              className=" h-100"
            />
          </div>

          {/* Description */}
          <div className="md:w-1/2 text-2xl mt-6 md:mt-26 leading-relaxed">
            <p>
              The Marine Electrician trade focuses on training students to install, maintain, and repair electrical
              systems on ships and marine vessels. The course prepares candidates to handle specialized marine
              electrical equipment, power distribution, lighting, and safety systems used in the maritime industry.
              This trade is ideal for students who are interested in both electrical work and marine technology,
              offering strong career prospects in ports, shipyards, merchant navy, and marine engineering companies.
            </p>
          </div>
        </div>

        {/* Key Learnings */}
        <div>
          <h3 className="text-2xl font-bold mb-3 underline">Key Learning :</h3>
          <ul
            className="list-disc list-inside text-xl space-y-4 text-gray-900 pl-5"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            <li>Understand marine electrical circuits, safety standards, and the functioning of shipboard electrical systems.</li>
            <li>Learn to install and connect electrical components such as motors, generators, switchboards, and lighting systems on ships.</li>
            <li>Study the operation of AC/DC power systems, battery banks, control panels, and energy distribution on marine vessels.</li>
            <li>Learn to read and interpret marine electrical schematics and wiring diagrams used in shipbuilding and repair.</li>
            <li>Practice safety protocols for working on ships, including fire detection systems, emergency lighting, and safety alarms.</li>
          </ul>
        </div>

       

      </div>
    </div>
  );
}
