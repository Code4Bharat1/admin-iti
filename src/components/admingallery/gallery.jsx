'use client';

import React, {useEffect,useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaTrashAlt } from 'react-icons/fa';

export default function Gallery() {
  const router = useRouter();
  const [photos, setPhotos] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const adminToken = localStorage.getItem("adminToken");
        const res = await axios.get('http://localhost:5000/api/admin/media/images', {
          headers: {
            Authorization: `Bearer ${adminToken}`
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
      const adminToken = localStorage.getItem("adminToken");
      await axios.delete(`http://localhost:5000/api/admin/media/images/${id}`, {
        headers: {
          Authorization: `Bearer ${adminToken}`,
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
      const formData = new FormData();
      formData.append('image', selectedFile);

      const res = await axios.post(
        'http://localhost:5000/api/admin/media/images',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      const newImage = res.data;
      setPhotos([...photos, newImage]);
      setSelectedFile(null);

    } catch (err) {
      console.error('Error uploading image:', err);
    }
  }
};


  const handleClear = () => {
    setSelectedFile(null);
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
