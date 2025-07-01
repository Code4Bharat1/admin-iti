'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const allLogos = [
  { src: '/home/logo1.jpg', alt: 'York' },
  { src: '/home/logo2.png', alt: 'Fiat' },
  { src: '/home/logo3.png', alt: 'Daikin1' },
  { src: '/home/logo4.png', alt: 'Daikin2' },
  { src: '/home/logo5.jpg', alt: 'Daikin3' },
  { src: '/home/logo6.png', alt: 'Daikin4' },
  { src: '/home/logo7.png', alt: 'Daikin5' },
  { src: '/home/logo8.png', alt: 'Daikin6' },
  { src: '/home/logo9.png', alt: 'York2' },
  { src: '/home/logo10.png', alt: 'Fiat2' },
  { src: '/home/logo12.png', alt: 'Daikin8' },
  { src: '/home/logo13.jpg', alt: 'Daikin9' },
];

export default function TopRecruitersSwap() {
  const [currentSet, setCurrentSet] = useState(0);

  // Calculate how many complete sets of 4 we can make
  const totalSets = Math.ceil(allLogos.length / 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 4000); // Increased to 4 seconds for better viewing

    return () => clearInterval(interval);
  }, [totalSets]);

  // Get current 4 logos to display
  const getCurrentLogos = () => {
    const startIndex = currentSet * 4;
    const endIndex = Math.min(startIndex + 4, allLogos.length);
    const currentLogos = allLogos.slice(startIndex, endIndex);
    
    // Fill remaining slots if needed
    while (currentLogos.length < 4) {
      const remainingIndex = (startIndex + currentLogos.length) % allLogos.length;
      currentLogos.push(allLogos[remainingIndex]);
    }
    
    return currentLogos;
  };

  const currentLogos = getCurrentLogos();

  // Container variants for staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      }
    }
  };

  // Individual logo variants
  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  return (
    <section className="bg-[#f5f9ff] text-center py-10 overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a264f] mb-8">
        Top Recruiters at MAF ITI
      </h2>
      
      <div className="relative w-full bg-white shadow-[0_-2px_0_rgba(0,0,0,0.1),0_2px_0_rgba(0,0,0,0.1)] py-8 px-4 min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSet}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-6xl mx-auto w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {currentLogos.map((logo, index) => (
              <motion.div
                key={`${logo.alt}-${currentSet}-${index}`}
                className="flex items-center justify-center p-4"
                variants={logoVariants}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={180}
                  height={100}
                  className="object-contain hover:scale-105 transition-transform duration-300 filter "
                  priority={currentSet === 0 && index < 4}
                  loading={currentSet === 0 && index < 4 ? "eager" : "lazy"}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
       
      </div>
    </section>
  );
}