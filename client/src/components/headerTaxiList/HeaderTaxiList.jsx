import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faLocationDot, faUser } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import { Calendar } from 'react-date-range'
import './HeaderTaxiList.scss'

const HeaderTaxiList = ({ type, handleClick }) => {
    
    const location = useLocation()

    const [openInputType1, setOpenInputType1] = useState(false)
    const [openInputType2, setOpenInputType2] = useState(false)
    const [openDatePick, setOpenDatePick] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)
    const [openOptions, setOpenOptions] = useState(false)
    const [selectedValue1, setSelectedValue1] = useState(location.state.selectedValue1)
    const [dates, setDates] = useState(location.state.dates)
    const [options, setOptions] = useState(location.state.options)
    const [destination, setDestination] = useState(location.state.destination)
    const [from, setFrom] = useState(location.state.from)
    const { user } = useContext(AuthContext)
    const [places, setPlaces] = useState(['Warsaw Chopin Airport (WAW)','Warsaw Central','Madrid Adolfo Suarez Madrid-Barajas Airport','Madrid Central','London Heathrow Airport','London Central'])
    const [query1, setQuery1] = useState("")
    const [query2, setQuery2] = useState("")

    const toggling1 = () => setIsOpen1(!isOpen1)

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
        }})
    }

    const searchFromHandle = (e) => {
        setOpenInputType1(true)
        setQuery1(e.target.value)
        setFrom(e.target.value)
    }

    const searchDestinationHandle = (e) => {
        setOpenInputType2(true)
        setQuery2(e.target.value)
        setDestination(e.target.value)
    }

  return (
    <div className='carsheader'>
    <div className={type ==="list" ? "headerTaxiContainer listMode" : "headerTaxiContainer"}>
        {type !== 'list' &&
            <>
                <h1 className="headerTitle">Car hire for any kind of trip</h1>
        <p className="headerDesc">
        Great deals at great prices, from the biggest car hire companies
        </p>
        {!user && <button className='headerBtn'>Sign in / Register</button>}
        <div className="headerTaxiSearch">
            <div className="headerTaxiSearchItem" onClick={() =>
                              setOpenInputType1(!openInputType1)}>
                    <FontAwesomeIcon icon={faLocationDot} className='headerTaxiIcon' />
                    <form action="" >
                      <input
                            type="text"
                            placeholder={from}
                            className='headerTaxiSearchInput'
                            value={from}
                            onChange={searchFromHandle}
                        />
                        </form>
                    {openInputType1 &&
                        <div className="foundTaxi" >
                            {places.filter(item => item.toLowerCase().includes(query1)).map(item => (
                                <div className='foundLink'
                                    onClick={() => setFrom(item)}
                                    key={item}
                                >
                                    <div className="foundCar"   >
                                        <div className="foundtitle" >{item}</div>
                                    </div>
                                </div>
                            ))}
                            <div className='bottomText'>booking 2023</div>
                        </div>
                    }
                      </div>  
                      <div className="headerTaxiSearchItem" onClick={() =>
                              setOpenInputType2(!openInputType2)}>
                    <FontAwesomeIcon icon={faLocationDot} className='headerTaxiIcon' />
                    <form action="" >
                      <input
                            type="text"
                            placeholder={destination}
                            className='headerTaxiSearchInput'
                            value={destination}
                            onChange={searchDestinationHandle}
                        />
                        </form>
                    {openInputType2 &&
                        <div className="foundTaxi" >
                            {places.filter(item => item.toLowerCase().includes(query2)).map(item => (
                                <div className='foundLink'
                                    onClick={() => setDestination(item)}
                                    key={item}
                                >
                                    <div className="foundCar"   >
                                        <div className="foundtitle" >{item}</div>
                                    </div>
                                </div>
                            ))}
                            <div className='bottomText'>booking 2023</div>
                        </div>
                    }
                      </div> 
            <div className="headerTaxiSearchData" >
                <FontAwesomeIcon icon={faCalendarDays} className='headerTaxiIcon' />
                    <span className='headerTaxiSearchText' onClick={() => setOpenDatePick(!openDatePick)}>
                       {`${format(dates, 'dd/MM/yyyy')} `}</span>
                    {openDatePick && <Calendar
                      value={dates}
                      onChange={(newValue) => {
                        setDates(newValue)
                        console.log(dates)
                      }}
                      className='date'
                      minDate={new Date()}
                />}
                </div>
                <div className="searchTaxiTime" onClick={toggling1}>
                    <FontAwesomeIcon icon={faClock} className='headerTaxiIcon' />
                    <div className="searchTimer">
                        <div className='selectHours' >
                            {selectedValue1 || '10:00'}
                            {isOpen1 &&
                                <div className='carsHours' onClick={(e) => setSelectedValue1(e.target.value)}>
                                    <option value="00:00">00:00</option>
                                    <option value="00:30">00:30</option>
                                    <option value="01:00">01:00</option>
                                    <option value="01:30">01:30</option>
                                    <option value="02:00">02:00</option>
                                    <option value="02:30">02:30</option>
                                    <option value="03:00">03:00</option>
                                    <option value="03:30">03:30</option>
                                    <option value="04:00">04:00</option>
                                    <option value="04:30">04:30</option>
                                    <option value="05:00">05:00</option>
                                    <option value="05:30">05:30</option>
                                    <option value="06:00">06:00</option>
                                    <option value="06:30">06:30</option>
                                    <option value="07:00">07:00</option>
                                    <option value="07:30">07:30</option>
                                    <option value="08:00">08:00</option>
                                    <option value="08:30">08:30</option>
                                    <option value="09:00">09:00</option>
                                    <option value="09:30">09:30</option>
                                    <option value="10:00" >10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                    <option value="16:30">16:30</option>
                                    <option value="17:00">17:00</option>
                                    <option value="17:30">17:30</option>
                                    <option value="18:00">18:00</option>
                                    <option value="18:30">18:30</option>
                                    <option value="19:00">19:00</option>
                                    <option value="19:30">19:30</option>
                                    <option value="20:00">20:00</option>
                                    <option value="20:30">20:30</option>
                                    <option value="21:00">21:00</option>
                                    <option value="21:30">21:30</option>
                                    <option value="22:00">22:00</option>
                                    <option value="22:30">22:30</option>
                                    <option value="23:00">23:00</option>
                                    <option value="23:30">23:30</option>
                                </div>}
                            </div>                            
                        </div>
               </div>
               <div className="headerOptionSearchItem">
                      <FontAwesomeIcon icon={faUser} className='headerTaxiIcon' onClick={() => setOpenOptions(!openOptions)}/>
                      <span className='headerSearchText' >{`${options.adult}`}</span>
                      {openOptions && <div className="options">
                          <div className="optionItem">
                              <span className="optionText">Passengers</span>
                              <div className="optionCounter">
                                  <button
                                    disabled={options.adult <= 1}
                                    className="optionCounterButton"
                                    onClick={() => handleOption('adult', 'd')}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                      <button
                                          disabled={options.adult >= 16}
                                          className="optionCounterButton"
                                          onClick={() => handleOption('adult', 'i')}>+</button>
                                </div>
                          </div>
                      </div>}
                  </div>
            <div className="headerTaxiSearchButton" >
               <button className="headerBtn" onClick={()=>handleClick(from,destination,dates,selectedValue1,options)}>Search</button>
            </div>
        </div></>}
</div>
</div>
)
}

export default HeaderTaxiList
