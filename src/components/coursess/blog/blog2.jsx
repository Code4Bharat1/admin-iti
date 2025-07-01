'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';  
export default function Blog2() {
  const router = useRouter();
  return (
    <section className="flex w-full min-h-screen">
      {/* Left side - 1/4 width - dark blue */}
      
       
      {/* Right side - 3/4 width - light blue */}
      <div className="w-full bg-[#f5f9ff] p-4 sm:p-6 md:p-8 text-[#1a264f]">
       <button
      onClick={() => router.push('/courses/blog')}
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
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-4 sm:mx-8 md:mx-12 lg:mx-50 font-bold mb-2">
          Exploring the Role and Importance of Draughtsman Mechanical
        </h1>
        <p className="text-base sm:text-lg text-gray-800 mx-4 sm:mx-8 md:mx-12 lg:mx-50 mb-4">
          -Wednesday, April 10, 2024 
        </p>

        {/* Image */}
        <div className="relative flex min-h-60 sm:min-h-70 md:min-h-80 lg:min-h-90 mb-6">
          {/* Left - 1/4 dark blue - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block md:w-1/4 bg-[#1a264f]"></div>

          {/* Right - 3/4 content on desktop, full width on mobile */}
          <div className="w-full lg:w-3/4 relative z-10 px-4 sm:px-6 lg:pr-60">
                     <Image
                       src="/home/blog3.png"
                       alt="3D building design"
                       width={700}
                       height={550}
                       className="rounded shadow-md w-full h-110 lg:-ml-80 z-10 mt-2 sm:mt-4 lg:mt-14"
                     />
                   </div>
        </div>

        {/* Article content */}
        <div className="max-w-4xl mx-auto px-2 sm:px-4 py-6 sm:py-8 md:py-10 text-justify text-gray-800">
          
          <p className="mb-4 text-sm sm:text-base">
            In the vast realm of engineering and design, precision and meticulous planning are paramount. Among the key players in this field is the Draughtsman Mechanical, a skilled professional responsible for translating ideas and concepts into detailed technical drawings and plans. Let's delve into the world of Draughtsman Mechanical and uncover the significance of their role in various industries.
          </p>

          <p className="font-semibold text-base sm:text-lg mb-2">Understanding the Role</p>
          
          <p className="mb-4 text-sm sm:text-base">
            Draughtsman Mechanical, also known as Mechanical Drafters, are the architects behind the blueprints and schematics that drive the machinery and equipment we encounter daily. Their primary responsibility revolves around creating detailed technical drawings, layouts, and diagrams based on specifications provided by engineers and designers.
          </p>

          <p className="mb-4 text-sm sm:text-base">
            These drawings serve as a blueprint for the fabrication, construction, and operation of mechanical devices, ranging from intricate components to large-scale machinery. Draughtsman Mechanical must possess a keen eye for detail, exceptional drafting skills, and proficiency in computer-aided design (CAD) software to accurately depict dimensions, tolerances, and materials.
          </p>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-6 sm:mt-8 mb-4">
            Applications Across Industries
          </h2>
          
          <p className="mb-4 text-sm sm:text-base">
            The expertise of Draughtsman Mechanical extends across various industries, playing a vital
            role in the development and advancement of technology. Here are some key areas where their
            contributions are indispensable:
          </p>

          <ul className="list-decimal pl-4 sm:pl-5 space-y-3 sm:space-y-4 text-sm sm:text-base">
            <li>
              <strong>Manufacturing:</strong> In the manufacturing sector, Draughtsman Mechanical are
              instrumental in designing machinery, tools, and equipment used in production processes.
              Their technical drawings guide the fabrication and assembly of components, ensuring
              seamless operation and efficiency in manufacturing operations.
            </li>
            <li>
              <strong>Engineering:</strong> Draughtsman Mechanical work closely with engineers in the
              design and development of mechanical systems, including HVAC (Heating, Ventilation, and
              Air Conditioning) systems, automotive components, and industrial machinery. Their
              expertise is crucial in conceptualizing, visualizing, and refining engineering designs
              before implementation.
            </li>
            <li>
              <strong>Construction:</strong> In the construction industry, Draughtsman Mechanical
              contribute to the planning and design of mechanical systems within buildings and
              infrastructure projects. This includes HVAC systems, piping layouts, and structural
              components, where precise drawings are essential for coordination and installation.
            </li>
            <li>
              <strong>Aerospace and Defense:</strong> The aerospace and defense sectors rely heavily on
              Draughtsman Mechanical for the design and development of aircraft, spacecraft, and
              military hardware. Their drawings encompass everything from engine components and
              structural elements to intricate systems vital for flight and defense applications.
            </li>
          </ul>

          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mt-6 sm:mt-8 mb-4">
            The Future of Draughtsman Mechanical
          </h2>
          
          <p className="mb-4 text-sm sm:text-base">
            As technology continues to evolve, so does the role of Draughtsman Mechanical. The advent
            of advanced CAD software, 3D modeling, and virtual prototyping has revolutionized the
            drafting process, enabling greater precision, efficiency, and collaboration in design
            projects.
          </p>
          
          <p className="mb-4 text-sm sm:text-base">
            Furthermore, with the rise of automation and digitalization, Draughtsman Mechanical are
            increasingly embracing interdisciplinary skills, such as knowledge of robotics,
            mechatronics, and additive manufacturing. This evolution not only enhances their
            versatility but also positions them at the forefront of innovation in engineering and
            design.
          </p>
          
          <p className="mt-4 font-semibold text-sm sm:text-base">
            In conclusion, the role of Draughtsman Mechanical is indispensable in shaping the landscape
            of modern engineering and manufacturing. Their meticulous craftsmanship, technical
            expertise, and adaptability continue to drive progress across industries, making them
            invaluable assets in the pursuit of innovation and excellence.
          </p>
        </div>
      </div>
    </section>
  );
}