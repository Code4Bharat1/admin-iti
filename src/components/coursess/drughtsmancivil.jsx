'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
export default function DraughtsmanCivil() {
    const router = useRouter();
  return (
    <div className="bg-[#F4F8FC] px-4 py-12 text-[#1F2C56]">
      {/* Draughtsman Civil Section */}
      <div className="max-w-7xl mx-auto mb-16">
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
        <h2 className="text-3xl font-extrabold mb-4">Draughtsman Civil</h2>

        {/* Image and Description */}
        <div className="grid md:grid-cols-2 gap-2 items-start">
          <div>
            <Image
              src="/aboutus/classroom2.png"
              alt="Draughtsman Civil"
              width={412}
              height={600}
              className="rounded h-100 w-150"
            />
          </div>
          <div className="text-[23px] leading-relaxed   md:ml-6">
            <p>
              This course prepares trainees for the construction industry by
              teaching them to create detailed drawings of buildings, roads,
              dams, and other structures using sketches, notes, and data. They
              learn to work with drawing instruments and AutoCAD software to
              produce plans, elevations, sections, RCC drawings, and bar bending
              schedules. The course also covers material specifications,
              structural features, cost estimation, and analysis using software.
              After completion, students can work as Draughtsmen and grow into
              roles like Architectural Draughtsman or Supervisor.
            </p>
          </div>
        </div>

        {/* Key Learning */}
        <div className="mt-8">
          <h3 className="text-[18px] font-bold mb-6 underline">Key Learning :</h3>
          <ul
            className="list-disc list-inside text-xl space-y-2"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            <li>
              Knowledge of basic Engineering Drawing like Lettering,
              Dimensioning, Geometrical Construction, Scale & Projection etc.
            </li>
            <li>2D Drawing & 3D Modelling on AutoCAD.</li>
            <li>
              Knowledge of Engineering Building Materials: Stone, Brick, Sand,
              Cement, Timber, Aggregate, Lime etc.
            </li>
            <li>
              Knowledge of all types of Construction such as Foundation, Floor,
              Plinth, Sub & Super Structure etc.
            </li>
            <li>Knowledge of Field Practice of Survey & Levelling.</li>
            <li>
              Knowledge of Building Planning. Find out the Quantities of
              Material, Estimating Costing & Site Supervision.
            </li>
            <li>
              Drafting of Structural & Architectural Drawing using AutoCAD.
            </li>
            <li>
              Preparing Drawing of Road, Railway, Dam, Barrage, Hydro Electric
              Project, Water Treatment Plant & Sewage Treatment Plant etc. using
              AutoCAD.
            </li>
          </ul>
        </div>
      </div>
</div>
      
      
 
  );
}
