

import HomeAboutUs from '@/component/home/aboutus'
import BlogSection from '@/component/home/blog'
import TopRecruitersSwap from '@/component/home/company'
import Faculty from '@/component/home/faculty'
import FAQPage from '@/component/home/faq'
import Hero from '@/component/home/hero'
import NoticeNewsSection from '@/component/home/noticeboard'
import CoursesSection from '@/component/home/ourcourses'
import OurManagement from '@/component/home/ourmanagement'
import Register from '@/component/home/register'
import Testimonials from '@/component/home/testimonials'
import VideoGallery from '@/component/home/videogallery'
import WelcomeSection from '@/component/home/welcome'
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
