import React,{useState} from 'react'
import Studiomodal from './Studiomodal'

function Studiofirst() {

    const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }

  return (
    <div className='amenities-first'>
        <div className="amenities-first-heading">
            <h3>BREATHTAKING VIEWS</h3>
            <h2>WELL DESIGNED STUDIO LAYOUTS</h2>
        </div>
        <div className="amenities-first-text">
            <p>Embrace a lifestyle in which vibrant living and tranquil calmness converge, Balozi Suite is an exquisite collection of Spacious<strong> Deluxe Studio - 315 sqft, Premium Studio - 255 sqft and  Superior Studio - 265 sqft.</strong> <br/>
            </p>

            <p>For those seeking a balance between style and substance in their lives, the Studios are balanced in both proportion and feature. </p>
        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          <button className="btn-light" onClick={handleClick}>view floor plan</button>
        </div>

        {openModal ? (
      <Studiomodal closeModal={setOpenModal}/>
    ) : null}
    </div>
  )
}

export default Studiofirst