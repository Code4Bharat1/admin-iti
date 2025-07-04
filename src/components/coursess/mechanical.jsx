'use client'; 
import Image from "next/image";
import { useRouter } from 'next/navigation';
export default function MechanicalFitterSection() {
    const router = useRouter();
  return (
    <div className="bg-[#F4F8FC]  text-[#1F2C56] px-4 py-12">
      {/* Mechanical Fitter Section */}
      <div className="max-w-7xl mx-auto mb-16">
       <button
      onClick={() => router.push('/courses')}
      className="mb-6 flex items-center cursor-pointer text-[#1F2C56] hover:text-blue-700 transition-colors duration-200"
    > <svg 
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
        <h2 className="text-5xl font-extrabold mb-10">Mechanical Fitter</h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Image */}
          <div>
            <Image
              src="/aboutus/mechanical2.png"
              alt="Mechanical Fitter"
              width={512}
              height={202}
              className="rounded h-120"
            />
          </div>
          {/* Description */}
          <div className="text-2xl md:mt-12 text-gray-900 leading-relaxed">
            <p>
              The Mechanical Fitter trade under ITI focuses on training students
              to install, assemble, maintain, and repair mechanical machinery
              and tools. This course is ideal for individuals who are interested
              in working with machines and want to build a career in
              manufacturing, automotive, maintenance, and engineering
              industries. The program emphasizes hands-on training along with
              essential theoretical knowledge to prepare students for real-world
              industrial environments.
            </p>
          </div>
        </div>

        {/* Key Learning */}
        <div className="mt-8">
          <h3 className="font-bold text-2xl mb-2">Key Learning :</h3>
          <ul className="list-disc list-inside text-xl space-y-6">
            <li>
              Understand core mechanical engineering concepts along with
              workshop safety rules, tool handling, and first aid procedures.
            </li>
            <li>
              Learn hands-on skills like marking, drilling, filing, grinding,
              and assembling component used in various machines and structures.
            </li>
            <li>
              Gain the ability to read and interpret technical diagrams and
              blueprints essential for accurate fitting and machine work.
            </li>
            <li>
              Master the use of tools like vernier calipers, micrometers, and
              gauges to ensure high accuracy in mechanical operations.
            </li>
            <li>
              Learn to dismantle, inspect, repair, and reassemble mechanical
              equipment, with a focus on preventive maintenance techniques.
            </li>
          </ul>
        </div>
      </div>

    
    
   
    </div>
  );
}
