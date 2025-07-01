import Eventgallery from '@/componets/student_corner/gallery'
import StudentCorner from '@/componets/student_corner/hero'
import ScholarshipPage from '@/componets/student_corner/scholarship'
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
