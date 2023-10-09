import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSuitcase, faCheck, faHandshake, faCircleInfo, faUser } from '@fortawesome/free-solid-svg-icons'
import './SearchTaxi.scss'


const SearchTaxi = ({ item, isActive }) => {
  
  return (
    <div className={!isActive[`${item._id}`] ? 'searchTaxiContainer' : 'searchTaxiContainer active'}>
      <div className="searchTaxiWrapper">
      <div className="searchTaxiDetailsContainer">
        <img src={item.logo[0]} alt="" />
        <div className="searchTaxiDetails">
          <div className="searchTaxiDetailsTop">
              <h4>{item.type}</h4>
              <h4>$ {item.cheapestPrice}</h4>
          </div>
          <div className="searchTaxiDetailsMid">
          <FontAwesomeIcon icon={faCheck} className='searchTaxiDetailsMidIcon' />
            <span className='searchTaxiDetailsInfo'>Free cancellation</span>
          </div>
          <div className="searchTaxiDetailsMid">
          <FontAwesomeIcon icon={faHandshake} className='searchTaxiDetailsMidIcon' />
            <span className='searchTaxiDetailsInfo'>Meet and greet</span>
          </div>
          </div>
          </div>
        <div className="searchTaxiOptions">
          <div className="searchTaxiOption">
          <FontAwesomeIcon icon={faUser} className='searchTaxiOptionIcon' />
            <span className='searchTaxiOptionInfo'>Up to {item.seats}</span>
          </div>
          <div className="searchTaxiOption">
          <FontAwesomeIcon icon={faSuitcase} className='searchTaxiOptionIcon' />
            <span className='searchTaxiOptionInfo'>Up to {item.suitcase}</span>
          </div>
          <div className="searchTaxiOption">
          <FontAwesomeIcon icon={faCircleInfo} className='searchTaxiOptionIconInfo' />
          </div>
        </div>
      </div>  
    </div>
  )
}

export default SearchTaxi
