
import AdminSidebar from '@/components/adminsidebar/sidebar'
import TopperListWithSidebar from '@/components/admintopper/topper'
import React from 'react'

export default function page() {
  return (
    <div className="flex">
      {/* Sidebar - 1/4 width */}
      <div className="w-1/6 bg-[#1B264F] text-white">
        <AdminSidebar />
      </div>

      {/* Main content - 3/4 width */}
      <div className="w-5/6 ">
        <TopperListWithSidebar />
      </div>
    </div>
  )
}