'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  FaUserCircle,
  FaTrashAlt,
  FaTimes,
} from 'react-icons/fa';
import axios from 'axios';

export default function BlogPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editBlogId, setEditBlogId] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setToken(token);
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/admin/blogs', {
          headers: {
            Authorization: `Bearer ${token}`
          }
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
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      alert('Blog deleted successfully');
    } catch (error) {
      console.error('Failed to delete blog:', error);
      alert('Failed to delete blog');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      content,
      date,
      image: selectedFile, // If using multipart form, you can conditionally change this
    };

    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/admin/blogs/${editBlogId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert('Blog updated successfully!');
      } else {
        const newFormData = new FormData();
        newFormData.append('title', title);
        newFormData.append('content', content);
        newFormData.append('date', date);
        if (selectedFile) newFormData.append('image', selectedFile);

        await axios.post('http://localhost:5000/api/admin/blogs', newFormData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });

        alert('Blog created successfully!');
      }

      setTitle('');
      setContent('');
      setDate('');
      setSelectedFile(null);
      setIsEditing(false);
      setEditBlogId(null);

      // Refresh blog list
      const response = await axios.get('http://localhost:5000/api/admin/blogs',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setBlogs(response.data);
    } catch (err) {
      console.error(err);
      alert('Failed to save blog');
    }
  };

  const handleEdit = (blog) => {
    setTitle(blog.title);
    setContent(blog.content);
    setDate(new Date(blog.date).toISOString().split('T')[0]); // format to YYYY-MM-DD
    setEditBlogId(blog._id);
    setIsEditing(true);
  };

  return (
    <div className="relative font-[poppins] min-h-screen">
      {/* Blur Background when modal is open */}
      {editBlog && (
        <div className="fixed inset-0 backdrop-blur-md backdrop-brightness-75 z-40 flex justify-center items-center">
          {/* Modal */}
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-xl relative z-50 shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
              onClick={() => setEditBlog(null)}
              title="Close"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-xl font-bold text-[#1B264F] mb-4">Edit Blog</h2>
            <label className="block font-semibold text-[#1B264F] mb-1">Title :</label>
            <input
              type="text"
              defaultValue={editBlog.title}
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 mb-4 text-black placeholder-black"
            />

            <label className="block font-semibold text-[#1B264F] mb-1">Date :</label>
            <input
              type="text"
              defaultValue={editBlog.date}
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 mb-4 text-black placeholder-black"
            />

            <label className="block font-semibold text-[#1B264F] mb-1">Content :</label>
            <textarea
              placeholder="Edit blog content here"
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 h-32 text-black placeholder-black"
            ></textarea>

            <div className="text-right mt-4">
              <button className="bg-[#1B264F] text-white px-5 py-2 rounded hover:bg-[#14203c]">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Page Content */}
      <div className="flex">
        <div className="flex-1 bg-[#f0f8ff] px-6 py-6 relative">
          {/* Email Top Right */}
          <div className="absolute top-4 right-6 flex items-center space-x-2 text-black">
            <span>abc@gmail.com</span>
            <FaUserCircle className="text-2xl" />
          </div>

          {/* Add New Blog */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-[#1B264F] mb-6">Add New Blog</h2>

          <label className="block font-semibold text-[#1B264F] mb-1">Title :</label>
          <input
            type="text"
            placeholder="Enter Blog Title"
            className="w-full bg-white border border-gray-300 rounded px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex flex-wrap gap-6 items-center mb-6">
            <div className="flex-1">
              <label className="block font-semibold text-[#1B264F] mb-1">Date :</label>
              <input
                type="date"
                className="w-full bg-white border border-gray-300 rounded px-4 py-2 shadow focus:outline-none"
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
            className="w-full bg-white border border-gray-300 rounded px-4 py-2 h-48 mb-6 shadow focus:outline-none"
          ></textarea>

          <div className="text-center mb-10">
            <button className="bg-[#1B264F] text-white px-6 py-2 rounded shadow hover:bg-[#14203c]">SUBMIT</button>
          </div>

          {/* Latest Blogs */}
          <h3 className="text-center text-2xl font-bold mb-6 text-[#1B264F]">Latest Blogs</h3>
          <div className="bg-[#1B264F] text-white px-16 py-14 rounded-2xl space-y-12 max-w-[2000px] mx-auto w-full">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex gap-6 items-start">
                <div className="w-60 h-36 relative flex-shrink-0">
                  <Image src={blog.image} alt="Blog Image" fill className="object-cover rounded-md" />
                </div>
                <div className="flex-1">
                  <div className="text-sm space-x-3 mb-1">
                    <button className="text-blue-400 hover:underline">Edit</button>
                    <button className="text-red-400 hover:underline">Delete</button>
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
    </div>
  );
}
