import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faCreditCard, faCheck } from '@fortawesome/free-solid-svg-icons'
import './TaxiInfo.scss'

const TaxiInfo = () => {
  return (
      <div className='taxiInfoContainer'>
          <div className='taxiInfoWrapper'>
          <div className="taxiInfoObject">
              <FontAwesomeIcon icon={faPlane} className='InfoTaxiIcon green' />
              <div className="taxiInfoObjectDesc">
                  <h3>Flight tracking</h3>
                  <span>Your driver tracks your flight and waits for you if it's delayed</span>
              </div>
          </div>
          <div className="taxiInfoObject">
          <div className="taxiInfoObject">
              <FontAwesomeIcon icon={faCreditCard} className='InfoTaxiIcon beige' />
              <div className="taxiInfoObjectDesc">
                  <h3>One clear price</h3>
                  <span>Your price is confirmed upfront – no extra costs, no cash required</span>
              </div>
          </div>
          </div>
          <div className="taxiInfoObject">
          <div className="taxiInfoObject">
              <FontAwesomeIcon icon={faCheck} className='InfoTaxiIcon green' />
              <div className="taxiInfoObjectDesc">
                  <h3>Tried and trusted</h3>
                  <span>We work with professional drivers and have 24/7 customer care</span>
              </div>
          </div>
          </div>
          </div>
    </div>
  )
}

export default TaxiInfo
