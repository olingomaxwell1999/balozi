import React,{useState} from 'react'
import Revealmodal from './Revealmodal'

function Studiosecond() {

  const [openModal, setOpenModal] = useState(false)

  const handleClick = () => {
    setOpenModal(true)
  }

  return (
    <div className='amenities-second'>
        <div className="amenities-first-heading">
            <h3>CHECK OUT OUR</h3>
            <h2>FLOOR PLANS</h2>
        </div>
        <div className="amenities-first-text">
            <p>Discover Urban Living, deeply rooted in modernity yet
effortlessly connected in the green heart of South B, surrounded
by world class amenities.</p>
        </div>

        <div style={{marginTop:'30px'}} className='btn-area'>
          <button className="btn" onClick={handleClick}>view floor plans</button>
        </div>

        {openModal ? (
      <Revealmodal closeModal={setOpenModal}/>
    ) : null}

    </div>
  )
}

export default Studiosecond