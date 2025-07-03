"use client";
import React from 'react';
import { useRouter } from "next/navigation";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaImages,
  FaVideo,
  FaClipboard,
  FaBlog,
  FaMedal,
  FaSignOutAlt
} from "react-icons/fa";

export default function Dashboard() {
  const router = useRouter();

  const stats = [
    { label: 'Notices', count: 3 },
    { label: 'Photos', count: 18 },
    { label: 'Videos', count: 4 },
    { label: 'Blogs', count: 3 },
  ];

  const activities = [
    {
      user: 'john.doe@example.com',
      action: 'Edited Blog Post',
      section: 'Blogs',
      dateTime: '19 June 2025, 10:45 AM',
    },
    {
      user: 'jane.smith@example.com',
      action: 'Added New Notice',
      section: 'Notice Board',
      dateTime: '15 June 2025, 11:29 AM',
    },
    {
      user: 'michael.brown@example.com',
      action: 'Deleted Image',
      section: 'Gallery',
      dateTime: '12 June 2025, 08:22 PM',
    },
    {
      user: 'emily.wilson@example.com',
      action: 'Updated Topper List',
      section: 'Topper List',
      dateTime: '11 June 2025, 09:15 AM',
    },
    {
      user: 'david.lee@example.com',
      action: 'Added Video',
      section: 'Video Gallery',
      dateTime: '05 June 2025, 07:55 PM',
    },
  ];

  return (
    <div className="flex min-h-screen font-poppins">
      {/* Sidebar */}
      <div className="w-72 h-screen bg-[#1B264F] text-white flex flex-col items-center py-4 space-y-6">
        <div className="flex flex-col items-center mt-20 space-y-1">
          <FaUserCircle className="text-5xl text-black bg-white rounded-full p-1" />
          <span className="text-lg text-[#FFDF35]">abc@gmail.com</span>
        </div>

        <div className="w-full px-4 space-y-4 mt-4 text-sm">
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

      {/* Dashboard Content */}
      <div className="bg-[#F4F8FC] flex-1 p-10">
        <h1 className="text-4xl font-extrabold text-[#1F2C56] mb-12">Dashboard</h1>

        <div className="flex flex-wrap gap-8 mb-16 justify-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFDF35] text-center px-20 py-14 rounded-2xl shadow-lg w-[260px] h-[200px] flex flex-col justify-center items-center"
            >
              <p className="text-7xl font-extrabold text-[#1F2C56]">{item.count}</p>
              <p className="text-[#1F2C56] font-semibold mt-4 text-2xl">{item.label}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-extrabold text-[#1F2C56] mb-6">Recent Activity</h2>

        <div className="overflow-x-auto max-w-8xl mx-auto">
          <table className="w-full text-base text-left rounded-xl overflow-hidden shadow-md">
            <thead className="bg-[#1F2C56] text-white text-lg">
              <tr>
                <th className="py-2 px-4 font-semibold">User</th>
                <th className="py-2 px-4 font-semibold">Action</th>
                <th className="py-2 px-4 font-semibold">Section</th>
                <th className="py-2 px-4 font-semibold">Date & Time</th>
              </tr>
            </thead>
            <tbody className="bg-[#C9D4EC] text-[#1F2C56] text-base">
              {activities.map((activity, idx) => (
                <tr key={idx} className="border-t border-gray-300">
                  <td className="py-2 px-4">{activity.user}</td>
                  <td className="py-2 px-4">{activity.action}</td>
                  <td className="py-2 px-4">{activity.section}</td>
                  <td className="py-2 px-4">{activity.dateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
