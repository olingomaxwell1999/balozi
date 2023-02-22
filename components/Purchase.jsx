import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Purchase() {

  useEffect(() => {
    AOS.init({duration:1500})
  })

  return (
    <div data-aos="fade-up" className='purchase-plan'>
        <div data-aos="fade-up" className="top-text">
          <h3>the balozi suites</h3>
          <h1>purchase plan</h1>
        </div>

        <ol data-aos="fade-up" className="list-purchase">
            <li> <span>1.</span> Select your unit with Comex Homes Sales Executive.</li>
            <li> <span>2.</span> Fill out a reservation form with assistance from sales executive.</li>
            <li>
                <span>3.</span>
                <ul className="inner-list">
                    <li> <span>i.</span> Payment of 25% of the purchase price as a refundable deposit</li>
                    <li> <span>ii.</span> Share a copy of your Identity Card & KRA Pin  or certificate of incorporation in the case of a company & Pin</li>
                </ul>
            </li>
            <li> <span>4.</span>Review the /draft legal documentation that will be issued to you. 
A representative of the developer’s legal team will be available to take you through this should you require. 
</li>
            <li><span>5.</span> Complete the signing of the agreement for sale and make payment of the instalment due </li>
            <li> <span>6.</span> During construction make payments of the balance of the purchaser price in instalments as per dates stipulated in the sale agreement. </li>
        </ol>
    </div>
  )
}

export default Purchase