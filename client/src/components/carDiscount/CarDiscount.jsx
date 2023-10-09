import React, { useState } from 'react'
import './CarDiscount.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons'

const CarDiscount = () => {

  const [discountOpen, setDiscountOpen] = useState(true)

  return (
  <>
    { discountOpen &&
   <div className='carGeniusContainer'>
      <div className='carGeniusDesc'>
        <h1>Sign in to save 10% with Genius</h1>
        <p>You're eligible for discounts on select car rentals.</p>
      </div>
      <div className='carGeniusLogo'>
        <FontAwesomeIcon icon={faGlobe} className='geniusLogo' />
      </div>
      <FontAwesomeIcon icon={faXmark} className='geniusCross' onClick={()=> setDiscountOpen(!discountOpen)} />
    </div>
      }
      </>
  )
}

export default CarDiscount
