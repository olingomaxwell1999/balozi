import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Amenitiessecond() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='amenities-second'>
        <div className="amenities-first-heading">
            <h3>REFINED</h3>
            <h2>LIVING</h2>
            
        </div>
        <div className="amenities-first-text">
            <p>Balozi Suites is the perfect investment opportunity for those seeking to invest in a premium property. Our luxurious collection of executive studios and one-bedroom apartments, nestled in a picturesque suburban setting, provides an unparalleled living experience for residents.
Investors can expect maximum returns on their investment, thanks to our highly sought-after location and unparalleled amenities.
</p>
        </div>
    </div>
  )
}

export default Amenitiessecond