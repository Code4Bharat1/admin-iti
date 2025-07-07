import TopRecruitersSwap from '@/componentss/home/company'
import PlacementSection from '@/componentss/placement/hero'
import PlacementStats from '@/componentss/placement/placement'
import PlacementLast from '@/componentss/placement/placementlast'
import PlacementProcess from '@/componentss/placement/placementprocess'
import React from 'react'

export default function page() {
  return (
    <div>
      <PlacementSection/>
      <PlacementStats/>
      <TopRecruitersSwap/>
      <PlacementProcess/>
      <PlacementLast/>
    </div>
  )
}
