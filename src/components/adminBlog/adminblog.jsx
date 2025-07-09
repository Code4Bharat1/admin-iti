'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaUserCircle, FaTrashAlt, FaTimes } from 'react-icons/fa';
import axios from 'axios';

export default function BlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editBlogId, setEditBlogId] = useState(null);
  const [token, setToken] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  useEffect(() => {
    if (!token) return; // wait until token is available

    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/blogs', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(response.data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };

    fetchBlogs();
  }, [token]);


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
      alert('Blog deleted successfully');
    } catch (err) {
      alert('Failed to delete blog');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      formData.append('date', date);
      if (selectedFile) formData.append('image', selectedFile);

      if (isEditing) {
        await axios.put(
          `http://localhost:5000/api/admin/blogs/${editBlogId}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        alert('Blog updated!');
      } else {
        await axios.post('http://localhost:5000/api/admin/blogs', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });
        alert('Blog created!');
      }

      // Reset form
      setTitle('');
      setContent('');
      setDate('');
      setSelectedFile(null);
      setIsEditing(false);
      setEditBlogId(null);
      setShowModal(false);

      const res = await axios.get('http://localhost:5000/api/admin/blogs', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(res.data);
    } catch (err) {
      console.error('Submit Error:', err.response?.data || err.message || err);
      alert('Failed to save blog');
    }
  };

  const handleEdit = (blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setDate(new Date(blog.date).toISOString().split('T')[0]);
    setEditBlogId(blog._id);
    setIsEditing(true);
    setShowModal(true);
  };

  return (
    <div className="bg-[#f0f8ff] px-6 py-6 min-h-screen font-[poppins] relative">

      {/* Add New Blog */}
      <div className="w-full max-w-3xl ml-6">
        <h2 className="text-2xl font-bold text-[#1B264F] mb-6">Add New Blog</h2>

        <form onSubmit={handleSubmit}>
          <label className="block font-semibold text-[#1B264F] mb-1">Title :</label>
          <input
            type="text"
            placeholder="Enter Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-black"
          />

          <div className="flex flex-wrap gap-6 items-center mb-6">
            <div className="flex-1">
              <label className="block font-semibold text-[#1B264F] mb-1">Date :</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded px-4 py-2 shadow focus:outline-none text-black"
              />
            </div>

            <div className="flex-1">
              <label className="block font-semibold text-[#1B264F] mb-1">Add Image :</label>
              <div className="flex items-center space-x-2">
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded px-3 py-1.5 shadow bg-white text-black"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                />
                {selectedFile && (
                  <FaTrashAlt
                    className="text-black cursor-pointer"
                    onClick={() => setSelectedFile(null)}
                    title="Remove file"
                  />
                )}
              </div>
            </div>
          </div>

          <label className="block font-semibold text-[#1B264F] mb-1">Content :</label>
          <textarea
            placeholder="Write your blog content here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded px-4 py-2 h-48 mb-6 shadow focus:outline-none text-black placeholder-black"
          ></textarea>

          <div className="text-center mb-10">
            <button
              type="submit"
              className="bg-[#1B264F] text-white px-6 py-2 rounded shadow hover:bg-[#14203c]"
            >
              {isEditing ? 'UPDATE BLOG' : 'SUBMIT'}
            </button>
          </div>
        </form>

        {/* Latest Blogs */}
        <h3 className="text-center text-2xl font-bold mb-6 text-[#1B264F]">Latest Blogs</h3>
        <div className="bg-[#1B264F] text-white px-16 py-14 rounded-2xl space-y-12 max-w-[2000px] mx-auto w-full">
          {blogs.map((blog) => (
            <div key={blog._id} className="flex gap-6 items-start">
              <div className="w-60 h-36 relative flex-shrink-0">
                {blog.image ? (
                  <Image src={`http://localhost:5000${blog.image}`} alt="Blog Image" fill className="object-cover rounded-md" />
                ) : (
                  <div className="w-60 h-36 bg-gray-300 flex items-center justify-center rounded-md text-gray-600 text-sm">
                    No Image
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="text-sm space-x-3 mb-1">
                  <button
                    className="text-blue-400 hover:underline"
                    onClick={() => handleEdit(blog)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-400 hover:underline"
                    onClick={() => handleDelete(blog._id)}
                  >
                    Delete
                  </button>
                </div>
                <h4 className="text-yellow-400 font-semibold text-lg leading-snug">
                  {blog.title}
                </h4>
                <p className="text-xs bg-white text-black px-2 py-0.5 inline-block rounded mt-1">
                  {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
