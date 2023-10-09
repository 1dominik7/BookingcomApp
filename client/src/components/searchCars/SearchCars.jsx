import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSuitcase, faGauge, faGear, faSuitcaseRolling, faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import './SearchCars.scss'
import { AuthContext } from '../../context/AuthContext'


const SearchCars = ({item, dates, destination,selectedValue1,selectedValue2}) => {

    const navigate = useNavigate()
    const {dispatch} = useContext(SearchContext)
  const place = item.place.slice(4, 10)
  
  const { user } = useContext(AuthContext)
  
  const handleSearch = () => {
    if (user) {
      dispatch({ type: "NEW_SEARCH", payload: { dates, selectedValue1, selectedValue2, destination, place } })
      navigate(`/carRentals/${item._id}`, { state: { dates, selectedValue1, selectedValue2, destination, place } })
    } else {
      navigate('/login')
    }
  }


  const startDate = dates[0].startDate
  const endDate = dates[0].endDate

  const dateDifferences = Math.round((endDate - startDate)/(1000*60*60*24))

  return (
    <>
    <div className='searchCar'>
      <div className='searchDetails'>
          <div className='searchCarDetails'>
            <div className="carImgs">
              <img src={item.logo[0]} className='sCarImg' alt='' />
              <img src={item.brandLogo[0]} className='sCarBrandImg' alt='' />
              </div>
                      <div className="searchCarDesc">
                          <div className='searchCarTitle'><h1>{item.brand}</h1> <p>or similar small car</p></div>
                          <div className="searchCarOptions">
                              <div className="carLeftColumn">
                                  <div className='carIcons'>
                                  <FontAwesomeIcon icon={faUser} className='carFontIcon ' />
                                      <p>{item.seats} seats</p></div>
                                 <div className='carIcons'>
                                <FontAwesomeIcon icon={faSuitcase} className='carFontIcon' />
                                <p>1 Large Bag</p></div>
                  <div className='carIcons'>
                  <FontAwesomeIcon icon={faGauge} className='carFontIcon' />
                    <p>unlimited mileage</p></div>
                              </div>
                              <div className="carRightColumn">
                  <div className='carIcons'>
                  <FontAwesomeIcon icon={faGear} className='carFontIcon' />
                    <p>Manual</p></div>
                  <div className='carIcons'>
                  <FontAwesomeIcon icon={faSuitcaseRolling} className='carFontIcon' />
                    <p>1 Small bag</p></div>
                              </div>
                          </div>
                          <div className="carDeatilsSpot">
                          <div className='carIcons carAirport'><p>{item.place}</p></div>
                              <div className='carIcons'><p>In Terminal</p></div>
                              </div>   
                      </div>
        </div>
      </div> 
      <div className="searchCarDetails2">
        <span> Price for {dateDifferences} days</span>
          <h2>{item.cheapestPrice} $</h2>
          <div className="searchCarDetails2option">
            <FontAwesomeIcon icon={faCheck} className='carFontIcon' /><span>Free cancellantion</span>
            </div>
        <button onClick={handleSearch}>View Deal</button>
      </div>
        </div>
    </>
  )
}

export default SearchCars
