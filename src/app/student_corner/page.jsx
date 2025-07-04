import Eventgallery from '@/componentss/student_corner/gallery'
import StudentCorner from '@/componentss/student_corner/hero'
import ScholarshipPage from '@/componentss/student_corner/scholarship'
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
