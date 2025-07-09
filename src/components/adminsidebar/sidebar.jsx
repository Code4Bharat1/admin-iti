'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
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
import axios from 'axios';


export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [admin, setAdmin] = useState(null);

  const isActive = (path) => pathname.startsWith(path);

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const res = await axios.get('http://localhost:5000/api/admin/auth/me', config);
        setAdmin(res.data.admin);
      } catch (error) {
        console.error('Failed to fetch admin details:', error);
        // Optionally redirect or show error
      }
    };

    fetchAdminDetails();
  }, []);


  const baseLinkStyle =
    'flex items-start justify-start gap-2 px-4 py-3 rounded-md cursor-pointer w-full transition-all duration-150';
  const activeStyle = 'bg-yellow-300 text-black font-semibold';
  const inactiveStyle = 'text-white hover:bg-white/10';

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      await axios.post('http://localhost:5000/api/admin/auth/logout', {}, config);

      localStorage.removeItem('token');
      setShowLogoutConfirm(false);
      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Logout failed. Please try again.');
    }
  };


  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  return (
    <div className="w-60 h-screen bg-[#1B264F] text-white flex flex-col items-center py-4 font-[poppins] relative">
      {/* Profile */}
      <div className="flex flex-col items-center mt-10 space-y-2">
        <FaUserCircle className="text-5xl text-black bg-white rounded-full p-1" />
        <span className="text-sm text-[#FFDF35] text-center break-words">
          {admin ? admin.email : 'Loading...'}
        </span>
      </div>

      {/* Navigation */}
      <div className="w-full mt-10 flex flex-col items-center space-y-1">
        <div
          onClick={() => router.push('/admindashboard')}
          className={`${baseLinkStyle} ${isActive('/admindashboard') ? activeStyle : inactiveStyle
            }`}
        >
          <FaTachometerAlt className="text-lg" />
          <span className="text-sm">Dashboard</span>
        </div>

        <div
          onClick={() => router.push('/admingallery')}
          className={`${baseLinkStyle} ${isActive('/admingallery') ? activeStyle : inactiveStyle
            }`}
        >
          <FaImages className="text-lg" />
          <span className="text-sm">Gallery</span>
        </div>

        <div
          onClick={() => router.push('/adminvideo')}
          className={`${baseLinkStyle} ${isActive('/adminvideo') ? activeStyle : inactiveStyle
            }`}
        >
          <FaVideo className="text-lg" />
          <span className="text-sm">Videos</span>
        </div>

        <div
          onClick={() => router.push('/adminnotice')}
          className={`${baseLinkStyle} ${isActive('/adminnotice') ? activeStyle : inactiveStyle
            }`}
        >
          <FaClipboard className="text-lg" />
          <span className="text-sm">Notice</span>
        </div>

        <div
          onClick={() => router.push('/adminBlog')}
          className={`${baseLinkStyle} ${isActive('/adminBlog') ? activeStyle : inactiveStyle
            }`}
        >
          <FaBlog className="text-lg" />
          <span className="text-sm">Blogs</span>
        </div>

        <div
          onClick={() => router.push('/admintopper')}
          className={`${baseLinkStyle} ${isActive('/admintopper') ? activeStyle : inactiveStyle
            }`}
        >
          <FaMedal className="text-lg" />
          <span className="text-sm">Toppers</span>
        </div>

        <div
          onClick={handleLogoutClick}
          className={`${baseLinkStyle} ${isActive('/logout') ? activeStyle : inactiveStyle
            }`}
        >
          <FaSignOutAlt className="text-lg" />
          <span className="text-sm text-red-500">Logout</span>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-80 text-center">
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Are you sure you want to logout?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Yes
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
