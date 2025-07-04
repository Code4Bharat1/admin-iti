import Eventgallery from '@/components/student_corner/gallery'
import StudentCorner from '@/components/student_corner/hero'
import ScholarshipPage from '@/components/student_corner/scholarship'
import React from 'react'

export default function page() {
  return (
    <div>
      <StudentCorner/>
      <ScholarshipPage/>
      <Eventgallery/>
    </div>
  )
}
