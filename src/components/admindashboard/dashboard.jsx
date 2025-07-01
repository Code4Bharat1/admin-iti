'use client';
import React from 'react';

export default function Dashboard() {
  const stats = [
    { label: 'Notices', count: 3 },
    { label: 'Photos', count: 18 },
    { label: 'Videos', count: 4 },
    { label: 'Blogs', count: 3 },
  ];

  const activities = [
    {
      user: 'admin1@.com',
      action: 'Edited Title',
      section: 'Blogs',
      dateTime: '19 June 2025, 10:45 AM',
    },
    {
      user: 'admin2@.com',
      action: 'Added new notice',
      section: 'Notice board',
      dateTime: '15 June 2025, 11:29 AM',
    },
    {
      user: 'admin3@.com',
      action: 'Deleted image',
      section: 'Gallery',
      dateTime: '12 June 2025, 08:22 PM',
    },
    {
      user: 'admin4@.com',
      action: 'Updated topper list',
      section: 'Topper list',
      dateTime: '11 June 2025, 09:15 AM',
    },
    {
      user: 'admin5@.com',
      action: 'Added video',
      section: 'Video gallery',
      dateTime: '05 June 2025, 07:55 PM',
    },
  ];

  return (
    <div className="bg-[#F4F8FC] min-h-screen p-10 font-poppins">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-[#1F2C56] mb-12">Dashboard</h1>

      {/* Stat Boxes */}
      <div className="flex flex-wrap gap-8 mb-16 justify-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFDF35] text-center px-20 py-14 rounded-2xl shadow-lg w-[260px] h-[200px] flex flex-col justify-center items-center"
          >
            <p className="text-7xl font-extrabold text-[#1F2C56]">{item.count}</p>
            <p className="text-[#1F2C56] font-semibold mt-4 text-2xl">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <h2 className="text-4xl font-extrabold text-[#1F2C56] mb-6">Recent Activity</h2>

      <div className="overflow-x-auto max-w-8xl mx-auto">
        <table className="w-full text-lg text-left rounded-xl overflow-hidden shadow-md">
          <thead className="bg-[#1F2C56] text-white text-xl">
            <tr>
              <th className="py-4 px-6 font-semibold">User</th>
              <th className="py-4 px-6 font-semibold">Action</th>
              <th className="py-4 px-6 font-semibold">Section</th>
              <th className="py-4 px-6 font-semibold">Date & Time</th>
            </tr>
          </thead>
          <tbody className="bg-[#C9D4EC] text-[#1F2C56] text-lg">
            {activities.map((activity, idx) => (
              <tr key={idx} className="border-t border-gray-300">
                <td className="py-4 px-6">{activity.user}</td>
                <td className="py-4 px-6">{activity.action}</td>
                <td className="py-4 px-6">{activity.section}</td>
                <td className="py-4 px-6">{activity.dateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
