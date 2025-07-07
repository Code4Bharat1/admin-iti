"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
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
  const [token, setToken] = useState("null");

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken[token];
  });

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const token=localStorage.getItem("token")
        const res = await axios.get(
          "http://localhost:5000/api/admin/media/videos",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ); // Make sure this is the correct backend route
        setVideos(res.data);
      } catch (err) {
        console.error("Failed to fetch videos:", err);
      }
    };

    fetchVideos();
  }, [token]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDelete = async (id) => {
    try {
      const token=localStorage.getItem("token")
      await axios.delete(`http://localhost:5000/api/admin/media/videos/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      });
      setVideos(videos.filter((v) => v._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFile) {
      try {
        const token=localStorage.getItem("token")
     const formData = new FormData();
formData.append("video", selectedFile); // 'video' must match multer field

const res = await axios.post(
  "http://localhost:5000/api/admin/media/videos",
  formData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
    withCredentials: true,
  }
);


        // Add the new video to your state
        setVideos([...videos, res.data]);
        setSelectedFile(null);
        fileInputRef.current.value = "";
      } catch (err) {
        console.error("Upload failed:", err);
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 bg-blue-50 p-6 relative">
        <div className="absolute top-4 right-6 text-sm text-gray-800 flex items-center gap-2">
          abc@gmail.com <span className="text-xl">👤</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          Video Gallery
        </h2>

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
                  onClick={handleDelete}
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
                src={video.videoUrl} // <- this must match your DB schema!
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