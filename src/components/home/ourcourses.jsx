'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CoursesSection() {
  const router = useRouter();

  const courses = [
    {
      title: 'Refrigeration & Air Conditioning Technician (RACT)',
      image: '/home/student1.png',
      path: '/courses/ract',
    },
    {
      title: 'Draughtsman Mechanical',
      image: '/home/student2.png',
      path: '/courses/draughtsman-mechanical',
    },
    {
      title: 'Computer Operator & Programming Assistant (COPA)',
      image: '/home/welcome.png',
      path: '/courses/copa',
    },
  ];

  return (
    <section className="bg-[#f3f8fe] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10 text-[#1a264f]">
          Our Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {courses.map((course, idx) => (
            <div
              key={idx}
              onClick={() => router.push(course.path)}
              className="cursor-pointer bg-white overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center text-2xl mt-4 mb-4 font-medium text-black">
                {course.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
