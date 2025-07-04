"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import { useEffect } from "react";

import {
  FaUserCircle,
  FaTachometerAlt,
  FaImages,
  FaVideo,
  FaClipboard,
  FaBlog,
  FaMedal,
  FaSignOutAlt,
  FaTrash,
} from "react-icons/fa";

export default function VideoGallery() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
const [videos, setVideos] = useState([]);
useEffect(() => {
  const fetchVideos = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/media/video'); // Make sure this is the correct backend route
      setVideos(res.data);
    } catch (err) {
      console.error('Failed to fetch videos:', err);
    }
  };

  fetchVideos();
}, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/admin/media/videos/${id}`);
    setVideos(videos.filter((v) => v._id !== id));
  } catch (err) {
    console.error('Delete failed:', err);
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();
  if (selectedFile) {
    try {
      const formData = new FormData();
      formData.append('video', selectedFile); // This must match the multer field name!

      const res = await axios.post(
        'http://localhost:5000/api/admin/media/videos',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Add the new video to your state
      setVideos([...videos, res.data]);
      setSelectedFile(null);
      fileInputRef.current.value = '';

    } catch (err) {
      console.error('Upload failed:', err);
    }
  }
};


  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-60 bg-[#1B264F] text-white flex flex-col items-center py-4 space-y-6 font-[poppins]">
        <div className="flex flex-col items-center mt-20 space-y-1">
          <FaUserCircle className="text-5xl text-black bg-white rounded-full p-1" />
          <span className="text-lg text-[#FFDF35]">abc@gmail.com</span>
        </div>

        <div className="w-full px-4 space-y-4 mt-4 text-sm">
          <div onClick={() => router.push("/dashboard")} className="flex items-center space-x-2 bg-gray-200 text-black px-2 py-1 rounded cursor-pointer">
            <FaTachometerAlt />
            <span>Dashboard</span>
          </div>
          <div onClick={() => router.push("/gallery")} className="flex items-center space-x-2 cursor-pointer">
            <FaImages />
            <span>Gallery</span>
          </div>
          <div onClick={() => router.push("/video-gallery")} className="flex items-center space-x-2 cursor-pointer">
            <FaVideo />
            <span>Video Gallery</span>
          </div>
          <div onClick={() => router.push("/notice-board")} className="flex items-center space-x-2 cursor-pointer">
            <FaClipboard />
            <span>Notice Board</span>
          </div>
          <div onClick={() => router.push("/blogs")} className="flex items-center space-x-2 cursor-pointer">
            <FaBlog />
            <span>Blogs</span>
          </div>
          <div onClick={() => router.push("/topper-list")} className="flex items-center space-x-2 cursor-pointer">
            <FaMedal />
            <span>Topper List</span>
          </div>
          <div onClick={() => router.push("/logout")} className="flex items-center space-x-2 cursor-pointer">
            <FaSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-blue-50 p-6 relative">
        <div className="absolute top-4 right-6 text-sm text-gray-800 flex items-center gap-2">
          abc@gmail.com <span className="text-xl">👤</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Video Gallery</h2>

        {/* Upload Section */}
<form onSubmit={handleSubmit} className="mb-6">
  {/* Label */}
  <label className="text-[#1B264F] font-extrabold text-[16px] block mb-2 text-lg">
    Add New Video
  </label>

  {/* File input + Submit in one row */}
  <div className="flex items-center gap-4 flex-wrap">
    {/* Upload Box */}
    <div className="flex items-center border border-gray-400 bg-[#E5E5E5] rounded px-2 py-1">
      <label className="bg-white text-black text-sm px-4 py-2 cursor-pointer rounded">
        Choose File
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <div className="px-3 text-sm text-black">
        {selectedFile ? selectedFile.name : "No File chosen"}
      </div>

      {/* Trash Icon */}
      {selectedFile && (
        <button
          type="button"
          onClick={handleDeleteFile}
          title="Clear file"
          className="text-black text-lg ml-2 hover:text-red-600"
        >
          <FaTrash />
        </button>
      )}
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-[#1B264F] text-white px-6 py-2 rounded-md font-semibold text-sm hover:bg-blue-800"
    >
      SUBMIT
    </button>
  </div>
</form>


        {/* Video Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
         {videos.map((video) => (
  <div key={video._id} className="flex flex-col items-center">
    <video
      src={video.videoUrl}  // <- this must match your DB schema!
      controls
      className="w-full rounded border border-gray-300"
    />
    <button
      onClick={() => handleDelete(video._id)}
      className="text-red-600 mt-2 hover:underline"
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
