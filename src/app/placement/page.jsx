import TopRecruitersSwap from '@/components/home/company'
import PlacementSection from '@/components/placement/hero'
import PlacementStats from '@/components/placement/placement'
import PlacementLast from '@/components/placement/placementlast'
import PlacementProcess from '@/components/placement/placementprocess'
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
