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
    if (token) {
      axios
        .get('http://localhost:5000/api/admin/blogs', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setBlogs(res.data))
        .catch((err) => console.error('Fetch failed:', err));
    }
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
      if (isEditing) {
        await axios.put(
          `http://localhost:5000/api/admin/blogs/${editBlogId}`,
          { title, content, date, image: selectedFile },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        alert('Blog updated!');
      } else {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('date', date);
        if (selectedFile) formData.append('image', selectedFile);

        await axios.post('http://localhost:5000/api/admin/blogs', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });
        alert('Blog created!');
      }

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
      console.error(err);
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
      {/* Top Right Email */}
      <div className="absolute top-4 right-6 flex items-center space-x-2 text-black">
        <span>abc@gmail.com</span>
        <FaUserCircle className="text-2xl" />
      </div>

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
        <h3 className="text-2xl font-bold mb-6 text-[#1B264F]">Latest Blogs</h3>
        <div className="bg-[#1B264F] text-white px-6 py-10 rounded-2xl space-y-12 max-w-4xl">
          {blogs.map((blog) => (
            <div key={blog._id} className="flex gap-6 items-start">
              <div className="w-60 h-36 relative flex-shrink-0">
                <Image src={blog.image} alt="Blog" fill className="object-cover rounded-md" />
              </div>
              <div className="flex-1">
                <div className="text-sm space-x-3 mb-1">
                  <button className="text-blue-400 hover:underline" onClick={() => handleEdit(blog)}>
                    Edit
                  </button>
                  <button className="text-red-400 hover:underline" onClick={() => handleDelete(blog._id)}>
                    Delete
                  </button>
                </div>
                <h4 className="text-yellow-400 font-semibold text-lg leading-snug">{blog.title}</h4>
                <p className="text-xs bg-white text-black px-2 py-0.5 inline-block rounded mt-1">
                  {blog.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal with Blur */}
      {showModal && (
        <div className="fixed inset-0 z-50 backdrop-blur-md bg-black/10 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4 text-[#1B264F]">Edit Blog</h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-3 border border-gray-300 rounded px-3 py-2 text-black"
                placeholder="Title"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full mb-3 border border-gray-300 rounded px-3 py-2 text-black"
              />
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full mb-4 border border-gray-300 rounded px-3 py-2 text-black"
                placeholder="Content"
                rows={4}
              ></textarea>
              <div className="text-right">
                <button type="submit" className="bg-[#1B264F] text-white px-5 py-2 rounded hover:bg-[#14203c]">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
