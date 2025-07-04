"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaUserCircle,
  FaTachometerAlt,
  FaImages,
  FaVideo,
  FaClipboard,
  FaBlog,
  FaMedal,
  FaSignOutAlt,
} from "react-icons/fa";

export default function NoticeBoard() {
  const router = useRouter();
  const [notice, setNotice] = useState("");
  const [activities, setActivities] = useState([
    {
      id: 1,
      user: "admin1@.com",
      description: 'Added a new notice: "Final Exam Timetable"',
      date: "19 June 2025",
    },
    {
      id: 2,
      user: "admin2@.com",
      description: 'Deleted the notice: "Old Timetable Notice"',
      date: "15 June 2025",
    },
    {
      id: 3,
      user: "admin3@.com",
      description: 'Updated the notice: "Library Closed on Friday”',
      date: "12 June 2025",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!notice.trim()) return;
    const newActivity = {
      id: Date.now(),
      user: "admin1@.com",
      description: `Added a new notice: "${notice}"`,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
    setActivities([newActivity, ...activities]);
    setNotice("");
  };

  const handleEdit = (id) => {
    alert("Edit notice with ID: " + id);
  };

  const handleDelete = (id) => {
    setActivities((prev) => prev.filter((activity) => activity.id !== id));
  };

  return (
    <div className="flex min-h-screen font-[poppins]">
      {/* Sidebar */}
      <div className="w-60 h-screen bg-[#1B264F] text-white flex flex-col items-center py-4 space-y-6">
        <div className="flex flex-col items-center mt-20 space-y-1">
          <FaUserCircle className="text-5xl text-black bg-white rounded-full p-1" />
          <span className="text-lg text-[#FFDF35]">abc@gmail.com</span>
        </div>

        <div className="w-full px-4 space-y-4 mt-4 text-sm">
          <div
            onClick={() => router.push("/dashboard")}
            className="flex items-center space-x-2 bg-gray-200 text-black px-2 py-1 rounded cursor-pointer"
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </div>
          <div
            onClick={() => router.push("/gallery")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <FaImages />
            <span>Gallery</span>
          </div>
          <div
            onClick={() => router.push("/video-gallery")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <FaVideo />
            <span>Video Gallery</span>
          </div>
          <div
            onClick={() => router.push("/notice-board")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <FaClipboard />
            <span>Notice board</span>
          </div>
          <div
            onClick={() => router.push("/blogs")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <FaBlog />
            <span>Blogs</span>
          </div>
          <div
            onClick={() => router.push("/topper-list")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <FaMedal />
            <span>Topper List</span>
          </div>
          <div
            onClick={() => router.push("/logout")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#EDF4FF] p-10">
        <h1 className="text-3xl font-bold text-[#1F2A44] mb-6">Notice board</h1>

       {/* Add New Notice */}
<form onSubmit={handleSubmit} className="mb-10">
  <label className="block font-medium text-lg text-gray-800 mb-2">
    Add New Notice
  </label>
  <textarea
    value={notice}
    onChange={(e) => setNotice(e.target.value)}
    placeholder="Enter your notice here"
    rows={3}
    className="w-full max-w-4xl border-b-2 border-gray-300 focus:border-blue-500 outline-none px-1 py-1 text-gray-800 placeholder-gray-500 mb-4"
  ></textarea>
  <div>
    <button
      type="submit"
      className="bg-[#1B264F] text-white px-6 py-2 rounded font-semibold tracking-wide"
    >
      SUBMIT
    </button>
  </div>
</form>


        {/* Recent Activity Table */}
        <h2 className="text-xl font-semibold text-[#1F2A44] mb-4">Recent Activity</h2>
        <div className="overflow-x-auto max-w-5xl">
          <table className="min-w-full text-sm text-left border border-gray-300">
            <thead className="bg-[#1B264F] text-white">
              <tr>
                <th className="px-6 py-3 font-medium">User</th>
                <th className="px-6 py-3 font-medium">Description</th>
                <th className="px-6 py-3 font-medium">Date</th>
                <th className="px-6 py-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="bg-[#E4ECFD] text-gray-900">
              {activities.map((activity) => (
                <tr key={activity.id} className="border-t border-gray-300">
                  <td className="px-6 py-4">{activity.user}</td>
                  <td className="px-6 py-4">{activity.description}</td>
                  <td className="px-6 py-4">{activity.date}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={() => handleEdit(activity.id)}
                      className="text-green-600 font-medium hover:underline"
                    >
                      Edit
                    </button>
                    |
                    <button
                      onClick={() => handleDelete(activity.id)}
                      className="text-red-600 font-medium hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
