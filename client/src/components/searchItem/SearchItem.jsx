import React, { useContext, useEffect, useState } from 'react'
import './SearchItem.scss'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'

const SearchItem = ({ item, dates, destination, options }) => {

  const navigate = useNavigate()
  const { dispatch } = useContext(SearchContext)
  const [width, setWidth] = useState()

  const handleSearch = () => {
    dispatch({type:"NEW_SEARCH", payload:{destination, dates, options}})
    navigate(`/hotels/${item._id}`, {state:{destination, dates, options}})
  }
  
  useEffect(() => {
    const newWidth = window.innerWidth;
    setWidth(newWidth)
  },[width])

  return (
    <div className='searchItem'>
          <img src={item.photos[0]} className='siImg' alt='' />
          <div className="siDesc">
            <h1 className='siTitle'>{item.name}</h1>
              <span className='siDistance'>{item.distance}m from center</span>
              <span className='siTaxiOp'>Free airport taxi</span>
              <span className='siSubtitle'>
                  {item.title}
              </span>
             {(width > 809 ) && <><span className="siFeatures">
                 {item.desc.substring(0, 250)}<span>...</span>
              </span>
              <span className='siCancelOp'>Free cancellation</span>
              <span className='siCancelOpSubtitle'>You can cancel later, so lock in this great price today!</span></>}
          </div>
          <div className="siDetails">
              {item.rating && <div className="siRating">
                  <span>Excellent</span>
                  <button>item.rating</button>
              </div>}
              <div className="siDeatilsTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
                  <span className="siTaxOp">Includes taxes and fees</span>
          <div onClick={handleSearch}>
                  <button className='siCheckButton'>See availability</button>
          </div>      
        </div>
          </div>
    </div>
  )
}

export default SearchItem
