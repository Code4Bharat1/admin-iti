'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FaTrashAlt } from 'react-icons/fa';

export default function Gallery() {
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

  const handleSubmit = () => {
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
    <div className="bg-[#F4F8FC] min-h-screen px-8 py-6 font-poppins">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-extrabold text-[#1F2C56]">Gallery</h1>
        <div className="flex items-center gap-2 text-[#1F2C56]">
          <span className="text-sm">abc@gmail.com</span>
          <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
            👤
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <h2 className="text-lg font-semibold text-[#1F2C56] mb-2">Add New Photos</h2>
      <div className="flex items-center gap-3 mb-10">
        <input
          type="file"
          onChange={handleFileChange}
          className="border border-gray-400 rounded px-2 py-1 text-sm"
        />
        {selectedFile && (
          <button onClick={handleClear} className="text-red-600 text-lg" title="Clear file">
            <FaTrashAlt />
          </button>
        )}
        <button
          onClick={handleSubmit}
          className="bg-[#1F2C56] text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          SUBMIT
        </button>
      </div>

      {/* Section Title */}
      <h2 className="text-2xl font-extrabold text-[#1F2C56] mb-6 text-center">Gallery</h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((src, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full aspect-square overflow-hidden rounded-md shadow-md">
              <Image
                src={src}
                alt={`Photo ${index + 1}`}
                width={300}
                height={300}
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
  );
}
