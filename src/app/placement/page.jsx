import TopRecruitersSwap from '@/componets/home/company'
import PlacementSection from '@/componets/placement/hero'
import PlacementStats from '@/componets/placement/placement'
import PlacementLast from '@/componets/placement/placementlast'
import PlacementProcess from '@/componets/placement/placementprocess'
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
