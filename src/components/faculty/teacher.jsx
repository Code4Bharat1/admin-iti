'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";


export default function Faculty1() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const facultyMembers = [
    {
      name: "Parkar Jameel. Y",
      title: "Trade Instructor",
      experience: "27+ Teaching Experiences",
      image: "/faculty/sir1.png",
      bio: "Expert in practical and theoretical concepts of trade.",
    },
    {
      name: "Mukadam Vazir. AR",
      title: "Trade Instructor",
      experience: "38 yrs of Teaching & Industrial experience",
      image: "/faculty/sir2.png",
      bio: "Dedicated to grooming students for industry-readiness.",
    },
    {
      name: "Khatib Ubaidulla. M",
      title: "Trade Instructor",
      experience: "20+ years Teaching & Industrial Experience",
      image: "/faculty/sir3.png",
      bio: "Blends field experience with classroom teaching.",
    },
    {
      name: "Dakhni Irshad.I",
      title: "Engg Draw Workshop & CWS Science Instructor",
      experience: "20+ years experience",
      image: "/faculty/sir4.png",
      bio: "Specialist in Engineering Drawing & Workshop Practice.",
    },
    {
      name: "Firfire Fabiha . S",
      title: "Trade Instructor",
      experience: "19+ years Teaching Experience",
      image: "/faculty/sir5.png",
      bio: "Passionate educator shaping future trade professionals.",
    },
    {
      name: "Dalvi Ejaz. M",
      title: "Trade Instructor",
      experience: "16+ years Teaching Experience",
      image: "/faculty/sir6.png",
      bio: "Experienced in technical education and training.",
    },
     {
    name: "Dakhni Rahish. AR",
    title: "Trade Instructor", 
    experience: "13+ years of Teaching & Industrial Experience",
    image: "/faculty/sir7.png", // You'll need to replace with actual path
    bio: "Experienced in technical education and training.",
  },
  {
    name: "Chogale Sushil. G",
    title: "Trade Instructor",
    experience: "11+ years of Teaching & Industrial Experience", 
    image: "/faculty/sir8.png", // You'll need to replace with actual path
    bio: "Experienced in technical education and training.",
  },
  {
    name: "Kadiri Maryam. M",
    title: "Employability Skills Instructor",
    experience: "4+ years of Teaching & Industrial Experience",
    image: "/faculty/sir9.png", // You'll need to replace with actual path
    bio: "Experienced in technical education and training.",
  }
  ];

  return (
    <section className="bg-[#f4f8ff] py-12 font-poppins">
      <h2 className="text-5xl font-extrabold text-center text-[#1F2A44] mb-10">
        Our Faculty
      </h2>

      {/* GRID for desktop, SCROLL for mobile */}
      <div className={`w-full ${isMobile ? 'overflow-x-scroll' : ''}`}>
        <div className={`${isMobile ? 'flex gap-6 px-4 pb-4' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'} max-w-7xl mx-auto`}>
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              className={`relative ${isMobile ? 'w-[280px] flex-shrink-0' : 'w-full max-w-[300px] mx-auto'} h-[400px]`}
            >
              {/* Card background */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 rounded-2xl shadow-xl transition-all duration-300 overflow-hidden ${
                  hoveredIndex === index
                    ? "bg-yellow-400 w-[310px] h-[420px] top-2"
                    : "bg-yellow-300 w-[280px] h-[320px] top-16"
                }`}
              />

              {/* Image container */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
                <div className="relative w-[200px] h-[209px] rounded-lg overflow-hidden ">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    sizes="200px"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 bg-[#2D314A] rounded-xl px-3 py-4 z-30 transition-all duration-300 ${
                hoveredIndex === index ? 'top-49 w-[220px]' : 'top-52 w-[220px]'
              }`}>
                <div className="text-center text-[#FFDF35]">
                  <h3 className="text-xl font-medium leading-tight mb-1">{member.name}</h3>
                  <p className="font-semibold text-xl text-[#FFDF35] mb-1">{member.title}</p>
                  <p className="text-sm text-white text-[#FFDF35] mx-2 mb-0">{member.experience}</p>
                  
                  {(hoveredIndex === index || isMobile) && (
                    <div className="mt-2 pt-2 ">
                      <p className="text-xs text-gray-300 break-words leading-relaxed">{member.bio}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile scroll hint */}
      {isMobile && (
        <div className="text-center mt-6">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full ">
            <span className="text-sm">Swipe to see more</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      )}

      
    </section>
  );
}
