import React from 'react'
import Image from "next/image"
import cover from '../assets/balozieight.jpg'

function Onebedroomcover() {
  return (
    <div>
        <Image className='coverimage' src={cover} width='auto' height='auto' alt='cover'/>
    </div>
  )
}

export default Onebedroomcover