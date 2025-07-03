"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <main className="relative">
      {/* 🖼️ Banner with Overlay - Reduced Height */}
      <div className="relative h-[85vh] w-full bg-gray-100">
        {/* Background Image */}
        <div className="relative h-[85vh] w-full">
          <Image
            src="/home/hero.jpg"
            alt="Hero Image"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Transparent Black Overlay */}
     <div
          className="absolute inset-0 bg-gradient-to-r from-[#1F2A44]/70 via-[#1F2A44]/50 to-[#1F2A44]/30"
        />

        {/* Overlay Text - Positioned like the reference image */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12">
          {/* Top Text */}
          <div className="text-left">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Start Your <span className="text-white">Beautiful</span> And
              <br />
              <span className="text-[#FFD700]">Bright</span> Future
            </h1>
          </div>

          {/* Bottom Text */}
          <div className="text-left">
            <p className="text-[#FFD700] text-lg sm:text-xl md:text-4xl font-semibold max-w-3xl">
              Shaping careers with hands-on training,
              <br />
              industry-ready skills, and expert guidance.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}