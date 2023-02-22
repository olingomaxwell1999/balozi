import Amenitiesfirst from '@/components/Amenitiesfirst'
import Amenitiessecond from '@/components/Amenitiessecond'
import Amenitiesslider from '@/components/Amenitiesslider'
import BannerAmenities from '@/components/BannerAmenities'
import Cityamenities from '@/components/Cityamenities'
import Coveramenities from '@/components/Coveramenities'
import Head from 'next/head'
import React from 'react'

function amenities() {
  return (
    <div>
      <Head>
        <title>Amenities | Balozi Suites</title>
        <meta name="description" content="Come to The Reveal and we shall offer you the best housing you need while in Nairobi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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