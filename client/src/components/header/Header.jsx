import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays,faPerson} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import { format } from 'date-fns'
import { useNavigate} from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext';
import { AuthContext } from '../../context/AuthContext';
import './Header.scss'

const Header = ({ type }) => {

    const d = new Date()   
    const dd = d.setDate(d.getDate() + 1);
    const ddd = new Date(dd);
    const dataFinish = new Date(ddd.toString());

    const [data, setData] = useState(['Warsaw','Madrid','London'])
    const [destination, setDestination] = useState('')
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
        room: 1,
    })
    const [openInputType, setOpenInputType] = useState(false)
    const [query, setQuery] = useState("")
 
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
        if (destination === "") {
            alert("Type destination")
        }
        else {
            dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } })
            navigate('/hotels', { state: { destination, dates, options } })
        }
    }

    const navLogin = () => {
        navigate('/login')
    }

    const searchHandle = (e) => {
        setOpenInputType(true)
        setQuery(e.target.value)
        setDestination(e.target.value)
    }

  return (
      <div className='header'>
          <div className={type ==="list" ? "headerContainer listMode" : "headerContainer"}>
              {type !== 'list' &&
                  <>
                      <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
              <p className="headerDesc">
                  Get rewarded for your travels - unclock instant savings of 10% or more with a free hotelBooking account.
              </p>
              {!user && <button className='headerBtn' onClick={navLogin}>Sign in / Register</button>}
              <div className="headerSearch">
                  <div className="headerSearchItem city" onClick={() =>
                            setOpenInputType(!openInputType)}>
                      <FontAwesomeIcon icon={faBed} className='headerIcon' />
                      <input
                        type="text"
                        placeholder='Where are you going  ?'
                        className='headerSearchInput'
                        onChange={searchHandle}         
                        value={destination}  
                          />
                            {openInputType &&
                        <div className="foundHotelCity" >
                            {data.filter(item => item.toLowerCase().includes(query)).map(item => (
                                <div className='foundLink'
                                    onClick={() => setDestination(item)}
                                    key={item}
                                >
                                    <div className="foundAttraction"   >
                                        <div className="foundtitle" >{item}</div>
                                    </div>
                                </div>
                            ))}
                             <div className='bottomText'>booking 2023</div>
                        </div>
                    }
                  </div>
                  <div className="headerSearchItem">
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
                  <div className="headerSearchItem">
                      <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                      <span onClick={() => setOpenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult ⋅ ${options.children} children ⋅ ${options.room} room`}</span>
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
                          <div className="optionItem">
                              <span className="optionText">Room</span>
                              <div className="optionCounter">
                                  <button
                                      disabled={options.room <= 1}
                                      className="optionCounterButton" onClick={() => handleOption('room', 'd')}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterButton" onClick={() => handleOption('room', 'i')}>+</button>
                               </div>
                          </div>
                      </div>}
                  </div>
                  <div className="headerSearchItem">
                     <button className="headerBtnSearch" onClick={handleSearch}>Search</button>
                  </div>
              </div></>}
      </div>
    </div>
  )
}

export default Header
