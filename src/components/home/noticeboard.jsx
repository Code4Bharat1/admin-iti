'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function NoticeNewsSection() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/admin/notices', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setNotices(res.data);
      } catch (err) {
        console.error('Failed to fetch notices:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="flex flex-col md:flex-row border border-blue-200 rounded-md overflow-hidden">
      {/* Left Side: Notice Board */}
      <div className="bg-[#1a264f] text-[#FFD700] w-full md:w-4/5 p-6">
        <div className="flex justify-center items-center mb-4">
          <div className="notice-arrow bg-[#FFD700] text-black text-xl font-bold p-8 py-3 w-fit">
            NOTICE BOARD
          </div>
        </div>

        <style jsx>{`
          .notice-arrow {
            clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%);
          }
        `}</style>

        <div className="space-y-8 mx-10 mt-10 mb-10 text-sm md:text-2xl">
          {loading ? (
            <p>Loading notices...</p>
          ) : notices.length === 0 ? (
            <p>No notices found.</p>
          ) : (
            notices.map((notice, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-2xl">•</span>
                <span>{notice.description}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right Side: Latest News */}
      <div className="bg-white text-black w-full md:w-3/5 p-6 mb-30">
        <h3 className="text-2xl underline text-center font-medium mb-4">LATEST NEWS</h3>

        <div className="space-y-4 mt-8 text-sm md:text-2xl mx-6">
          <div className="flex gap-3">
            <span className="text-xl">•</span>
            <span>Workshop on Digital Marketing – 22nd June (Free for Students)</span>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">•</span>
            <span>New Blog Published: “Top 5 Skills Every Student Should Learn in 2025”</span>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">•</span>
            <span>Free webinar on Cyber Security – Register now</span>
          </div>
        </div>
      </div>
    </div>
  );
}
