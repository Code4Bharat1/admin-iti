'use client';

import React, { useState } from 'react';
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

export default function Gallery() {
  const router = useRouter();

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

  const [selectedFile, setSelectedFile] = useState(null);

  const handleDelete = (index) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const newPhotoUrl = URL.createObjectURL(selectedFile);
      setPhotos([...photos, newPhotoUrl]);
      setSelectedFile(null);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
  };

  return (
    <div className="flex min-h-screen font-poppins">
      {/* Sidebar */}
      <div className="w-72 min-h-screen bg-[#1B264F] text-white flex flex-col items-center py-4 space-y-6 pb-20">
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
      <div className="flex-1 bg-[#F4F8FC] px-8 py-6 overflow-auto">
        {/* Top Right Email */}
        <div className="flex justify-end items-center gap-2 mb-4 text-[#1F2C56]">
          <span className="text-sm">abc@gmail.com</span>
      
        </div>

        {/* Header */}
        <h1 className="text-4xl font-extrabold text-[#1F2A44] mb-2">Gallery</h1>
        <h2 className="text-lg font-extrabold text-[#1F2A44] mb-4">Add New Photos</h2>

       <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-4 mb-10">
  {/* Choose File Box */}
  <div className="flex items-center border border-gray-400 bg-[#E5E5E5] rounded px-2 py-1">
    <label className="bg-white text-black text-sm px-4 py-2 cursor-pointer rounded">
      Choose File
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
    </label>
    <div className="px-3 text-sm text-black">
      {selectedFile ? selectedFile.name : 'No File chosen'}
    </div>
  </div>

  {/* Trash Icon OUTSIDE box, before SUBMIT */}
  {selectedFile && (
    <button
      type="button"
      onClick={handleClear}
      className="text-black text-2xl"
      title="Clear file"
    >
      <FaTrashAlt />
    </button>
  )}


  {/* Submit Button */}
  <button
    type="submit"
    className="bg-[#1F2A44] text-white px-6 py-2 rounded-md font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-[#8F63FF]"
  >
    SUBMIT
  </button>
</form>


        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-[#1F2A44] mb-6 text-center">Gallery</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((src, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden rounded-md shadow-md">
                <Image
                  src={src}
                  alt={`Photo ${index + 1}`}
                  width={250}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="mt-2 text-red-600 text-sm font-semibold"
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
