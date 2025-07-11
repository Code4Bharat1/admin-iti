"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';

export default function Dashboard() {
  const [activities, setActivities] = useState([]);
  const [stats, setStats] = useState([]);
  const speedFactor = 12;
  const minDuration = 2;

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        // Fetch counts
        const [blogsRes, imagesRes, noticesRes] = await Promise.all([
          axios.get('https://iti-api.nexcorealliance.com/api/admin/blogs', config),
          axios.get('https://iti-api.nexcorealliance.com/api/admin/media/images', config),
          axios.get('https://iti-api.nexcorealliance.com/api/admin/media/videos', config),
          axios.get('https://iti-api.nexcorealliance.com/api/admin/notices', config),
        ]);

        const newStats = [
          { label: 'Notices', count: noticesRes.data.length },
          { label: 'Photos', count: imagesRes.data.length },
          { label: 'Videos', count: imagesRes.data.length },
          { label: 'Blogs', count: blogsRes.data.length },
        ];
        setStats(newStats);

        // Fetch recent activities
        const activitiesRes = await axios.get('https://iti-api.nexcorealliance.com/api/admin/activities', config);

        // Format date before setting state (optional enhancement)
        const formattedActivities = activitiesRes.data.map((activity) => ({
          ...activity,
          dateTime: new Date(activity.dateTime).toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          }),
        }));

        setActivities(formattedActivities);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);


  return (
    <div className="flex min-h-screen font-poppins">
      {/* Dashboard Content */}
      <div className="bg-[#F4F8FC] flex-1 p-10">
        <h1 className="text-4xl font-extrabold text-[#1F2C56] mb-12">Dashboard</h1>

        <div className="flex flex-wrap gap-8 mb-16 justify-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFDF35] text-center px-20 py-14 rounded-2xl shadow-lg w-[260px] h-[200px] flex flex-col justify-center items-center"
            >
              <p className="text-7xl font-extrabold text-[#1F2C56]">
                <CountUp
                  end={item.count}
                  start={0}
                  duration={Math.max(minDuration, item.count / speedFactor)}
                />
              </p>
              <p className="text-[#1F2C56] font-semibold mt-4 text-2xl">{item.label}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-extrabold text-[#1F2C56] mb-6">Recent Activity</h2>

        <div className="overflow-x-auto max-w-8xl mx-auto">
          <table className="w-full text-base text-left rounded-xl overflow-hidden shadow-md">
            <thead className="bg-[#1F2C56] text-white text-lg">
              <tr>
                <th className="py-2 px-4 font-semibold border-r border-white">User</th>
                <th className="py-2 px-4 font-semibold border-r border-white">Action</th>
                <th className="py-2 px-4 font-semibold border-r border-white">Section</th>
                <th className="py-2 px-4 font-semibold">Date & Time</th>
              </tr>
            </thead>
            <tbody className="bg-[#C9D4EC] text-[#1F2C56] text-base">
              {activities.map((activity, idx) => (
                <tr key={idx} className="border-t border-gray-300">
                  <td className="py-2 px-4 border-r border-gray-400">{activity.user}</td>
                  <td className="py-2 px-4 border-r border-gray-400">{activity.action}</td>
                  <td className="py-2 px-4 border-r border-gray-400">{activity.section}</td>
                  <td className="py-2 px-4">{activity.dateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
