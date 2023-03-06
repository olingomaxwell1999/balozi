import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

function Enquirestrip() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='zoom-in' className='enquirestrip'>
      <div className="description-area">
        <div className="place">
          <h3>you are viewing</h3>
          <h2>Balozi Suites</h2>
        </div>
        <div className="place">
          <h3>prices from</h3>
          <h2>KSHS. 2.2M</h2>
        </div>
        <div className="place">
          <h3>completion date</h3>
          <h2>Q2 2025</h2>
        </div>
        <div className="place">
          <h3>payment over</h3>
          <h2>24 Months</h2>
        </div>
        <div className="place">
          <h3>location</h3>
          <h2>South B</h2>
        </div>
      </div>
      
      <div className="btn-area">
        <div className="place">
          <Link href='https://share-eu1.hsforms.com/1Q0NJQsh4Tvy6GPQ9g2QnMwfblz8' target='_blank'>
            <button className="btn">register interest</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Enquirestrip