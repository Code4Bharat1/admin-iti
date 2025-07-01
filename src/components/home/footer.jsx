"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaYoutube,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  const router = useRouter();
  const handleRoute = (path) => router.push(path);

  return (
    <footer className="bg-[#1e2a3a] text-white pt-10 pb-4 text-sm">
      <div className="max-w-7xl mx-auto px-4 border-b-2 border-white pb-8">
        {/* Logo & Institute Info - Full Width on Mobile */}
        <div className="flex flex-col items-center text-center mb-8 md:hidden">
          <Image src="/logo.png" alt="Logo" width={90} height={90} />
          <h2 className="font-medium whitespace-nowrap text-sm text-white">
            Mehrunnissa Abbas Fakih Industrial Training Institute
          </h2>
          <p className="mt-2 text-gray-400 text-[13px]">
            Powered by Anjuman Waseeul Taleem Educational Trust, Raigad.
            Empowering rural youth through technical education since 2006.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-10">
          {/* Logo & Institute Info - Desktop */}
          <div className="flex flex-col items-center text-center">
            <Image src="/logo.png" alt="Logo" width={90} height={90} />
            <h2 className="font-medium whitespace-nowrap text-sm text-white">
              Mehrunnissa Abbas Fakih Industrial Training Institute
            </h2>
            <p className="mt-2 text-gray-400 text-[13px]">
              Powered by Anjuman Waseeul Taleem Educational Trust, Raigad.
              Empowering rural youth through technical education since 2006.
            </p>
          </div>

          {/* Quick Links - Desktop */}
          <div className="mx-10"> 
            <h3 className="font-medium text-xl mb-2 text-white">Quick Links</h3>
            <ul className="list-disc pl-5 cursor-pointer space-y-1 text-gray-300 text-sm">
              <li className="hover:text-yellow-400" onClick={() => handleRoute("/")}>Home</li>
              <li className="hover:text-yellow-400" onClick={() => handleRoute("/about")}>About Us</li>
              <li className="hover:text-yellow-400" onClick={() => handleRoute("/courses")}>Courses</li>
              <li className="hover:text-yellow-400" onClick={() => handleRoute("/admission")}>Admission</li>
              <li className="hover:text-yellow-400" onClick={() => handleRoute("/contact")}>Contact Us</li>
            </ul>
          </div>

          {/* Contact Info - Desktop */}
          <div>
            <h3 className="font-medium text-base mb-2 text-white">Contact Info</h3>
            <div className="text-gray-300 text-sm">
              <p className="flex items-start space-x-2">
                <Image src="/home/location.png" alt="Location Icon" width={20} height={20} className="mt-[2px] flex-shrink-0" />
                <span>Mazgaon, Taluka Murud, District Raigad, Maharashtra – 402401</span>
              </p>

              <a
                href="https://www.google.com/maps?q=Mazgaon,+Taluka+Murud,+Raigad,+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-2 border border-white px-3 py-1 rounded text-xs hover:bg-white hover:text-black transition">
                  View Map
                </button>
              </a>
            </div>
          </div>

          {/* Social + Contact Channels - Desktop */}
          <div>
            <h3 className="font-medium text-base mb-2 text-white">Connect</h3>
            <p className="flex items-center text-[13px] text-gray-300 mb-4">
              <Image src="/home/phone.png" alt="Phone Icon" width={20} height={20} className="mt-[2px] mr-2 flex-shrink-0" />
              <a href="tel:+918983508919" className="hover:text-yellow-400">
                +91 8983508919
              </a>
            </p>
            <p className="flex items-center text-sm text-gray-300 mb-4">
              <Image src="/home/mail.png" alt="Mail Icon" width={20} height={20} className="mt-[2px] mr-2 flex-shrink-0" />
              <a href="mailto:awtmtaft@gmail.com" className="hover:text-yellow-400">
                awtmtaft@gmail.com
              </a>
            </p>
            <div className="flex mt-3 space-x-3 text-base">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@awtmtaft"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-1.5 text-red-500 hover:bg-gray-100 transition"
              >
                <FaYoutube />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/awtmtaft"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-[1px] bg-gradient-to-tr from-yellow-300 via-red-400 to-pink-500 hover:opacity-90 transition"
              >
                <div className="bg-white rounded-full p-1.5 text-pink-500">
                  <FaInstagram />
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/awtmtaft"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-1.5 text-blue-500 hover:bg-gray-100 transition"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Grid - 2 columns for Quick Links and Connect */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          {/* Quick Links - Mobile */}
          <div> 
            <h3 className="font-medium text-xl mb-2 text-white">Quick Links</h3>
            <ul className="list-disc pl-5 cursor-pointer space-y-1 text-gray-300 text-sm">
              <li className="hover:text-yellow-400" onClick={() => handleRoute("/")}>Home</li>
              <li className="hover:text-yellow-400" onClick={() => handleRoute("/about")}>About Us</li>
              <li className="hover:text-yellow-400" onClick={() => handleRoute("/courses")}>Courses</li>
              <li className="hover:text-yellow-400" onClick={() => handleRoute("/admission")}>Admission</li>
              <li className="hover:text-yellow-400" onClick={() => handleRoute("/contact")}>Contact Us</li>
            </ul>
          </div>

          {/* Connect - Mobile */}
          <div>
            <h3 className="font-medium text-base mb-2 text-white">Connect</h3>
            <p className="flex items-center text-[13px] text-gray-300 mb-3">
              <Image src="/home/phone.png" alt="Phone Icon" width={16} height={16} className="mt-[2px] mr-2 flex-shrink-0" />
              <a href="tel:+918983508919" className="hover:text-yellow-400 text-xs">
                +91 8983508919
              </a>
            </p>
            <p className="flex items-center text-sm text-gray-300 mb-3">
              <Image src="/home/mail.png" alt="Mail Icon" width={16} height={16} className="mt-[2px] mr-2 flex-shrink-0" />
              <a href="mailto:awtmtaft@gmail.com" className="hover:text-yellow-400 text-xs break-all">
                awtmtaft@gmail.com
              </a>
            </p>
            <div className="flex mt-3 space-x-2 text-sm">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@awtmtaft"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-1 text-red-500 hover:bg-gray-100 transition"
              >
                <FaYoutube />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/awtmtaft"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-[1px] bg-gradient-to-tr from-yellow-300 via-red-400 to-pink-500 hover:opacity-90 transition"
              >
                <div className="bg-white rounded-full p-1 text-pink-500">
                  <FaInstagram />
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/awtmtaft"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-1 text-blue-500 hover:bg-gray-100 transition"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info - Mobile (Full Width Below) */}
        <div className="mt-6 md:hidden">
          <h3 className="font-medium text-base mb-2 text-white">Contact Info</h3>
          <div className="text-gray-300 text-sm">
            <p className="flex items-start space-x-2">
              <Image src="/home/location.png" alt="Location Icon" width={20} height={20} className="mt-[2px] flex-shrink-0" />
              <span>Mazgaon, Taluka Murud, District Raigad, Maharashtra – 402401</span>
            </p>

            <a
              href="https://www.google.com/maps?q=Mazgaon,+Taluka+Murud,+Raigad,+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-2 border border-white px-3 py-1 rounded text-xs hover:bg-white hover:text-black transition">
                View Map
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-yellow-400 text-[13px] mt-3 font-semibold px-4">
        © Copyright 2025 AWT Mehrunnissa Abbas Fakih ITI All rights reserved | Designed by Code4bharat
      </div>
    </footer>
  );
}