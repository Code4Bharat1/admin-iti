"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios'
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
  const [students, setStudents] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date());
  const router = useRouter();

  // ✅ Fetch students on mount
useEffect(() => {
  const fetchToppers = async () => {
    try {
      const adminToken = localStorage.getItem("adminToken"); // or wherever you store your admin token

      const res = await axios.get(
        "http://localhost:5000/api/admin/toppers/getTopper",
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      setStudents(res.data); // adjust if your API wraps data differently
    } catch (err) {
      console.error("Error fetching toppers:", err);
    }
  };

  fetchToppers();
}, []);


  // ✅ Add new student to backend
const handleAddStudent = async () => {
  const newStudent = {
    studentName: "New Student",
    trade: "New Trade",
    percentage: "0",
  };

  try {
    const adminToken = localStorage.getItem("adminToken"); // check casing!
    const res = await axios.post(
      "http://localhost:5000/api/admin/toppers/addTopper",
      newStudent,
      {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      }
    );

    // If your backend returns the whole updated list:
    // setStudents(res.data);

    // Or just add it locally:
    setStudents((prev) => [...prev, res.data]);

    console.log("Student added successfully!");
  } catch (err) {
    console.error("Error adding student:", err);
  }
};


  // ✅ Delete student from backend
const handleDelete = async (id) => {
  try {
    const adminToken = localStorage.getItem("adminToken");

    const res = await axios.delete(
      `http://localhost:5000/api/admin/toppers/deleteTopper/${id}`,
      {
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      }
    );

    // If your backend returns the updated list:
    // setStudents(res.data);

    // OR remove the deleted student locally:
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student._id !== id)
    );

    console.log("Student deleted successfully!");
  } catch (err) {
    console.error("Error deleting student:", err);
  }
};


  // ✅ Update student in backend
  const handleEdit = async (id) => {
    const updatedName = prompt("Enter new name:");
    const updatedTrade = prompt("Enter new trade:");
    const updatedPercentage = prompt("Enter new percentage:");

    if (!updatedName || !updatedTrade || !updatedPercentage) return;

    const updatedStudent = {
      studentName: updatedName,
      trade: updatedTrade,
      percentage: updatedPercentage,
    };

    try {const adminToken=localStorage.getItem("adminToken")
      const res = await axios.put(`http://localhost:5000/api/admin/toppers/updateTopper/${id}`, updatedStudent,
        {
          headers: {
            Authorization:`Bearer ${adminToken}`
          }
        }
      );
      setStudents((prev) =>
        prev.map((s) => (s._id === id ? res.data : s))
      );
    } catch (err) {
      console.error("Error updating student:", err);
    }
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
            <span>Notice board</span>
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
      <div className="flex-1 bg-[#f3f8ff] p-6 relative">
        {/* Top Right Email */}
        <div className="absolute top-4 right-6 text-sm text-gray-800 flex items-center gap-2">
          abc@gmail.com <span className="text-xl">👤</span>
        </div>

        <h2 className="text-4xl font-extrabold text-[#1F2A44] mb-6">Edit Topper List</h2>

        {/* Year Selector + Add Column */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
          {/* Year Picker inside white box */}
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

        {/* Table Container */}
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
                <tr key={student._id} className="border-b border-gray-200">
                  <td className="px-6 py-4">{student.studentName}</td>
                  <td className="px-6 py-4">{student.trade}</td>
                  <td className="px-6 py-4">{student.percentage}</td>
                  <td className="px-6 py-4 space-x-4">
                    <button
                      onClick={() => handleEdit(student._id)}
                      className="text-green-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(student._id)}
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
      </div>
    </div>
  );
}
