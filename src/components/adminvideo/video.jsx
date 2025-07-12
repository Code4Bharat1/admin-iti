"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaTrash, FaSignOutAlt } from "react-icons/fa";

export default function VideoGallery() {
  const router = useRouter();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [videos, setVideos] = useState([]);
  const [token, setToken] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false); // NEW STATE

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(
          "https://iti-api.nexcorealliance.com/api/admin/media/videos",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setVideos(res.data);
      } catch (err) {
        console.error("Failed to fetch videos:", err);
      }
    };

    if (token) fetchVideos();
  }, [token]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleClearFile = () => {
    setSelectedFile(null);
    fileInputRef.current.value = "";
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://iti-api.nexcorealliance.com/api/admin/media/videos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
        const formData = new FormData();
        formData.append('video', selectedFile);

        const res = await axios.post(
          "https://iti-api.nexcorealliance.com/api/admin/media/videos",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
          }
        );

        setVideos([...videos, res.data]);
        setSelectedFile(null);
        fileInputRef.current.value = "";
      } catch (err) {
        console.error("Upload failed:", err);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 bg-blue-50 p-6 relative">

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
          Video Gallery
        </h2>

        {/* Upload Section */}
        <form onSubmit={handleSubmit} className="mb-6">
          <label className="text-[#1B264F] font-extrabold text-[16px] block mb-2 text-lg">
            Add New Video
          </label>

          <div className="flex items-center gap-4 flex-wrap">
            {/* File Picker */}
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

              {selectedFile && (
                <button
                  type="button"
                  onClick={handleClearFile}
                  title="Clear file"
                  className="text-black text-lg ml-2 hover:text-red-600"
                >
                  <FaTrash />
                </button>
              )}
            </div>

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
  <div key={video._id} className="flex flex-col items-center gap-2">
    <div className="w-full rounded overflow-hidden shadow border border-gray-300">
      <video
        src={video.videoUrl} // ✅ Ensure full path
        controls
        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-contain bg-black"
        onClick={(e) => {
          if (e.target.readyState >= 2) {
            e.target.play(); // ✅ Only play if video is loaded
          }
        }}
      />
    </div>
    <button
      onClick={() => handleDelete(video._id)}
      className="text-red-600 text-sm font-semibold hover:underline cursor-pointer"
      title="Delete video"
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
