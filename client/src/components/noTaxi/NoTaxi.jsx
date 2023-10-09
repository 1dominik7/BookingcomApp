import React from 'react'
import noConnectionImg from '../../img/NoConnection.png'
import './NoTaxi.scss'

const NoTaxi = () => {
  return (
    <div className='noTaxiContainer'>
          <div className="noTaxiWrapper">
              <img src={noConnectionImg} alt="" className='noTaxiImg'/>
              <h2>No results found</h2>
              <span>There are no suppliers available for the pickup location and time</span>
        </div>
    </div>
  )
}

export default NoTaxi
