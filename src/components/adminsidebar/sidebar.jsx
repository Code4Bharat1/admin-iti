'use client';

import { useRouter, usePathname } from 'next/navigation';

import {
  FaUserCircle,
  FaTachometerAlt,
  FaImages,
  FaVideo,
  FaClipboard,
  FaBlog,
  FaMedal,
  FaSignOutAlt,
} from 'react-icons/fa';

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) => pathname.startsWith(path);

  const baseLinkStyle =
    'flex items-start justify-start gap-2 px-4 py-3 rounded-md cursor-pointer w-full transition-all duration-150';
  const activeStyle = 'bg-yellow-300 text-black font-semibold';
  const inactiveStyle = 'text-white hover:bg-white/10';

  return (
    <div className="w-60 h-screen bg-[#1B264F] text-white flex flex-col items-center py-4 font-[poppins]">
      {/* Profile */}
      <div className="flex flex-col items-center mt-10 space-y-2">
        <FaUserCircle className="text-5xl text-black bg-white rounded-full p-1" />
        <span className="text-sm text-[#FFDF35] text-center break-words">Ayaanraje25@gmail.com</span>
      </div>

      {/* Navigation */}
      <div className="w-full mt-10 flex flex-col items-center space-y-1">
        <div
          onClick={() => router.push('/admindashboard')}
          className={`${baseLinkStyle} ${isActive('/admindashboard') ? activeStyle : inactiveStyle}`}
        >
          <FaTachometerAlt className="text-lg" />
          <span className="text-sm">Dashboard</span>
        </div>

        <div
          onClick={() => router.push('/admingallery')}
          className={`${baseLinkStyle} ${isActive('/admingallery') ? activeStyle : inactiveStyle}`}
        >
          <FaImages className="text-lg" />
          <span className="text-sm">Gallery</span>
        </div>

        <div
          onClick={() => router.push('/adminvideo')}
          className={`${baseLinkStyle} ${isActive('/adminvideo') ? activeStyle : inactiveStyle}`}
        >
          <FaVideo className="text-lg" />
          <span className="text-sm">Videos</span>
        </div>

        <div
          onClick={() => router.push('/adminnotice')}
          className={`${baseLinkStyle} ${isActive('/adminnotice') ? activeStyle : inactiveStyle}`}
        >
          <FaClipboard className="text-lg" />
          <span className="text-sm">Notice</span>
        </div>

        <div
          onClick={() => router.push('/adminBlog')}
          className={`${baseLinkStyle} ${isActive('/adminBlog') ? activeStyle : inactiveStyle}`}
        >
          <FaBlog className="text-lg" />
          <span className="text-sm">Blogs</span>
        </div>

        <div
          onClick={() => router.push('/admintopper')}
          className={`${baseLinkStyle} ${isActive('/admintopper') ? activeStyle : inactiveStyle}`}
        >
          <FaMedal className="text-lg" />
          <span className="text-sm">Toppers</span>
        </div>

        <div
          onClick={() => router.push('/login')}
          className={`${baseLinkStyle} ${isActive('/logout') ? activeStyle : inactiveStyle}`}
        >
          <FaSignOutAlt className="text-lg" />
          <span className="text-sm text-red-500">Logout</span>
        </div>
      </div>
    </div>
  );
}
