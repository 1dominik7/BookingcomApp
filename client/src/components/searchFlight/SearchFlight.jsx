import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import Flight from '../flight/Flight'
import { format } from 'date-fns'
import { SearchContext } from '../../context/SearchContext'
import './SearchFlight.scss'
import { AuthContext } from '../../context/AuthContext'

const SearchFlight = ({ item, dates, from, destination, options }) => {
    
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  
  const { user } = useContext(AuthContext)

  const {dispatch} = useContext(SearchContext)
    
  const handleSearch = () => {
    if (user) {
      dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options, from } })
      navigate(setOpenModal(true), { state: { destination, dates, options, from } })
    } else {
      navigate('/login')
    }
  } 

let time1= item.arrivalTime;
let time2= item.departureTime;

function strToMins(t) {
  let s = t.split(":");
  return Number(s[0]) * 60 + Number(s[1]);
}

function minsToStr(t) {
  return Math.trunc(t / 60)+'h '+('00' + t % 60).slice(-2)+'m';
}

let diffTime = minsToStr( strToMins(time1) - strToMins(time2) )

  return (
    <>
    <div className='searchFlight'>
      <div className='searchDetails'>
      <div className='searchFlightDetails'>
        <img src={item.logo[0]} className='siImg' alt='' />
          <div className="searchTime">
              <h1>{item.departureTime}</h1>
              <span><span className='searchCity'>{item.fromCity.slice(0, 3)}</span> · {format(dates[0].startDate, `dd MMM`)}</span>
          </div>
          <div className="searchDirect">
              <span >{diffTime}</span>
              <hr size="1"/>
            <span>Direct</span>
          </div>
          <div className="searchTime">
            <h1 >{item.arrivalTime}</h1>
            <span><span className='searchCity'>{item.toCity.slice(0, 3)}</span> · {format(dates[0].startDate, `dd MMM`)}</span>
          </div>
        </div>
        <div className='searchFlightDetails'>
        <img src={item.logo[0]} className='siImg' alt='' />
          <div className="searchTime">
            <h1 >{item.departureTime}</h1>
            <span><span className='searchCity'>{item.toCity.slice(0, 3)}</span> · {format(dates[0].endDate, `dd MMM`)}</span>
          </div>
          <div className="searchDirect">
            <span >{diffTime}</span>
            <hr size="1"/>
            <span >Direct</span>
          </div>
          <div className="searchTime">
            <h1>{item.arrivalTime}</h1>
            <span><span className='searchCity'>{item.fromCity.slice(0, 3)}</span> · {format(dates[0].endDate, `dd MMM`)}</span>
          </div>
        </div>
      </div> 
      <div className="searchDetails2">
        <FontAwesomeIcon icon={faSuitcase} className='package'/>
        <span> Included: personal item</span>
        <h2>{item.cheapestPrice * (+options.adult+ +options.children)} $</h2>
        <span>Total price for all travellers</span>
        <button onClick={handleSearch}>See flight</button>
      </div>
        </div>
      {openModal && <Flight setOpenModal={setOpenModal} flightId={item._id} toCity={item.toCity.slice(0, 3)} fromCity={item.fromCity.slice(0, 3)} diffTime={diffTime} />}
    </>
  )
}

export default SearchFlight
