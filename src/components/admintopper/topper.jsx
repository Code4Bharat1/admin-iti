"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function TopperList() {
  const [students, setStudents] = useState([]);
  const [selectedYear, setSelectedYear] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({
    studentName: "",
    trade: "",
    percentage: "",
  });

  const router = useRouter();

  useEffect(() => {
    const fetchToppers = async () => {
      try {
        const adminToken = localStorage.getItem("token");
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
    setEditingStudent(student);
    setFormData({
      studentName: student.studentName,
      trade: student.trade,
      percentage: student.percentage,
    });
    setIsEditing(true);
    setShowModal(true);
  };

  const handleAddStudent = async () => {
    try {
      const adminToken = localStorage.getItem("adminToken");
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
      console.log("Student added successfully!");
      setShowModal(false);
    } catch (err) {
      console.error("Error adding student:", err);
    }
  };

  const handleEditSave = async () => {
    try {
      const adminToken = localStorage.getItem("adminToken");
      const res = await axios.put(
        `http://localhost:5000/api/admin/toppers/updateTopper/${editingStudent._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          },
        }
      );

      setStudents((prev) =>
        prev.map((s) => (s._id === editingStudent._id ? res.data : s))
      );
      console.log("Student updated successfully!");
      setShowModal(false);
    } catch (err) {
      console.error("Error updating student:", err);
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

      setStudents((prev) =>
        prev.filter((student) => student._id !== id)
      );

      console.log("Student deleted successfully!");
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  return (
    <div className="bg-[#f3f8ff] p-6 min-h-screen font-[poppins] relative">
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
            className="outline-none cursor-pointer w-full text-black"
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

      {/* Table */}
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

      {/* Modal (Add or Edit) */}
      {showModal && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg space-y-4 text-black">
            <h3 className="text-xl font-semibold">
              {isEditing ? "Edit Topper" : "Add New Topper"}
            </h3>

            <input
              type="text"
              placeholder="Student Name"
              value={formData.studentName}
              onChange={(e) =>
                setFormData({ ...formData, studentName: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-3 py-2 text-black"
            />
            <input
              type="text"
              placeholder="Trade"
              value={formData.trade}
              onChange={(e) =>
                setFormData({ ...formData, trade: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-3 py-2 text-black"
            />
            <input
              type="number"
              placeholder="Percentage"
              value={formData.percentage}
              onChange={(e) =>
                setFormData({ ...formData, percentage: e.target.value })
              }
              className="w-full border border-gray-300 rounded px-3 py-2 text-black"
            />

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={isEditing ? handleEditSave : handleAddStudent}
                className="bg-[#1B264F] text-white px-4 py-2 rounded hover:bg-[#162040]"
              >
                {isEditing ? "Save" : "Add"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
