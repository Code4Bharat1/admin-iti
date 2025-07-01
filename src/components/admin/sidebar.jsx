"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaUserCircle, FaTachometerAlt, FaImages, FaVideo, FaClipboard, FaBlog, FaMedal, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-60 h-screen bg-[#1B264F] text-white  flex flex-col items-center py-4 space-y-6 font-[poppins]">
     

      <div className="flex flex-col items-center mt-20 space-y-1">
        <FaUserCircle className="text-5xl text-black bg-white rounded-full p-1" />
        <span className="text-lg  text-[#FFDF35]">abc@gmail.com</span>
      </div>

      <div className="w-full px-4 space-y-4 mt-4 font-poppins text-sm">
        <div
          onClick={() => router.push('/dashboard')}
          className="flex items-center space-x-2 bg-gray-200 text-black px-2 py-1 rounded cursor-pointer"
        >
          <FaTachometerAlt />
          <span>Dashboard</span>
        </div>

        <div onClick={() => router.push('/gallery')} className="flex items-center space-x-2 cursor-pointer">
          <FaImages />
          <span>Gallery</span>
        </div>

        <div onClick={() => router.push('/video-gallery')} className="flex items-center space-x-2 cursor-pointer">
          <FaVideo />
          <span>Video Gallery</span>
        </div>

        <div onClick={() => router.push('/notice-board')} className="flex items-center space-x-2 cursor-pointer">
          <FaClipboard />
          <span>Notice board</span>
        </div>

        <div onClick={() => router.push('/blogs')} className="flex items-center space-x-2 cursor-pointer">
          <FaBlog />
          <span>Blogs</span>
        </div>

        <div onClick={() => router.push('/topper-list')} className="flex items-center space-x-2 cursor-pointer">
          <FaMedal />
          <span>Topper List</span>
        </div>

        <div onClick={() => router.push('/logout')} className="flex items-center space-x-2 cursor-pointer">
          <FaSignOutAlt />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
