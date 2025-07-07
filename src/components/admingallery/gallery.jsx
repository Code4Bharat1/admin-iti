'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaTrashAlt } from 'react-icons/fa';

export default function AdminGallery() {
  // Correct static image paths (absolute, start from /images/)
  const [photos, setPhotos] = useState([
    '/images/pho1.png',
    '/images/pho2.png',
    '/images/pho3.png',
    '/images/pho4.png',
    '/images/pho5.png',
    '/images/pho6.png',
    '/images/pho7.png',
    '/images/pho8.png',
    '/images/pho9.png',
    '/images/pho10.png',
    '/images/pho11.png',
    '/images/pho12.png',
    '/images/pho13.png',
    '/images/pho14.png',
    '/images/pho15.png',
    '/images/pho16.png',
    '/images/pho17.png',
    '/images/pho18.png',
  ]);

  const handleDelete = (index) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  return (
    <div className="flex min-h-screen font-poppins">
      <div className="flex-1 bg-[#F4F8FC] px-8 py-6 overflow-auto">
        {/* Top Bar */}
        <div className="flex justify-end items-center gap-2 mb-4 text-[#1F2C56]">
          <span className="text-sm">abc@gmail.com</span>
          <div className="w-6 h-6 rounded-full bg-black" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-[#1F2A44] mb-2">Gallery</h1>
        <h2 className="text-lg font-extrabold text-[#1F2A44] mb-4">Add New Photos</h2>

        {/* Upload Form - Just UI */}
        <form className="flex flex-wrap items-center gap-4 mb-10">
          <div className="flex items-center border border-gray-400 bg-[#E5E5E5] rounded px-2 py-1">
            <label className="bg-white text-black text-sm px-4 py-2 cursor-pointer rounded">
              Choose File
              <input type="file" className="hidden" />
            </label>
            <div className="px-3 text-sm text-black">No file chosen</div>
          </div>
          <button type="button" className="text-black text-2xl" title="Clear file">
            <FaTrashAlt />
          </button>
          <button
            type="submit"
            className="bg-[#1F2A44] text-white px-6 py-2 rounded-md font-semibold text-sm"
          >
            SUBMIT
          </button>
        </form>

        {/* Gallery Grid */}
        <h2 className="text-4xl font-extrabold text-[#1F2A44] mb-6 text-center">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full h-52 overflow-hidden rounded-md shadow-md bg-white">
                <Image
                  src={photo}
                  alt={`Blog ${index + 1}`}
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="mt-2 px-4 py-1 bg white text-red-600 rounede-full text-sm font-semibold shadow hover:shadow-md cursor-pointer border border-red-300 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
