'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  FaUserCircle,
  FaTachometerAlt,
  FaImages,
  FaVideo,
  FaClipboard,
  FaBlog,
  FaMedal,
  FaSignOutAlt,
  FaTrashAlt,
} from 'react-icons/fa';

export default function BlogPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);

  const [blogs] = useState([
    {
      id: 1,
      image: '/images/blog11.png',
      title: 'Unveiling the Craft of Draughtsman Civil: Architects of Structural Ingenuity',
      date: 'Wednesday, April 10, 2024',
    },
    {
      id: 2,
      image: '/images/blog2.png',
      title: 'Exploring the Craft of Refrigeration & Air Conditioning Technicians (RACT): Masters of Climate Control',
      date: 'Wednesday, April 10, 2024',
    },
    {
      id: 3,
      image: '/images/blog3.png',
      title: 'Exploring the Role and Importance of Draughtsman Mechanical',
      date: 'Wednesday, April 10, 2024',
    },
  ]);

  return (
    <div className="flex font-[poppins] min-h-screen">
      {/* Sidebar */}
      <div className="w-60 bg-[#1B264F] text-white flex flex-col items-center py-4 space-y-6 min-h-screen">
        <div className="flex flex-col items-center mt-20 space-y-1">
          <FaUserCircle className="text-5xl text-black bg-white rounded-full p-1" />
          <span className="text-lg text-[#FFDF35]">abc@gmail.com</span>
        </div>

        <div className="w-full px-4 space-y-4 mt-4 text-sm">
          <div onClick={() => router.push('/dashboard')} className="flex items-center space-x-2 bg-gray-200 text-black px-2 py-1 rounded cursor-pointer">
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

      {/* Main Content */}
      <div className="flex-1 bg-[#f0f8ff] px-6 py-6 relative">
        {/* Email Top Right */}
        <div className="absolute top-4 right-6 flex items-center space-x-2 text-black">
          <span>abc@gmail.com</span>
          <FaUserCircle className="text-2xl" />
        </div>

        {/* Add New Blog */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold text-[#1B264F] mb-6">Add New Blog</h2>

          <label className="block font-semibold text-[#1B264F] mb-1">Title :</label>
          <input
            type="text"
            placeholder="Enter Blog Title"
            className="w-full bg-white border border-gray-300 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex flex-wrap gap-6 items-center mb-6">
            <div className="flex-1">
              <label className="block font-semibold text-[#1B264F] mb-1">Date :</label>
              <input
                type="date"
                className="w-full bg-white border border-gray-300 rounded px-4 py-2 shadow focus:outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="block font-semibold text-[#1B264F] mb-1">Add Image :</label>
              <div className="flex items-center space-x-2">
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded px-3 py-1.5 shadow bg-white"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                />
                {selectedFile && (
                  <FaTrashAlt
                    className="text-black cursor-pointer"
                    onClick={() => setSelectedFile(null)}
                    title="Remove file"
                  />
                )}
              </div>
            </div>
          </div>

          <label className="block font-semibold text-[#1B264F] mb-1">Content :</label>
          <textarea
            placeholder="Write your blog content here"
            className="w-full bg-white border border-gray-300 rounded px-4 py-2 h-48 mb-6 shadow focus:outline-none"
          ></textarea>

          <div className="text-center mb-10">
            <button className="bg-[#1B264F] text-white px-6 py-2 rounded shadow hover:bg-[#14203c]">SUBMIT</button>
          </div>

          {/* Latest Blogs */}
          <h3 className="text-left text-lg font-bold mb-4 text-[#1B264F]">Latest Blogs</h3>
          <div className="flex justify-center">
            <div className="bg-[#1B264F] text-white p-10 rounded-xl space-y-10 w-[860px]">
              {blogs.map((blog) => (
                <div key={blog.id} className="flex gap-8 items-start">
                  <div className="w-72 h-48 relative flex-shrink-0">
                    <Image src={blog.image} alt="Blog Image" fill className="object-cover rounded-md" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm space-x-3 mb-1">
                      <button className="text-blue-400 hover:underline">Edit</button>
                      <button className="text-red-400 hover:underline">Delete</button>
                    </div>
                    <h4 className="text-yellow-400 font-semibold text-md leading-snug">
                      {blog.title}
                    </h4>
                    <p className="text-xs bg-white text-black px-2 py-0.5 inline-block rounded mt-1">
                      {blog.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
