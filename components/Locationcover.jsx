import Image from "next/image"
import cover from '../assets/Google Map Reveal.png'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Locationcover() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div className="location-cover">
        <Image data-aos='fade-up' priority='true' className='coverimage' src={cover} width='auto' height='auto' alt='cover'/>
    </div>
  )
}

export default Locationcover