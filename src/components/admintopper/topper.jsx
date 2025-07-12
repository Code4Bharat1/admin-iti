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
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const fetchToppers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://iti-api.nexcorealliance.com/api/admin/toppers/getTopper",
          {
            headers: {
              Authorization: `Bearer ${token}`,
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
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "https://iti-api.nexcorealliance.com/api/admin/toppers/addTopper",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Add new student at the top
      setStudents((prev) => [res.data, ...prev]);
      setShowModal(false);
    } catch (err) {
      console.error("Error adding student:", err);
    }
  };

  const handleEditSave = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `https://iti-api.nexcorealliance.com/api/admin/toppers/updateTopper/${editingStudent._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStudents((prev) =>
        prev.map((s) => (s._id === editingStudent._id ? res.data : s))
      );
      setShowModal(false);
    } catch (err) {
      console.error("Error updating student:", err);
    }
  };

  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowDeleteConfirm(true);
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://iti-api.nexcorealliance.com/api/admin/toppers/deleteTopper/${deleteId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStudents((prev) => prev.filter((student) => student._id !== deleteId));
      setShowDeleteConfirm(false);
      setDeleteId(null);
    } catch (err) {
      console.error("Error deleting student:", err);
    }
  };

  return (
    <div className="bg-[#f3f8ff] p-6 min-h-screen font-[poppins] relative">
      <h2 className="text-4xl font-extrabold text-[#1F2A44] mb-6">
        Edit Topper List
      </h2>

      {/* Year Selector + Add Button */}
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
                    onClick={() => confirmDelete(student._id)}
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

      {/* Add/Edit Modal */}
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

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full text-center shadow-xl">
            <p className="text-lg font-semibold mb-4 text-black">
              Are you sure you want to delete this topper?
            </p>
            <div className="flex justify-center gap-4 text-black">
              <button
                onClick={() => {
                  setShowDeleteConfirm(false);
                  setDeleteId(null);
                }}
                className="bg-black-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                No
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
