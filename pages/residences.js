import Onebedroomcover from '@/components/Onebedroomcover'
import Onebedroomfirst from '@/components/Onebedroomfirst'
import Onebedroomslider from '@/components/Onebedroomslider'
import ResidenceBanner from '@/components/ResidenceBanner'
import Studiofirst from '@/components/Studiofirst'
import Studiosecond from '@/components/Studiosecond'
import React from 'react'

function residences() {
  return (
    <div>
      <ResidenceBanner/>
      <Onebedroomfirst/>
      <Studiofirst/>
      <Onebedroomslider/>
      <Onebedroomcover/>
      <Studiosecond/>
    </div>
  )
}

export default residences