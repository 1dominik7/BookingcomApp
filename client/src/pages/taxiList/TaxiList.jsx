import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import SearchTaxi from '../../components/searchTaxi/SearchTaxi'
import HeaderTaxiList from '../../components/headerTaxiList/HeaderTaxiList'
import NoTaxi from '../../components/noTaxi/NoTaxi'
import { SearchContext } from '../../context/SearchContext'
import './TaxiList.scss'
import { AuthContext } from '../../context/AuthContext'

const TaxiList = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [from, setFrom] = useState(location.state.from)
  const [selectedValue1, setSelectedValue1] = useState(location.state.selectedValue1)
  const [dates, setDates] = useState(location.state.dates)
  const [options, setOptions] = useState(location.state.options)
  const [noTaxi, setNoTaxi] = useState(location.state.noTaxi || false)
  const [isActive, setIsActive] = useState({})
  const [id, setId] = useState('')

  const { data, loading, error, reFetch } = useFetch(`/taxi`)

  const handleClick = (from, destination, dates, selectedValue1, options) => {
    setDestination(destination)
    setFrom(from)
    setNoTaxi(false)
    setDates(dates)
    setSelectedValue1(selectedValue1)
    setOptions(options)
    if (destination === '' || from === '') {
      return alert('Choose location')
    }
    else if (((destination === 'Warsaw Chopin Airport (WAW)' || destination === 'Warsaw Central') && (from === 'Warsaw Chopin Airport (WAW)' || from === 'Warsaw Central')) || ((destination === 'Madrid Adolfo Suarez Madrid-Barajas Airport' || destination === 'Madrid Central') && (from === 'Madrid Adolfo Suarez Madrid-Barajas Airport' || from === 'Madrid Central')) || ((destination === 'London Heathrow Airport' || destination === 'London Central') && (from === 'London Heathrow Airport' || from === 'London Central'))) {
      reFetch()
  }
  else{
      setFrom('')
      setDestination('')
}
  }
  
  useEffect(() => {
    reFetch()
  },[from,destination,dates,selectedValue1,options])

    const placeFrom = () => {
      if ((from) === 'Warsaw Chopin Airport (WAW)')
        return ('Żwirki i Wigury 1, 02-143 Warszawa, Poland')
      
      else if ((from) === 'Warsaw Central')
      { return 'al. Jerozolimskie 54, 00-019 Warszawa, Poland' }
      
      else if ((from) === 'Madrid Adolfo Suarez Madrid-Barajas Airport')
      { return 'Av de la Hispanidad, s/n, 28042' }
        
      else if ((from) === 'Madrid Central')
      { return '31 C. de Pedro Heredia' }

      else if ((from) === 'London Heathrow Airport')
      { return 'Nelson Road, Hounslow Middlesex, TW6 2GW' }

      else if ((from) === 'London Central')
      { return '99A Charing Cross Rd' }
  }


    const placeTo = () => {
      if ((destination) === 'Warsaw Chopin Airport (WAW)')
        return ('Żwirki i Wigury 1, 02-143 Warszawa, Poland')
      
      else if ((destination) === 'Warsaw Central')
      { return 'al. Jerozolimskie 54, 00-019 Warszawa, Poland' }
      
      else if ((destination) === 'Madrid Adolfo Suarez Madrid-Barajas Airport')
      { return 'Av de la Hispanidad, s/n, 28042' }
        
      else if ((destination) === 'Madrid Central')
      { return '31 C. de Pedro Heredia' }

      else if ((destination) === 'London Heathrow Airport')
      { return 'Nelson Road, Hounslow Middlesex, TW6 2GW' }

      else if ((destination) === 'London Central')
      { return '99A Charing Cross Rd' }
    }
    
    const selectedValue2 = () => {
        const time = selectedValue1
        const min = data.slice(0,1).map(item => item.duration)

        let t = time.split(":"),      
            h = Number(t[0]),         
            m = Number(t[1]);         
        m+= min % 60;               
        h+= Math.floor(min/60);      
        if (m >= 60) { h++; m-=60 }   
        
        return (h+"").padStart(2,"0")+":"  
               +(m+"").padStart(2,"0")                    
  }  

  const navigate = useNavigate()
  const { dispatch } = useContext(SearchContext)
  
    const { user } = useContext(AuthContext)

  const handleSearch = () => {
    if (user) {
      dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options, from, selectedValue1 } })
      navigate(`/taxi/${id}`, { state: { destination, dates, options, from, selectedValue1 } })
    } else {
      navigate('/login')
    }
    } 

  const toggleActive = (id) => {
    setIsActive((prevState) => ({
      [id]: (prevState[id] !== false ? true : false)
    }))
    setId(id)
   console.log(isActive,id)
  }
  
  return (
    <div>
      <HeaderTaxiList handleClick={handleClick} />
    <div className="taxiListContainer">
        {(((destination !== '' || from !== '') && (destination !== from)) && noTaxi===false)
          ?
          (<div className="taxiListWrapper">
            <div className="taxiListSearch">
              <div className="taxiListSearchContainer">
                <h2 className='taxiListSearchTitle'>Your journey</h2>
                <div className="taxiListSearcContainerInfo">
                  <FontAwesomeIcon icon={faCircle} className='taxiListSearcContainerInfoCircle' />
                  <div className="taxiListSearcContainerInfoDesc">
                    <span>{format(dates, "EEE, d MMM")} · {selectedValue1}</span>
                    <h4>{from}, {placeFrom()}</h4>
                  </div>
                </div>
                <span className='taxiListSearcContainerDuration'>About {data.slice(0, 1).map(item => item.duration)} min</span>
                <div className="taxiListSearcContainerInfo">
                  <FontAwesomeIcon icon={faCircle} className='taxiListSearcContainerInfoCircle' />
                  <div className="taxiListSearcContainerInfoDesc">
                    <span>{format(dates, "EEE, d MMM")} · {selectedValue2()}</span>
                    <h4>{destination}, {placeTo()}</h4>
                  </div>
                </div>
                <div className="taxiListSearcContainerLine"></div>
              </div>
              <div className="taxiListSearchContainer">
                <h2 className='taxiListSearchTitle'>Policies</h2>
                <div className="taxiListSearcContainerInfo">
                  <FontAwesomeIcon icon={faCheck} className='taxiListSearcContainerInfoIcon' />
                  <div className="taxiListSearcContainerInfoDesc">
                    <h4>Free cancellation</h4>
                    <span>Cancel for free up to 24 hours before you go</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="taxiListResult">
              <h2>The latest prices from our trusted partners</h2>
              <span className='taxiListResultDesc'>We'll assign a local journey provider in the next step</span>
              {loading ? "loading" : <>
                {
                  data.map(item => (
                    <div key={item._id} onClick={() => toggleActive(item._id)}>
                      {options.adult <= item.seats &&
                        <SearchTaxi item={item} key={item._id} dates={dates} destination={destination} from={from} options={options} isActive={isActive} />
                      }
                    </div>
                  ))
                }
              </>}
              <div className="taxiListResultButtonContainer">
                <button className='taxiListResultButton' onClick={handleSearch}>Continue</button>
              </div>
            </div>
          </div>)
          :
        <NoTaxi/>  
        }
          </div>
  </div>
  )
}

export default TaxiList
