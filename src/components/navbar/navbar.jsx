"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    setIsLoggedIn(!!auth);
  }, []);

 
  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [isMobileMenuOpen]);

  const handleLogin = () => {
    router.push("/login");
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsLoggedIn(false);
    router.push("/");
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: "Home", path: "https://maf-iti.nexcorealliance.com/" },
    { name: "About Us", path: "https://maf-iti.nexcorealliance.com/aboutus" },
    { name: "Courses", path: "https://maf-iti.nexcorealliance.com/courses" },
    { name: "Admissions", path: "https://maf-iti.nexcorealliance.com/admission" },
    { name: "Faculty", path: "https://maf-iti.nexcorealliance.com/faculty" },
    { name: "Student Corner", path: "https://maf-iti.nexcorealliance.com/student_corner" },
    { name: "Placement", path: "https://maf-iti.nexcorealliance.com/placement" },
    { name: "Contact Us", path: "https://maf-iti.nexcorealliance.com/contactus" },
    { name: "Gallery", path: "https://maf-iti.nexcorealliance.com/gallery" },
    { name: "News", path: "https://maf-iti.nexcorealliance.com/news" },
  ];

  

  return (
    <div className="w-full sticky top-0 z-50"> 
      {/* Main navbar section */}
      <div className="bg-[#1c2848] w-full mobile-menu-container">
        <div className="w-[95%] mx-auto px-4 md:px-6 flex items-center justify-between py-2 md:py-1 max-w-[1600px]">
          {/* Logo */}
          
          <div onClick={() => handleNavigation("/")} className="cursor-pointer">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={60} 
              height={60} 
              className="md:w-[100px] md:h-[80px]"
            />
          </div>

          {/* Desktop Navigation menu */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-lg xl:text-xl font-medium">
            {menuItems.map(({ name, path }) => (
              <li
                key={name}
                onClick={() => handleNavigation(path)}
                className={`cursor-pointer ${
                  pathname === path ? "text-[#FFD700]" : "text-white"
                } hover:text-yellow-300 transition whitespace-nowrap`}
              >
                {name}
              </li>
            ))}
          </ul>

          {/* Mobile hamburger menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col space-y-1 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></div>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div className={`lg:hidden bg-[#1c2848] border-t border-gray-600 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {/* Grid layout for mobile menu items */}
          <div className="py-4 px-6 grid grid-cols-2 gap-3">
            {menuItems.map(({ name, path }) => (
              <div
                key={name}
                onClick={() => handleNavigation(path)}
                className={`cursor-pointer py-3 px-2 text-sm font-medium border rounded-md text-center transition-colors ${
                  pathname === path 
                    ? "text-yellow-400 border-yellow-400" 
                    : "text-white border-gray-600 hover:text-yellow-300 hover:border-yellow-300"
                }`}
              >
                {name}
              </div>
            ))}
          </div>
          
          {/* Mobile login/logout in menu */}
          <div className="px-6 pb-4 border-t border-gray-600 pt-4">
            {!isLoggedIn ? (
              <button
                onClick={handleLogin}
                className="w-full bg-[#FFDF35] hover:bg-yellow-500 text-black px-4 py-2 rounded text-sm font-medium"
              >
                Log In
              </button>
            ) : (
              <div className="space-y-2">
                <p className="text-white text-sm">Welcome, User</p>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        
      </div>
    </div>
  );
}