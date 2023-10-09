import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faChevronRight, faStar, faStopwatch } from '@fortawesome/free-solid-svg-icons'
import './SearchAttraction.scss'
import { SearchContext } from '../../context/SearchContext'
import { AuthContext } from '../../context/AuthContext'

const SearchAttraction = ({ item, dates, destination }) => {
  const navigate = useNavigate()
  const { dispatch } = useContext(SearchContext)

  const { user } = useContext(AuthContext)

  const handleSearch = () => {
    if (user) {
      dispatch({ type: "NEW_SEARCH", payload: { dates, destination } })
      navigate(`/attractions/${item._id}`, { state: { destination, dates } })
    } else {
      navigate('/login')
    }
}

  return (
    <>
        < div className='searchAttraction'>
      <div className='searchAttractionItem' onClick={handleSearch}>
        <img src={item.photos[0]} alt="" className='searchAttractionPhoto' />
        <div className="searchAttractionDetails">
          <h2 className="searchAttractionDetailsDescTitle">
            {item.title}
          </h2>
          <span className='searchAttractionDetailsDesc'>
            {item.shortDesc}
          </span>
          <div className="searchAttractionDetailsTimer">
            <FontAwesomeIcon icon={faStopwatch} className='searchAttractionsIcon' />
            <span>Duration: {item.duration}</span>
          </div>
          <div className="searchAttractionDetailsRate">
            <FontAwesomeIcon icon={faStar} className='searchAttractionsIconStar' />
            <span>{item.rate}</span>
          </div>
          <span className='searchAttractionDetailsSpan'>
            Posted on Booking.com
          </span>
          <div className="searchAttractionDetailsCancellation">
            <FontAwesomeIcon icon={faCalendarCheck} className='searchAttractionsIcon' />
            <span>Free cancellation available</span>
          </div>
        </div>
        <div className="searchAttractionDetailsPrice">
          <span>From<h2>{item.cheapestPrice} $</h2></span>
          <div className='searchAttractionDetailsPriceButton'>
              <span
              >See availability</span>
            <FontAwesomeIcon icon={faChevronRight} className='searchAttractionsIcon' />
          </div>
        </div>
      </div>
        </div >
      </>
)
}

export default SearchAttraction
