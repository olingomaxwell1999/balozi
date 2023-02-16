import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Aboutteam() {

    useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='about-team'>
        <div className="top">
            <h2>About the</h2>
            <h2 className='uppercase two'>Team</h2>
        </div>
        <div className="bottom">
            <div className="place">
                <h3>Developer</h3>
                <h2>Comex Builders</h2>
            </div>
            <div className="place">
                <h3>Architect</h3>
                <h2>Salcohm Studios Limited.</h2>
            </div>
            <div className="place">
                <h3>Structural Engineer</h3>
                <h2>Metric Integrated Consultancy</h2>
            </div>
            <div className="place">
                <h3>Associate</h3>
                <h2>Comex Homes</h2>
            </div>
        </div>
    </div>
  )
}

export default Aboutteam