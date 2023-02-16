import Image from 'next/image'
import Onebedroomplan from '../assets/studioplan.jpg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Studiomodal({closeModal}) {
    useEffect(() => {
        AOS.init({duration:1500})
    })

    const handleClick = () => {
        closeModal(false)
    }
  return (
    <div data-aos='zoom-in' className='onebedroommodal'>
      <div className="text-above">
        <button className='btn-light' onClick={handleClick}>close</button>
      </div>

      <div className="image-below">
        <Image src={Onebedroomplan} priority='true' height={400} width={900} alt='floor' />
      </div>
    </div>
  )
}

export default Studiomodal