import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faPerson, faPlaneDeparture, faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import { format } from 'date-fns'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import './HeaderFlight.scss'
import { SearchContext } from '../../context/SearchContext';

const HeaderFlight = ({ type }) => {

    const d = new Date()   
    const dd = d.setDate(d.getDate() + 1);
    const ddd = new Date(dd);
    const dataFinish = new Date(ddd.toString());

    const [data, setData] = useState(['WWA Warsaw Frederic Chopin Airport', 'MAD Adolfo Suarez Madrid-Barajas Airport' , 'LDN London Heathrow Airport'])
    const [query1, setQuery1]= useState("")
    const [query2, setQuery2]= useState("")
    const [OpenAirportFrom, setOpenAirportFrom] = useState(false)
    const [OpenAirportTo, setOpenAirportTo] = useState(false)
    const [destination, setDestination] = useState('')
    const [from, setFrom] = useState('')
    const [openDate, setOpenDate] = useState(false)
    const [dates, setDates] = useState([{
        startDate: new Date(),
        endDate: dataFinish,
        key: 'selection'
    }])
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
    })

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
        }})
    }

    const {dispatch} = useContext(SearchContext)

    const handleSearch = () => {
        if (destination === '' || from === ''   ) {
            return alert('Set airports')
        }
        else if (destination === from) {
            return alert('Origin and destination cant be the same')
        }
        else
        dispatch({type:"NEW_SEARCH", payload:{destination, from, dates, options}})
        navigate('/flights/flightList', { state: { destination, dates, from, options } })
    }

    const searchFromHandle = (e) => {
        setOpenAirportFrom(true)
        setQuery1(e.target.value)
        setFrom(e.target.value)
    }

    const searchDestinationHandle = (e) => {
        setOpenAirportTo(true)
        setQuery2(e.target.value)
        setDestination(e.target.value)
    }

    const clearFromHandler = () => {
        setFrom('')
        setQuery1('')
    }

    const clearDestinationHandler = () => {
        setDestination('')
        setQuery2('')
    }

  return (
      <div className='headerFlight'>
          <div className={type ==="list" ? "headerContainer listMode" : "headerContainer"}>
              {type !== 'list' &&
                  <>
                      <h1 className="headerTitle">Compare and book flights with ease</h1>
              <p className="headerDesc">
              Discover your next dream destination
              </p>
              {!user && <button className='headerBtn'>Sign in / Register</button>}
              <div className="headerSearch">
                  <div className="headerSearchItem" onClick={() =>
                                      setOpenAirportFrom(!OpenAirportFrom)}>
                          <FontAwesomeIcon icon={faPlaneDeparture} className='headerIcon' />
                          <form action="" >
                          <input
                                  type="text"
                                  placeholder='Where from?'
                                  className='headerSearchInput'
                                  onChange={searchFromHandle}  
                                  value={from}
                              />
                              <input
                                  type="reset"
                                  className='clearButton'
                                  value="Clear"
                                  onClick={clearFromHandler} />
                              </form>
                          {OpenAirportFrom &&
                              <div className="foundAirports" >
                                  {data.filter(item => item.toLowerCase().includes(query1)).map(item => (
                                      <div className='foundLink'
                                          onClick={() => setFrom(item)}
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
                      <div className="headerSearchItem" onClick={() =>
                                      setOpenAirportTo(!OpenAirportTo)}>
                      <FontAwesomeIcon icon={faPlaneArrival} className='headerIcon' />
                      <form action="">
                          <input
                                  type="text"
                                  placeholder='Where to?'
                                  className='headerSearchInput'
                                  onChange={searchDestinationHandle}
                                  value={destination}
                              />
                              <input
                                  type="reset"
                                  className='clearButton'
                                  value="Clear"
                                  onClick={clearDestinationHandler}
                              />
                              </form>
                          {OpenAirportTo &&
                              <div className="foundAirports" >
                                  {data.filter(item => item.toLowerCase().includes(query2)).map(item => (
                                      <div className='foundLink'
                                          onClick={() => setDestination(item)}
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
                  <div className="headerSearchItem data">
                      <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                      <span onClick={() => setOpenDate(!openDate)}  className='headerSearchText'>{`${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`}</span>
                          {openDate && <DateRange
                          editableDateInputs={true}
                          onChange={item => setDates([item.selection])}
                          moveRangeOnFirstSelection={false} 
                          ranges={dates}
                          className='date'
                          minDate={new Date()}
                      />}
                  </div>
                  <div className="headerSearchItem people">
                      <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                          <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} 
                      adult ⋅ ${options.children} children`}</span>
                      {openOptions && <div className="options">
                          <div className="optionItem">
                              <span className="optionText">Adult</span>
                              <div className="optionCounter">
                                  <button
                                      disabled={options.adult <= 1}
                                      className="optionCounterButton" onClick={() => handleOption('adult', 'd')}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>+</button>
                                </div>
                          </div>
                          <div className="optionItem">
                              <span className="optionText">Children</span>
                            <div className="optionCounter">
                                  <button
                                      disabled={options.children <= 0}
                                      className="optionCounterButton" onClick={() => handleOption('children', 'd')}>-</button>
                              <span className="optionCounterNumber">{options.children}</span>
                              <button className="optionCounterButton" onClick={() => handleOption('children', 'i')}>+</button>
                              </div>
                              </div>
                      </div>}
                  </div>
                  <div className="headerSearchItem button">
                     <button className="headerBtnSearch" onClick={handleSearch}>Search</button>
                  </div>
              </div></>}
      </div>
    </div>
  )
}

export default HeaderFlight
