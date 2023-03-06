import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'

function Studiobedroom() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  const brochure = 'https://www.balozisuites.com/BALOZI SUITES BROCHURE ksh.pdf'

  const handleClick = (url) => {
    console.log('This button has been clicked')

    //making the pdf a link
    const fileName = url.split("/").pop()

    //creating an anchor tag
    const aTag = document.createElement('a')

    //adding the href attribute
    aTag.href = url

    //adding the download attribute and the pdf link attribute
    aTag.setAttribute("download", fileName)

    //adding the newly created element to the body 
    document.body.appendChild(aTag)

    //activating the click functionality
    aTag.click()

    //removing the aTag after clicking
    aTag.remove()
  }

  const runHandleClick = () => {
    handleClick(brochure)
  }

  return (
    <div data-aos='fade-up' className='studiobedroom'>
        <div className="top-layer">
            <div className="side">
                <h2>one bedroom</h2>

                <p>Our one-bedroom apartments, spanning 510 sqft,
offer bright and airy living spaces, ensuring a
modern and sophisticated living experience.
Investors can expect a premium return on investment
from this highly sought-after property.</p>
{/* <p> 
These units sits on a built up areas of approximately.
▪︎One Bedroom Deluxe - 510 sqft
▪︎One Bedroom - 365 sqft</p> */}
                
            </div>
            <div className="middle-line"></div>
            <div className="side">
                <h2>studios</h2>

                <p>Embrace a lifestyle in which vibrant living and tranquil
calmness converge, Balozi suites has an exquisite
collection of Spacious.
Balozi Suites is the perfect investment opportunity for
those looking to invest in a premium property that
promises maximum returns on investment.</p>
            </div>
        </div>
        <div className="bottom-layer">
            <button className='btn-light' onClick={runHandleClick}>Download Brochure</button>
        </div>
    </div>
  )
}

export default Studiobedroom