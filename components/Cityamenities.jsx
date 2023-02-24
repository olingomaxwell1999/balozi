import {TbBarrierBlock, TbSwimming} from 'react-icons/tb'
import {GiCctvCamera, GiLift, GiPowerGenerator, GiWaterTank} from 'react-icons/gi'
import {MdBusinessCenter, MdChair} from 'react-icons/md'
import {FaCouch, FaParking, FaSatelliteDish, FaUsersCog} from 'react-icons/fa'
import {BiRestaurant} from 'react-icons/bi'
import {AiOutlineCoffee} from 'react-icons/ai'
import {CgGym} from 'react-icons/cg'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ImRoad } from 'react-icons/im'
import {RiRoadsterLine} from 'react-icons/ri'

function Cityamenities() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos='fade-up' className='city'>
      <div className="top">
        <h2>Find Your</h2>
        <h2 className='uppercase two'>Happy Place</h2>
      </div>
      <div id='amenities' className="bottom-city">
        <div className='city-card'>
          <TbSwimming className='icon-city' color={'#777777'}/>
          <h3>rooftop swimming pool</h3>
        </div>

        <div className='city-card'>
          <GiLift className='icon-city' color={'#777777'}/>
          <h3>Two high speed lift</h3>
        </div>

        <div className='city-card'>
          <MdBusinessCenter color={'#777777'} className='icon-city' />
          <h3>Business Center</h3>
        </div>

        <div className='city-card'>
          <FaCouch color={'#777777'} className='icon-city' />
          <h3>Resident Lounge</h3>
        </div>

        <div className='city-card'>
          <BiRestaurant className='icon-city' color={'#777777'}/>
          <h3>Rooftop Fine Dine Restaurant</h3>
        </div>

        <div className='city-card'>
          <AiOutlineCoffee className='icon-city' color={'#777777'}/>
          <h3>Coffee Shop</h3>
        </div>

        <div className='city-card'>
          <ImRoad className='icon-city' color={'#777777'}/>
          <h3>Dual Access from Mombasa Road</h3>
        </div>

        <div className='city-card'>
          <TbBarrierBlock className='icon-city' color={'#777777'}/>
          <h3>Manned Entry and Exits</h3>
        </div>

        <div className='city-card'>
          <RiRoadsterLine className='icon-city' color={'#777777'}/>
          <h3>Designated vehicular
drop-off areas</h3>
        </div>

        <div className='city-card'>
          <MdChair className='icon-city' color={'#777777'}/>
          <h3>Visitors Reception</h3>
        </div>

        <div className='city-card'>
          <FaUsersCog className='icon-city' color={'#777777'}/>
          <h3>Onsite Management Facilities</h3>
        </div>

        <div className='city-card'>
          <GiPowerGenerator className='icon-city' color={'#777777'}/>
          <h3>Backup Generator</h3>
        </div>

        <div className='city-card'>
          <GiWaterTank className='icon-city' color={'#777777'}/>
          <h3>Water Reservoir </h3>
        </div>

        <div className='city-card'>
          <FaParking className='icon-city' color={'#777777'}/>
          <h3>Secure Parking for
Residents and Visitors</h3>
        </div>

        <div className='city-card'>
          <GiCctvCamera className='icon-city' color={'#777777'}/>
          <h3>Secure Plot Boundary
and CCTV Surveillance </h3>
        </div>

        <div className='city-card'>
          <FaSatelliteDish className='icon-city' color={'#777777'}/>
          <h3>Satellite TV and Internet
Connectivity Provisions</h3>
        </div>

        <div className='city-card'>
          <CgGym className='icon-city' color={'#777777'}/>
          <h3>Luxury Health and Fitness Club</h3>
        </div>
        
      </div>
    </div>
  )
}

export default Cityamenities