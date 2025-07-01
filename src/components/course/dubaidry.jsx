'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function DubaiDry() {
  const router = useRouter();

  const courses = [
    {
      title: 'Mechanical Fitter',
      image: '/contactus/mechnicalfilter.png',
      route: '/courses/mechanical_filter',
    },
    {
      title: ' Marine Welder',
      image: '/contactus/marinewelder.png',
      route: '/courses/marine_welder',
    },
    {
      title: 'Marine Electrician',
      image: '/contactus/marineelectricion.png',
      route: '/courses/marineelectrician',
    },
  ];

  const handleClick = (route) => {
    router.push(route);
  };

  return (
    <section className="bg-[#f3f8fe] py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10 text-[#1a264f]">
        Dubai Dry Docks Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {courses.map((course, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(course.route)}
              className="cursor-pointer bg-white overflow-hidden shadow hover:shadow-lg transition rounded"
            >
              <div className="relative w-full h-56">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-12 mx-4 text-center text-2xl font-semibold mb-4 text-black">
                {course.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
