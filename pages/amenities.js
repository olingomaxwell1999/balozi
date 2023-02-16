import Amenitiesfirst from '@/components/Amenitiesfirst'
import Amenitiessecond from '@/components/Amenitiessecond'
import Amenitiesslider from '@/components/Amenitiesslider'
import BannerAmenities from '@/components/BannerAmenities'
import Cityamenities from '@/components/Cityamenities'
import Coveramenities from '@/components/Coveramenities'
import React from 'react'

function amenities() {
  return (
    <div>
      <BannerAmenities/>
      <Amenitiesfirst/>
      <Coveramenities/>
      <Amenitiessecond/>
      <Amenitiesslider/>
      <Cityamenities/>
    </div>
  )
}

export default amenities