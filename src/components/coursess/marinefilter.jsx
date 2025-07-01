'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function MarineFilter() {
    const router = useRouter();
  return (
    <section className="bg-[#f5f9ff] py-8 sm:py-10 md:py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
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
        {/* Left Side - Image & Title */}
        <div>
          <h2 className="text-2xl sm:text-5xl font-extrbold text-[#1a264f] mb-3 sm:mb-4">Marine Fitter</h2>
          <Image
            src="/courses/course1.png"
            alt="marinefilter"
            width={600}
            height={400}
            className="rounded-md shadow-md w-full h-48 sm:h-64 md:h-110 object-cover"
          />
        </div>

        {/* Right Side - Description */}
        <div>
          <p className="text-gray-900 text-sm sm:text-base md:text-2xl mt-4 sm:mt-8 md:mt-20 text-justify">
          This course trains candidates in safety practices, engine parts identification, and basic fitting skills like sawing, drilling, and filing. Trainees learn about pumps, valves, and marine engines, including dismantling, assembling, and overhauling. The course also covers turning operations and maintenance techniques. After completion, candidates can work as Mechanics, Fitters, or Welders, with career growth up to Rank Officer in the marine industry.  </p>
          </div>
          <div className="mt-6 sm:mt-7 md:mt-8 ">
  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1F2A44] mb-3 sm:mb-4 underline">
    Key Learning :
  </h3>
  <ul className="list-disc font-[Lateef] font-semibold md:whitespace-nowrap text-xs sm:text-sm md:text-xl md:whitespace-normal list-outside space-y-2 sm:space-y-3 md:space-y-4 text-gray-900 pl-5">
    <li>
      Operate, maintain, overhaul and diagnose defects and trouble shooting of marine engine. Speed boat engine maintenance.
    </li>
    <li>
      Trouble shoot & maintain marine refrigeration & air conditioning. Basic knowledge of Gas welding, arc welding, Brazing & MIG Welding.
    </li>
    <li>
      Basic fitting operation - Marking, Hack sawing, Chiseling, Filing, Drilling, Taping, Turning & grinding etc. Basic knowledge on Plumbing,<br />
      Pipe fitting work for marine service.
    </li>
    <li>
      Basic Turner knowledge & imparts training on different turning operations. Basic Hydraulic & Pneumatic knowledge used on marine services.
    </li>
    <li>
      Impart study of different types of pumps and valves. Basic knowledge on AC/DC Motors used in marine ships.
    </li>
  </ul>
</div>

        </div>

    </section>
  );
}