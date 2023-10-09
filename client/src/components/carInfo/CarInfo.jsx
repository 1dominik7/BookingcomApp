import React from 'react'
import './CarInfo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faCalendarDays, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const CarInfo = () => {
  return (
    <div className='carInfoContainer'>
        <div className='carInfo'>
            <FontAwesomeIcon icon={faHeadset} className='carInfoFont' />
              <div className="carInfoDesc">
                  <h2>We’re here for you</h2>
                  <p>Providing customer support in over 30 languages</p>
            </div>
          </div>
          <div className='carInfo'>
            <FontAwesomeIcon icon={faCalendarDays} className='carInfoFont' />
              <div className="carInfoDesc">
                  <h2>Free cancellation</h2>
                  <p>On most bookings, up to 48 hours before pick-up</p>
            </div>
          </div>
          <div className='carInfo'>
            <FontAwesomeIcon icon={faThumbsUp} className='carInfoFont' />
              <div className="carInfoDesc">
                  <h2>5 million+ reviews</h2>
                  <p>By verified customers</p>
            </div>
          </div>
    </div>
  )
}

export default CarInfo
