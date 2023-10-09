import React, {  useState } from 'react'
import './FeaturedProperties.scss'
import useFetch from '../../hooks/useFetch'
import { Link } from 'react-router-dom'


const FeaturedProperties = ({item}) => {

  const { data, loading, error, reFetch } = useFetch(`/hotels?featured=true&limit=4`)

  const d = new Date()   
  const dd = d.setDate(d.getDate() + 1);
  const ddd = new Date(dd);
  const dataFinish = new Date(ddd.toString());

  const [dates, setDates] = useState([{
    startDate: new Date(),
    endDate: dataFinish,
    key: 'selection'
  }])

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })

  const [destination, setDestination] = useState('')

  return (
    <div className='fp'>
      {loading ?
        ("Loading")
        :
        (<>
          {data.map(item => (
            <Link to={`/hotels/${item._id}`} state={{destination, dates, options}} className="fpItem" key={item._id}>
          <img src={item.photos[0]} alt="" className="fpImg" />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
          <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
            {item.rating && <div className="fpRating">
              <button>{item.rating}</button>
              <span>Excellent</span>
            </div>}
          </Link>
        ))}
        </>)
      }
    </div>
  )
}

export default FeaturedProperties
