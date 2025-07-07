'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  FaUserCircle,
  FaTrashAlt,
  FaTimes,
} from 'react-icons/fa';

export default function BlogPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [editBlog, setEditBlog] = useState(null);
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
    <div className="relative font-[poppins] min-h-screen">
      {/* Blur Background when modal is open */}
      {editBlog && (
        <div className="fixed inset-0 backdrop-blur-md backdrop-brightness-75 z-40 flex justify-center items-center">
          {/* Modal */}
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-xl relative z-50 shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
              onClick={() => setEditBlog(null)}
              title="Close"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold text-[#1B264F] mb-4">Edit Blog</h2>
            <label className="block font-semibold text-[#1B264F] mb-1">Title :</label>
            <input
              type="text"
              defaultValue={editBlog.title}
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 mb-4 text-black placeholder-black"
            />

            <label className="block font-semibold text-[#1B264F] mb-1">Date :</label>
            <input
              type="text"
              defaultValue={editBlog.date}
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 mb-4 text-black placeholder-black"
            />

            <label className="block font-semibold text-[#1B264F] mb-1">Content :</label>
            <textarea
              placeholder="Edit blog content here"
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 h-32 text-black placeholder-black"
            ></textarea>

            <div className="text-right mt-4">
              <button className="bg-[#1B264F] text-white px-5 py-2 rounded hover:bg-[#14203c]">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <div className="flex">
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
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-black"
            />

            <div className="flex flex-wrap gap-6 items-center mb-6">
              <div className="flex-1">
                <label className="block font-semibold text-[#1B264F] mb-1">Date :</label>
                <input
                  type="date"
                  className="w-full bg-white border border-gray-300 rounded px-4 py-2 shadow focus:outline-none text-black"
                />
              </div>

              <div className="flex-1">
                <label className="block font-semibold text-[#1B264F] mb-1">Add Image :</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    className="w-full border border-gray-300 rounded px-3 py-1.5 shadow bg-white text-black"
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
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 h-48 mb-6 shadow focus:outline-none text-black placeholder-black"
            ></textarea>

            <div className="text-center mb-10">
              <button className="bg-[#1B264F] text-white px-6 py-2 rounded shadow hover:bg-[#14203c]">SUBMIT</button>
            </div>

            {/* Latest Blogs */}
            <h3 className="text-center text-2xl font-bold mb-6 text-[#1B264F]">Latest Blogs</h3>
            <div className="bg-[#1B264F] text-white px-16 py-14 rounded-2xl space-y-12 max-w-[2000px] mx-auto w-full">
              {blogs.map((blog) => (
                <div key={blog.id} className="flex gap-6 items-start">
                  <div className="w-60 h-36 relative flex-shrink-0">
                    <Image src={blog.image} alt="Blog Image" fill className="object-cover rounded-md" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm space-x-3 mb-1">
                      <button
                        className="text-blue-400 hover:underline"
                        onClick={() => setEditBlog(blog)}
                      >
                        Edit
                      </button>
                      <button className="text-red-400 hover:underline">Delete</button>
                    </div>
                    <h4 className="text-yellow-400 font-semibold text-lg leading-snug">
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
