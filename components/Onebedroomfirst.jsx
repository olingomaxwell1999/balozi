import React,{useState} from 'react'
import Onebedroommodal from './Onebedroommodal'

function Onebedroomfirst() {

  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }

  return (
    <div className='amenities-second pos'>
        <div className="amenities-first-heading">
            <h3>BREATHTAKING VIEWS</h3>
            <h2>WELL DESIGNED ONE BEDROOM LAYOUTS</h2>
        </div>
        <div className="amenities-first-text">
            <p>Balozi Suites offers you a <strong>One Bedroom – 510 sqft. </strong> perfect for bright and sophisticated living .
Taking cues from light, air, and water, the elegantly designed homes will give you a variety of layouts to meet your every expectation. 
<br/>
            </p>

        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          <button onClick={handleClick} className="btn">view floor plan</button>
        </div>

        {openModal ? (
      <Onebedroommodal closeModal={setOpenModal}/>
    ) : null}
    </div>
  )
}

export default Onebedroomfirst