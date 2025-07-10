

import HomeAboutUs from '@/components/home/aboutus'
//import BlogSection from '@/components/home/blog'
import TopRecruitersSwap from '//@/components/home/company'
import Faculty from '@/components/home/faculty'
import FAQPage from '@/components/home/faq'
import Hero from '@/components/home/hero'
import NoticeNewsSection from '@/components/home/noticeboard'
import CoursesSection from '@/components/home/ourcourses'
import OurManagement from '@/components/home/ourmanagement'
import Register from '@/components/home/register'
import Testimonials from '@/components/home/testimonials'
import VideoGallery from '@/components/home/videogallery'
import WelcomeSection from '@/components/home/welcome'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero/>
      <WelcomeSection/>
      <HomeAboutUs/>
      <NoticeNewsSection/>
      <CoursesSection/>
    <Register/>
      <FAQPage/>
      <OurManagement/>
      <Faculty/>
      <BlogSection/>
      <TopRecruitersSwap/>
      <VideoGallery/>
      <Testimonials/>
      
    </div>
  )
}
