"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function TopperList() {
  const [students, setStudents] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState(null);
  const [formData, setFormData] = useState({
    studentName: "",
    trade: "",
    percentage: "",
  });

  const router = useRouter();

  useEffect(() => {
    const fetchToppers = async () => {
      try {
        const adminToken = localStorage.getItem("adminToken");
        const res = await axios.get(
          "http://localhost:5000/api/admin/toppers/getTopper",
          {
            headers: {
              Authorization: `Bearer ${adminToken}`,
            },
          }
        );
        setStudents(res.data);
      } catch (err) {
        console.error("Error fetching toppers:", err);
      }
    };
    fetchToppers();
  }, []);

  const openAddModal = () => {
    setFormData({ studentName: "", trade: "", percentage: "" });
    setIsEditing(false);
    setShowModal(true);
  };

  const openEditModal = (student) => {
    setFormData({
      studentName: student.studentName,
      trade: student.trade,
      percentage: student.percentage,
    });
    setCurrentStudentId(student._id);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleModalSubmit = async () => {
    const adminToken = localStorage.getItem("adminToken");

    if (!formData.studentName || !formData.trade || !formData.percentage) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      if (isEditing) {
        const res = await axios.put(
          `http://localhost:5000/api/admin/toppers/updateTopper/${currentStudentId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${adminToken}`,
            },
          }
        );
        setStudents((prev) =>
          prev.map((s) => (s._id === currentStudentId ? res.data : s))
        );
      } else {
        const res = await axios.post(
          "http://localhost:5000/api/admin/toppers/addTopper",
          formData,
          {
            headers: {
              Authorization: `Bearer ${adminToken}`,
            },
          }
        );
        setStudents((prev) => [...prev, res.data]);
      }

      setShowModal(false);
      setFormData({ studentName: "", trade: "", percentage: "" });
    } catch (err) {
      console.error("Error submitting data:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const adminToken = localStorage.getItem("adminToken");
      await axios.delete(
        `http://localhost:5000/api/admin/toppers/deleteTopper/${id}`,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );
      setStudents((prev) => prev.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f8ff] p-6 font-[poppins] relative">
      {/* Top Right Email */}
      <div className="absolute top-4 right-6 text-sm text-gray-800 flex items-center gap-2">
        abc@gmail.com <span className="text-xl">👤</span>
      </div>

      <h2 className="text-4xl font-extrabold text-[#1F2A44] mb-6">
        Edit Topper List
      </h2>

      {/* Year Selector + Add Column */}
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
          onClick={openAddModal}
          className="bg-[#1B264F] text-white px-5 py-2 rounded text-base font-medium"
        >
          Add New Topper
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
                    onClick={() => openEditModal(student)}
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

      {/* Modal */}
    {showModal && (
  <div className="fixed inset-0 z-50 backdrop-blur-[4px] flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4 text-black">
        {isEditing ? "Edit Topper" : "Add New Topper"}
      </h3>

      <div className="space-y-4 text-black">
        <div>
          <label className="block mb-1">Name of Student</label>
          <input
            type="text"
            value={formData.studentName}
            onChange={(e) =>
              setFormData({ ...formData, studentName: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Name of Trade</label>
          <input
            type="text"
            value={formData.trade}
            onChange={(e) =>
              setFormData({ ...formData, trade: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block mb-1">Percentage</label>
          <input
            type="text"
            value={formData.percentage}
            onChange={(e) =>
              setFormData({ ...formData, percentage: e.target.value })
            }
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6 space-x-4">
        <button
          onClick={() => setShowModal(false)}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-black"
        >
          Cancel
        </button>
        <button
          onClick={handleModalSubmit}
          className="px-4 py-2 bg-[#1B264F] text-white rounded hover:bg-[#16203d]"
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
}
