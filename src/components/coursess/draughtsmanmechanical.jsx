'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function DraughtsmanMechanical() {
    const router = useRouter();
  return (
    <section className="bg-[#f5f9ff] py-8 sm:py-10 md:py-12 px-4 md:px-16">
      
       <button
      onClick={() => router.push('/courses')}
      className="mb-6 flex items-center text-[#1F2C56] hover:text-blue-700 transition-colors duration-200"
    >  <svg 
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a264f] mb-3 sm:mb-4">Draughtsman Mechanical</h2>
          <Image
            src="/courses/course1.png"
            alt="Draughtsman Civil"
            width={400}
            height={400}
            className=" shadow-md w-full h-48 sm:h-64 md:h-100 object-cover"
          />
        </div>

        {/* Right Side - Description */}
        <div>
          <p className="text-gray-900 text-sm sm:text-base md:text-2xl mt-4 sm:mt-8 md:mt-20 text-justify">
           This two-year course trains candidates in professional skills and knowledge related to mechanical drafting. It covers geometric construction, freehand drawing of machine components, and drawing sheet preparation. Students also gain practical training in allied trades like Fitter, Turner, Machinist, and Sheet Metal Worker. They learn to create detailed and assembly drawings of parts like pulleys, gears, and pipe fittings, and apply quality standards using AutoCAD. The course also includes 3D modeling, view generation, and plotting drawings in PDF format.
          </p>
          </div>
          <div className="mt-6 sm:mt-7 md:mt-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1F2A44] mb-3 sm:mb-4 underline">Key Learning :</h3>
            <ul className="list-disc font-[Lateef] font-semibold text-xs sm:text-sm md:text-xl md:whitespace-nowrap list-inside space-y-2 sm:space-y-3 md:space-y-4 text-gray-900">
              <li> Construct free hand sketches of simple machine parts with correct proportions.</li>
              <li> Draw isometric projection from orthographic views(and vice versa) and Draw oblique projection from orthographic views.</li>
              <li>Draw and indicate the specification of different type of fasteners, welded and locking devices.</li>
              <li>Construct different types of gears, couplings and bearings with tolerance, dimension and indicating surface finish symbol.</li>
              <li>Draw in Auto CAD Detail and assembly drawing of machine parts viz., pulleys, pipe fittings, gears and cams applying rang of cognitive and practical skills.</li>
              <li>Construct drawing of Engine & Machine parts with detailed and assembly in template layout applying quality concept in Auto CAD.</li>
              <li>Create 3D Solid by switching to 3D modeling workspace in Auto CAD, generate views, print preview and plotting.</li>

            </ul>
          </div>
        </div>

    </section>
  );
}