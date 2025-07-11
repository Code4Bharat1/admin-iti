"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NoticeBoard() {
  const router = useRouter();
  const [token, setToken] = useState(null);

  const [notice, setNotice] = useState("Enter your notice here");
  const [activities, setActivities] = useState([]);
  const [editingActivity, setEditingActivity] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("token");
      if (!storedToken) {
        router.push("/login");
      } else {
        setToken(storedToken);
      }
    }
  }, []);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await axios.get("https://iti-api.nexcorealliance.com/api/admin/notices", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setActivities(res.data);
      } catch (err) {
        console.error("Error fetching notices:", err.message);
      }
    };

    if (token) {
      fetchNotices();
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!notice.trim()) return;

    try {
      const res = await axios.post(
        "https://iti-api.nexcorealliance.com/api/admin/notices",
        {
          description: notice,
          date: new Date().toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setActivities((prev) => [res.data, ...prev]);
      setNotice("");
    } catch (err) {
      console.error("Failed to add notice:", err.message);
    }
  };

  const handleEdit = (id) => {
    const activityToEdit = activities.find((a) => a._id === id);
    if (activityToEdit) {
      setEditingActivity({ ...activityToEdit });
    }
  };

  const handleSaveEdit = async () => {
    try {
      const res = await axios.put(
        `https://iti-api.nexcorealliance.com/api/admin/notices/${editingActivity._id}`,
        {
          description: editingActivity.description,
          date: new Date(editingActivity.date).toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setActivities((prev) =>
        prev.map((item) =>
          item._id === editingActivity._id ? res.data : item
        )
      );
      setEditingActivity(null);
    } catch (err) {
      console.error("Failed to update notice:", err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://iti-api.nexcorealliance.com/api/admin/notices/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setActivities((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Failed to delete notice:", err.message);
    }
  };

  return (
    <div className="flex min-h-screen font-[poppins]">
      <div className="flex-1 bg-[#EDF4FF] p-10 relative">
        <h1 className="text-3xl font-bold text-[#1F2A44] mb-6">Notice board</h1>

        {/* Add New Notice */}
        <div className="p-6 rounded-lg max-w-5xl mb-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block font-bold text-lg text-[#1F2C56]">
              Add New Notice
            </label>
            <textarea
              value={notice}
              onChange={(e) => setNotice(e.target.value)}
              rows={4}
              className="w-full p-4 rounded-md shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1F2C56] resize-none bg-white text-black"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#1B264F] text-white px-6 py-2 rounded-md hover:bg-[#162143] transition"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Recent Activity Table */}
        <h2 className="text-xl font-semibold text-[#1F2A44] mb-4">
          Recent Activity
        </h2>
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
                <tr key={activity._id} className="border-t border-gray-300">
                  <td className="px-6 py-4">{activity.user}</td>
                  <td className="px-6 py-4">{activity.description}</td>
                  <td className="px-6 py-4">{activity.date}</td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={() => handleEdit(activity._id)}
                      className="text-green-600 font-medium hover:underline"
                    >
                      Edit
                    </button>
                    |
                    <button
                      onClick={() => handleDelete(activity._id)}
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

        {/* Edit Modal */}
        {editingActivity && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 backdrop-blur-sm">
            <div className="bg-white rounded-lg p-6 w-full max-w-xl">
              <h2 className="text-2xl font-bold text-[#1F2C56] mb-6">Edit Notice</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">User</label>
                  <input
                    type="text"
                    value={editingActivity.user}
                    onChange={(e) => setEditingActivity({ ...editingActivity, user: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F2C56] text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">Description</label>
                  <input
                    type="text"
                    value={editingActivity.description}
                    onChange={(e) => setEditingActivity({ ...editingActivity, description: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F2C56] text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">Date</label>
                  <input
                    type="text"
                    value={editingActivity.date}
                    onChange={(e) => setEditingActivity({ ...editingActivity, date: e.target.value })}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F2C56] text-black"
                  />
                </div>
              </div>

              <div className="flex justify-end mt-6 space-x-4">
                <button
                  onClick={() => setEditingActivity(null)}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="bg-[#1B264F] text-white px-4 py-2 rounded hover:bg-[#162143]"
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