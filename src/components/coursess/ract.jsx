'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
export default function RACTandTrades() {
   const router = useRouter();
  return (
    <div className="bg-[#F4F8FC] text-[#1F2C56] px-4 py-12">
      {/* RACT Section */}
      <div className="max-w-7xl mx-auto mb-16">
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
        <h2 className="text-4xl font-extrabold mb-10">
          Refrigeration & Air Conditioning Technician (RACT)
        </h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Image */}
          <div>
            <Image
              src="/aboutus/classroom1.png"
              alt="RACT"
              width={512}
              height={283}
              className="rounded h-100"
            />
          </div>

          {/* Description */}
          <div className="text-2xl  leading-relaxed">
            <p>
              Refrigeration & Air Conditioning Technician (RACT) who install,
              repair, gas charging & troubleshoot refrigeration & air
              conditioning in home & businesses. They work on refrigerator,
              window & split AC, HVAC unit, central AC, Ice factory, cold
              storage, etc. The trainee is able to check & rectify electrical
              defect in different refrigerator & AC. Trainee will be make a duct
              insulate in duct insulate in duct, AHU servicing and to identify
              VRF/VRV system. The trainee also able to check control system &
              identify error code of refrigeration system.
            </p>
          </div>
        </div>

        {/* Key Learning */}
       <div className="mt-8">
  <h3 className="font-extrabold text-2xl mb-3 underline">Key Learning :</h3>
  <ul
    className="list-disc list-outside pl-6 text-xl space-y-5 font-bold text-gray-900"
    style={{ fontFamily: "Times New Roman, serif" }}
  >
    <li>
      Perform copper tube cutting, flaring, swagging, gas welding,
      brazing, soldering.
    </li>
    <li>
      Servicing, dismantling, and checking different parts of different
      types of commercial compressor.
    </li>
    <li>
      Install service and repair windows and split AC. Perform servicing
      of different types of water-cooled condenser, evaporator, chiller
      & cooling tower.
    </li>
    <li>
      Conduct servicing, repairing, leak testing, gas charging of
      fridge, deep freezer, water cooler, cold storage, ice candy plant
      etc.
    </li>
    <li>
      Identify the various components of central AC test, Servicing of
      A.H.U, damper, check air flow, De-scaling of condenser and CT
      servicing.
    </li>
    <li>
      Troubleshoot both Central A.C. plant direct and indirect system.
      Perform servicing of car AC. Fault diagnosis & remedial measures.
    </li>
  </ul>
</div>
</div>
</div>

     
        
 
  );
}
