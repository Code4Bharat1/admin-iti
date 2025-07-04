"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  FaCalendarAlt,
  FaUserCircle,
  FaTachometerAlt,
  FaImages,
  FaVideo,
  FaClipboard,
  FaBlog,
  FaMedal,
  FaSignOutAlt,
} from "react-icons/fa";

export default function TopperListWithSidebar() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Hassan Salim Shaikh",
      trade: "Computer Operator and Programming Assistant (COPA)",
      percentage: "91.16%",
    },
    {
      id: 2,
      name: "Varad Jagdish Gurav",
      trade: "Draughtman (Civil)",
      percentage: "85.33%",
    },
    {
      id: 3,
      name: "Mufeez Moin Shaban",
      trade: "Draughtman (Mechanical)",
      percentage: "72.83%",
    },
    {
      id: 4,
      name: "Saurabh Tana ji Talape",
      trade: "Marine Fitter",
      percentage: "91.00%",
    },
    {
      id: 5,
      name: "Surve Devendra Jitendra",
      trade: "Refrigeration and Air Conditioning Technician",
      percentage: "87.16%",
    },
  ]);

  const [selectedYear, setSelectedYear] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [editingData, setEditingData] = useState({});
  const [editingId, setEditingId] = useState(null);

  const router = useRouter();

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const handleEdit = (student) => {
    setEditingData({ ...student });
    setEditingId(student.id);
    setShowModal(true);
  };

  const handleAddStudent = () => {
    setEditingData({ name: "", trade: "", percentage: "" });
    setEditingId(null);
    setShowModal(true);
  };

  const handleSaveEdit = () => {
    if (editingId !== null) {
      setStudents((prev) =>
        prev.map((s) => (s.id === editingId ? editingData : s))
      );
    } else {
      const newId =
        students.length > 0 ? students[students.length - 1].id + 1 : 1;
      setStudents((prev) => [...prev, { id: newId, ...editingData }]);
    }
    setShowModal(false);
    setEditingData({});
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setShowModal(false);
    setEditingData({});
    setEditingId(null);
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
      <div className="flex-1 bg-[#f3f8ff] p-6 relative">
        <div className="absolute top-4 right-6 text-sm text-gray-800 flex items-center gap-2">
          abc@gmail.com <span className="text-xl">👤</span>
        </div>

        <h2 className="text-4xl font-extrabold text-[#1F2A44] mb-6">
          Edit Topper List
        </h2>

        <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
          <div className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded bg-white text-base">
            <FaCalendarAlt className="text-gray-600" />
            <span className="text-gray-600">Select Year</span>
            <DatePicker
              selected={selectedYear}
              onChange={(date) => setSelectedYear(date)}
              showYearPicker
              dateFormat="yyyy"
              className="outline-none cursor-pointer w-full text-gray-800"
              placeholderText="Select Year"
            />
          </div>

          <button
            onClick={handleAddStudent}
            className="bg-[#1B264F] text-white px-5 py-2 rounded text-base font-medium"
          >
            Add New Column
          </button>
        </div>

        <div className="overflow-x-auto max-h-[600px] overflow-y-auto border border-gray-300 rounded-lg">
          <table className="min-w-full text-base">
            <thead className="sticky top-0 bg-[#1B264F] text-white text-left">
              <tr>
                <th className="px-6 py-4 font-semibold">Name of Student</th>
                <th className="px-6 py-4 font-semibold">Name of Trade</th>
                <th className="px-6 py-4 font-semibold">Percentage</th>
                <th className="px-6 py-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800">
              {students.map((student) => (
                <tr key={student.id} className="border-b border-gray-200">
                  <td className="px-6 py-4">{student.name}</td>
                  <td className="px-6 py-4">{student.trade}</td>
                  <td className="px-6 py-4">{student.percentage}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={() => handleEdit(student)}
                      className="text-green-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(student.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showModal && (
          <div className="fixed inset-0 backdrop-blur-sm bg-black/10 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-black">
              <h3 className="text-xl font-semibold mb-4 text-black">
                {editingId !== null
                  ? "Edit Student Details"
                  : "Add New Student"}
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-black mb-1">Name of Student</label>
                  <input
                    type="text"
                    value={editingData.name}
                    onChange={(e) =>
                      setEditingData({ ...editingData, name: e.target.value })
                    }
                    className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                  />
                </div>
                <div>
                  <label className="block text-black mb-1">Name of Trade</label>
                  <input
                    type="text"
                    value={editingData.trade}
                    onChange={(e) =>
                      setEditingData({ ...editingData, trade: e.target.value })
                    }
                    className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                  />
                </div>
                <div>
                  <label className="block text-black mb-1">Percentage</label>
                  <input
                    type="text"
                    value={editingData.percentage}
                    onChange={(e) =>
                      setEditingData({ ...editingData, percentage: e.target.value })
                    }
                    className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6 space-x-4">
                <button
                  onClick={handleCancelEdit}
                  className="px-4 py-2 rounded bg-gray-300 text-black hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 rounded bg-[#1B264F] text-white hover:bg-[#16203d]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
