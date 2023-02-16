import Image from 'next/image'
import Banner from '../assets/balozifourteen.jpg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Coveramenities() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div>
        <Image priority='true' className='cover-amenities' src={Banner} alt='cover amenities' height={500} />
    </div>
  )
}

export default Coveramenities