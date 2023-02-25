import Image from 'next/image'
import Onebedroomplan from '../assets/therevealplan.jpg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Revealmodal({closeModal}) {
    useEffect(() => {
        AOS.init({duration:1500})
    })

    const handleClick = () => {
        closeModal(false)
    }
  return (
    <div data-aos='zoom-in' className='onebedroommodal'>
      <div className="text-above">
        <button className='btn' onClick={handleClick}>close</button>
      </div>

      <div className="image-below">
        <Image src={Onebedroomplan} priority='true' height={400} width={900} alt='floor' />
      </div>
    </div>
  )
}

export default Revealmodal

// amenities banner to homepage
// amenities banner to have the swimmingpool
// change location banner to an arial view
// remove the egnamic parentmix up images on the slider