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
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Courses", path: "/courses" },
    { name: "Admissions", path: "/admission" },
    { name: "Faculty", path: "/faculty" },
    { name: "Student Corner", path: "/student_corner" },
    { name: "Placement", path: "/placement" },
    { name: "Contact Us", path: "/contactus" },
    { name: "Gallery", path: "/gallery" },
  ];

  

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top bar with login/logout */}
      
        
{/* Top Contact Info Bar */}
<div className="bg-[#1c2848] text-white text-xs md:text-sm px-4 py-1 flex justify-between items-start">
  {/* Left side: email and phone */}
  <div className="flex items-start space-x-6">
  {/* Email */}
  <div className="flex items-start space-x-2 mt-1">
    <span className="bg-yellow-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
      <MdEmail className="text-sm" />
    </span>
    <span className="text-white text-xs md:text-sm font-medium font-Poppins">awtmaft@gmail.com</span>
  </div>

  {/* Phone */}
  <div className="flex items-start space-x-2 mt-1">
    <span className="bg-yellow-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">
      <MdPhone className="text-sm" />
    </span>
    <span className="text-white text-xs md:text-sm  font-medium font-Poppins">+91 8983508919</span>
  </div>
</div>


  {/* Right side: login/logout */}
  <div>
    {!isLoggedIn ? (
      <button
        onClick={handleLogin}
        className="bg-[#FFDF35] hover:bg-yellow-500 text-black px-2 py-1 rounded text-sm"
      >
        Log In
      </button>
    ) : (
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
      >
        Logout
      </button>
    )}
  </div>
</div>

      <hr className="bg-white border border-white" />
      
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