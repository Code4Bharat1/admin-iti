'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
export default function COPASection() {
   const router = useRouter();
  return (
    <div className="bg-[#F4F8FC] px-4 py-12 text-[#1F2C56]">
      {/* COPA Section */}
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
        <h2 className="text-lg md:text-4xl font-extrabold mb-4">
          Computer Operator & Programming Assistant (COPA)
        </h2>

        {/* Image and Description */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="">
            <Image
              src="/aboutus/classroom3.png"
              alt="COPA"
              width={512}
              height={282}
              className="rounded h-100 w-140"
            />
          </div>
          <div className="text-2xl md:mt-10 leading-relaxed">
            <p>
              Computer Operator & Programming Assistant (COPA) COPA is one of
              the best ITI certificate course, Trainee knows about COPA – Office
              Package – MS Word, MS Excel, MS Power Point, MS Access, DBMS, My
              SQL, Computer networking, Internet and E-commerce, HTML, CSS,
              Java, JavaScript, Advance Excel, Cyber Security, Cloud Computing,
              Python.
            </p>
          </div>
        </div>

        {/* Key Learning */}
        <div className="mt-8">
          <h3 className="font-bold text-2xl mb-2 text-[#1F2C56] underline">
            Key Learning :
          </h3>
          <ul className="list-disc list-inside text-xl font-[Lateef] font-semibold space-y-5">
            <li>
              Install and setup operating system and related software in a
              computer following safety precautions.
            </li>
            <li>
              Create, format and edit document using word processing application
              software.
            </li>
            <li>
              Create, format, edit and develop a workbook by using spreadsheet
              application software.
            </li>
            <li>
              Create and customize slides for presentation. Create and manage
              database file using MySQL.
            </li>
            <li>
              Install, setup/configure, troubleshoot and secure computer network
              including Internet.
            </li>
            <li>
              Develop web pages using HTML and CSS. Develop web pages using Java
              Script.
            </li>
            <li>
              Create workbooks with advanced formulae, macros, charts, pivot
              tables and demonstrate ability to use Power tools.
            </li>
            <li>Browse, select and transact using E commerce websites.</li>
            <li>
              Secure information from Internet by using cyber security concept.
            </li>
            <li>Explain Cloud concepts & services.</li>
            <li>Write programs using Python / Java language.</li>
          </ul>
        </div>
      </div>

    

    </div>
  );
}
