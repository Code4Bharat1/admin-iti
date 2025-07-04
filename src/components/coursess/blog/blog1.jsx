'use client';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Blog1() {
  const router = useRouter();
  return (
    <section className="flex w-full min-h-screen">
             
      {/* Right side - full width on mobile, 3/4 on desktop */}
      <div className="w-full bg-[#f5f9ff] p-4 sm:p-6 lg:p-8 text-[#1a264f]">
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
        </button> <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-4 sm:mx-8 lg:mx-50 font-bold mb-2">
          Unveiling the Craft of Draughtsman Civil: Architects of Structural Ingenuity
        </h1>
        <p className="text-base sm:text-lg text-gray-800 mx-4 sm:mx-8 lg:mx-50 mb-4">– Wednesday, April 10, 2024</p>

        {/* Image - Responsive layout */}
        <div className="relative flex min-h-40 sm:min-h-60 lg:min-h-100 mb-6">
          {/* Left - hidden on mobile, 1/4 on desktop */}
          <div className="hidden lg:block lg:w-1/4 bg-[#1a264f] h-140"></div>

          {/* Right - full width on mobile, 3/4 on desktop */}
          <div className="w-full lg:w-3/4 relative z-10 px-4 sm:px-6 lg:pr-60">
            <Image
              src="/home/blog2.png"
              alt="3D building design"
              width={700}
              height={550}
              className="rounded shadow-md w-full h-110 lg:-ml-80 z-10 mt-2 sm:mt-4 lg:mt-14"
            />
          </div>
        </div>

        {/* Article content */}
        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg mx-4 sm:mx-8 lg:mx-40 mt-6 sm:mt-8 lg:mt-10 leading-relaxed max-w-6xl">
          <p>
            In the realm of architecture and construction, precision and meticulous planning form the cornerstone of every project. At the heart of this intricate process lies the Draughtsman Civil, a skilled artisan who translates architectural visions into detailed blueprints and technical drawings. Join us as we explore the captivating world of Draughtsman Civil and uncover the significance of their role in shaping our built environment
          </p>

          <h2 className="text-lg sm:text-xl font-bold">Crafting the Blueprint</h2>
          <p>
            Draughtsman Civil, also known as Civil Drafters, are the unsung heroes behind the structural marvels that dot our landscapes. Their expertise lies in meticulously drafting detailed plans, layouts, and diagrams that serve as the blueprint for construction projects, ranging from towering skyscrapers to intricate bridges and highways.
          </p>
          <p className='mt-4'>
            With an acute eye for detail and a deep understanding of architectural and engineering principles, Draughtsman Civil work closely with architects, engineers, and construction professionals to bring design concepts to life. From conceptual sketches to final construction documents, they play a pivotal role in ensuring the seamless execution of projects while adhering to safety regulations and building codes.
            Navigating Through Various Disciplines
            The realm of Draughtsman Civil spans across a multitude of disciplines within the construction and infrastructure sectors. Here are some key areas where their expertise shines through
          </p>
          
          <ul className="list-disc pl-4 sm:pl-5 space-y-2 text-sm sm:text-base lg:text-lg">
            <li>Architectural Design: Draughtsman Civil collaborate with architects to transform design concepts into detailed architectural plans. They meticulously draft floor plans, elevations, and cross-sections, capturing every aspect of the building's design with precision and accuracy.</li>
            <li>Structural Engineering: In collaboration with structural engineers, Draughtsman Civil create detailed drawings of structural components such as beams, columns, and foundations. These drawings provide vital information for contractors and construction crews, ensuring structural integrity and safety.</li>
            <li>Infrastructure Development: From highways and bridges to tunnels and drainage systems, Draughtsman Civil play a crucial role in the planning and design of infrastructure projects. Their drawings help visualize the layout and alignment of roads, utilities, and other essential elements of infrastructure development</li>
            <li>Urban Planning: In urban planning initiatives, Draughtsman Civil contribute to the development of master plans, zoning maps, and land use plans. Their expertise in drafting site plans and development layouts helps city planners visualize and implement sustainable urban development strategies.</li>
          </ul>

          <h2 className="text-lg sm:text-xl font-bold">Embracing Technological Advancements</h2>
          <p>
            As technology continues to evolve, so does the role of Draughtsman Civil. The advent of computer-aided design (CAD) software has revolutionized the drafting process, enabling Draughtsman Civil to create highly detailed and accurate drawings with greater efficiency and precision.
            Furthermore, the integration of Building Information Modeling (BIM) technology has transformed the way construction projects are planned and executed. Draughtsman Civil leverage BIM software to create 3D models that provide a comprehensive overview of the entire project, facilitating collaboration among stakeholders and streamlining the construction process.
          </p>

          <h2 className="text-lg sm:text-xl font-bold">Charting the Future</h2>
          <p>
            In an era of rapid urbanization and infrastructure development, the role of Draughtsman Civil has never been more vital. Their meticulous craftsmanship, technical expertise, and adaptability continue to drive innovation and excellence in the field of architecture and construction.
            As we look to the future, Draughtsman Civil will play a pivotal role in embracing emerging technologies such as artificial intelligence, virtual reality, and sustainable design practices. Their ability to integrate these advancements into their workflow will not only enhance efficiency and productivity but also pave the way for more resilient and sustainable built environments.
            In conclusion, the craft of Draughtsman Civil is a testament to the artistry and ingenuity that defines the world of architecture and construction. With their keen eye for detail and unwavering commitment to excellence, they remain the architects of structural brilliance, shaping the landscapes of tomorrow with every stroke of their pen
          </p>
        </div>
      </div>
    </section>
  );
}