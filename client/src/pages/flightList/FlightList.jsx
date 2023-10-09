import React, { useEffect, useState } from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Header from '../../components/header/Header'
import { format } from 'date-fns'  
import SearchFlight from '../../components/searchFlight/SearchFlight'
import axios from 'axios'
import './FlightList.scss'

const FlightLIst = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [from, setFrom] = useState(location.state.from)
  const [changeFrom, setChangeFrom] = useState('')
  const [changeDestination, setChangeDestination] = useState('')
  const [dates, setDates] = useState(location?.state?.dates)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)
  const [toCity, setToCity] = useState(location.state.toCity)
  const [data1, setData1] = useState([])
  const [airport, setAirport] = useState(['WWA Warsaw Frederic Chopin Airport', 'MAD Adolfo Suarez Madrid-Barajas Airport', 'LDN London Heathrow Airport'])
  const [OpenAirportFrom, setOpenAirportFrom] = useState(false)
  const [OpenAirportTo, setOpenAirportTo] = useState(false)
  const [query1, setQuery1]= useState("")
  const [query2, setQuery2] = useState("")
  const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

  const { data, loading, error, reFetch } = useFetch(`/flights?departureAirport=${changeFrom === '' ? from : changeFrom}&arrivalAirport=${changeDestination === '' ? destination : changeDestination}&min=${min || 0}&max=${max || 9999}`)

  useEffect(() => {
    const getCity = async () => {
      try {
        const res = await axiosInstance.get(`/flights?toCity=${toCity}`)
        setData1(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCity()
  }, [])

  const handleClick = () => {
      reFetch()
      setData1(data)
  }
  
  const searchFromHandle = (e) => {
    setOpenAirportFrom(true)
    setQuery1(e.target.value)
    setChangeFrom(e.target.value)
}

const searchDestinationHandle = (e) => {
    setOpenAirportTo(true)
    setQuery2(e.target.value)
    setChangeDestination(e.target.value)
}
  

  return (
    <div>
    <Header type="list" />
    <div className="listFlightContainer">
      <div className="listFlightWrapper">
        <div className="listFlightSearch">
          <h1 className='lsFlightTitle'>Search</h1>
          <div className="lsFlightItem">
              <label>From</label>
              <div className="lsFlightItemIC" onClick={()=>setOpenAirportFrom(!OpenAirportFrom)}>
              <input
                placeholder={from}
                type="text"
                onChange={searchFromHandle}
                defaultValue={from}
                value={changeFrom}
              />
              {OpenAirportFrom &&
                              <div className="foundAirports" >
                                  {airport.filter(item => item.toLowerCase().includes(query1)).map(item => (
                                      <div className='foundLink'
                                          onClick={() => setChangeFrom(item)}
                                          key={item}
                                      >
                                          <div className="foundAirport"   >
                                              <div className="foundtitle" >{item}</div>
                                          </div>
                                      </div>
                                  ))}
                                  <div className='bottomText'>booking 2023</div>
                              </div>
                }
                 </div>
            </div>
            <div className="lsFlightItem">
              <label>To</label>
              <div className="lsFlightItemIC" onClick={()=>setOpenAirportTo(!OpenAirportTo)}>
              <input
                type="text"
                onChange={searchDestinationHandle}
                placeholder={destination}
                defaultValue={destination}
                value={changeDestination}
                />
              {OpenAirportTo &&
                              <div className="foundAirportsTo" >
                                  {airport.filter(item => item.toLowerCase().includes(query2)).map(item => (
                                      <div className='foundLink'
                                          onClick={() => setChangeDestination(item)}
                                          key={item}
                                      >
                                          <div className="foundAirport"   >
                                              <div className="foundtitle" >{item}</div>
                                          </div>
                                      </div>
                                  ))}
                              </div>
                          }
              </div>
              </div>
          <div className="lsFlightItem">
            <label>Check-in Date</label>
            <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`}</span>
            {openDate &&
            <DateRange
              className='dateFlight'
              moveRangeOnFirstSelection={false} 
              editableDateInputs={true}
              onChange={item => setDates([item.selection])}
              minDate={new Date()}
              ranges={dates}
            />}
          </div>
          <div className="lsFlightItem">
            <label>Options</label>
            <div className="lsFlightOptions">
            <div className="lsFlightOptionItem">
              <span className="lsFlightOptionText">Min price <small>per flight</small></span>
                  <input type="number" min={0} onChange={e => setMin(e.target.value)} className="lsFlightOptionInput" />
            </div>
            <div className="lsFlightOptionItem">
                <span className="lsFlightOptionText">Max price <small>per flight</small></span>
              <input type="number" min={1} onChange={e => setMax(e.target.value)} className="lsFlightOptionInput" />
            </div>
            <div className="lsFlightOptionItem">
              <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} className="lsFlightOptionInput" placeholder={options.adult} onChange={e => setOptions({adult: e.target.value, children: options.children })} />
            </div>
            <div className="lsFlightOptionItem">
              <span className="lsFlightOptionText">Children</span>
              <input type="number" min={0} className="lsFlightOptionInput" placeholder={options.children} onChange={e => setOptions({children: e.target.value, adult: options.adult })}  />
            </div>
            </div>
          </div>
          <button onClick={handleClick} className='buttonSearch'>Search</button>
        </div>
        <div className="listFlightResult">
            {loading ? "loading" : <>
             {destination !== undefined ?
                (<>{
                  data.map(item => (
                    <SearchFlight item={item} key={item._id} dates={dates} destination={changeDestination === '' ? destination : changeDestination} from={changeFrom === '' ? from : changeFrom} toCity={toCity} options={options} />
                  ))
                }</>) :
                (<>{data1.map(item => (
                  <SearchFlight item={item} key={item._id} dates={dates} destination={changeDestination === '' ? destination : changeDestination} from={changeFrom === '' ? from : changeFrom} toCity={toCity} options={options} />
                  
                ))}</>)
            }
          </>  }
        </div>
      </div>
      </div>
  </div>
  )
}

export default FlightLIst
