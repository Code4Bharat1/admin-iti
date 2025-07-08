'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
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

import { useEffect } from 'react';

export default function Gallery() {
  const router = useRouter();
  const [photos, setPhotos] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get('http://localhost:5000/api/admin/media/images', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPhotos(res.data); // Use res.data for axios, not res.json()
      } catch (err) {
        console.error('Failed to fetch photos', err);
      }
    };
  
    fetchPhotos();
  }, []);
  ;
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:5000/api/admin/media/images/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // ✅ Frontend state se bhi hatao
      const updatedPhotos = photos.filter(photo => photo._id !== id);
      setPhotos(updatedPhotos);
  
      console.log("Image deleted successfully");
    } catch (err) {
      console.error("Failed to delete image:", err);
    }
  };
  

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (selectedFile) {
      try {
        const token = localStorage.getItem("token");
  
        const formData = new FormData();
        formData.append('image', selectedFile);
  
        const res = await axios.post(
          'http://localhost:5000/api/admin/media/images',
          formData,
          {
            headers: {
              // ✅ DO NOT set Content-Type manually when using FormData
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        const newImage = res.data;
        setPhotos(prevPhotos => [...prevPhotos, newImage]);
        setSelectedFile(null);
  
        console.log('Upload success:', newImage);
      } catch (err) {
        console.error('Error uploading image:', err);
      }
    } else {
      console.warn('No file selected!');
    }
  };
  

  const handleClear = () => {
    setSelectedFile(null);
  };

  return (
    <div className="flex min-h-screen font-poppins">
          {/* Main Content */}
      <div className="flex-1 bg-[#F4F8FC] px-8 py-6 overflow-auto">

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
  {photos
    .filter(photo => photo.imageUrl && photo.imageUrl.trim() !== "")
    .map((photo, index) => (
      <div key={index} className="flex flex-col items-center">
        <div className="w-full aspect-square overflow-hidden rounded-md shadow-md">
        <img 
  src={photo.imageUrl} 
  alt={`Photo ${index + 1}`} 
  className="object-cover w-full h-full" 
/>

        </div>
        <button
          onClick={() => handleDelete(photo._id)} // Use ID not index!
          className="mt-2 text-red-600 text-sm font-semibold cursor-pointer"
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