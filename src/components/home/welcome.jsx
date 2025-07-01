'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WelcomeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.3,
    margin: "-100px"
  });

  // Animation variants
  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -100,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 100,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.4
      }
    }
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 30,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6
      }
    }
  };

  return (
    <section ref={ref} className="bg-[#F4F9FF] py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Left */}
        <motion.div 
          className="w-full md:w-1/2"
          variants={slideInLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-Poppins text-center 
              font-extrabold text-gray-900 mb-4"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Welcome to MAF ITI
          </motion.h2>
          <motion.p 
            className="text-gray-900 text-2xl ml-5 leading-relaxed"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Established in 2006, MAF ITI is committed to building a skilled workforce for the
            future. We offer practical, employment-focused training that empowers students to
            succeed in today's competitive job market. Our programs are aligned with industry
            standards to ensure maximum employability.
          </motion.p>
        </motion.div>

        {/* Image Right */}
        <motion.div 
          className="w-full md:w-1/2"
          variants={slideInRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="relative overflow-hidden rounded-lg"
          >
            <Image
              src="/home/welcome.png"
              alt="Computer Lab"
              width={500}
              height={300}
              className="mx-auto shadow-lg object-cover transition-transform duration-500"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}