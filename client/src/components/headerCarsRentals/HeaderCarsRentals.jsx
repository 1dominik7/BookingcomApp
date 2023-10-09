import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCalendarDays, faClock } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { SearchContext } from '../../context/SearchContext'
import { useNavigate } from 'react-router-dom'
import './HeaderCarRentals.scss'

const HeaderCarsRentals = ({ type }) => {
    
    const d = new Date()   
    const dd = d.setDate(d.getDate() + 3);
    const ddd = new Date(dd);
    const dataFinish = new Date(ddd.toString());

    const [dates, setDates] = useState([{
        startDate: new Date(),
        endDate: dataFinish,
        key: 'selection'
    }])

    const [openInputType, setOpenInputType] = useState(false)
    const [destination, setDestination] = useState('')
    const [openDateDrop, setOpenDateDrop] = useState(false)
    const [openDatePick, setOpenDatePick] = useState(false)
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [selectedValue1, setSelectedValue1] = useState('10:00')
    const [selectedValue2, setSelectedValue2] = useState('10:00')
  
    const toggling1 = () => setIsOpen1(!isOpen1)
    const toggling2= () => setIsOpen2(!isOpen2)

    const { user } = useContext(AuthContext)

    const [data, setData] = useState(['WWA Warsaw Frederic Chopin Airport', 'MAD Adolfo Suarez Madrid-Barajas Airport' , 'LDN London Heathrow Airport'])

    const [query, setQuery] = useState("")

    const { dispatch } = useContext(SearchContext)
    const navigate = useNavigate()

    const handleSearch = () => {
        if (destination === '') {
            return alert('Choose location')
        }
        else
        dispatch({type:"NEW_SEARCH", payload:{dates,selectedValue1, selectedValue2, destination}})
        navigate('/carRentals/carRentalsList', { state: {  dates, selectedValue1, selectedValue2, destination } })
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
    <div className='carsHeader'>
          <div className={type ==="list" ? "headerContainer listMode" : "headerContainer"}>
              {type !== 'list' &&
                  <>
                      <h1 className="headerTitle">Car hire for any kind of trip</h1>
              <p className="headerDesc">
              Great deals at great prices, from the biggest car hire companies
              </p>
              {!user && <button className='headerBtn' onClick={navLogin}>Sign in / Register</button>}
              <div className="headerCarsSearch">
                      <div className="headerCarsSearchItem"
                          onClick={() => setOpenInputType(!openInputType)}>
                          <FontAwesomeIcon icon={faSearch} className='headerCarsIcon' />
                          <form action="" >
                            <input
                                  onChange={searchHandle}
                                  type="text"
                                  placeholder='Pick-up location?'
                                  className='headerCarsSearchInput'
                                  value={destination}  
                              />
                              </form>
                          {openInputType &&
                              <div className="foundCars" >
                                  {data.filter(item => item.toLowerCase().includes(query)).map(item => (
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
                      <div className="headerCarsSearchDataC">
                          <div className="headerCarsSearchData" onClick={() => setOpenDatePick(!openDatePick)}>
                      <FontAwesomeIcon icon={faCalendarDays} className='headerCarsIcon' />
                          <span className='headerCarsSearchText'>
                                  Pick-up date<br />{`${format(dates[0].startDate, 'dd/MM/yyyy')} `}</span>
                        </div>   
                          {openDatePick && <DateRange
                          editableDateInputs={true}
                          onChange={item => setDates([item.selection])}
                          moveRangeOnFirstSelection={false} 
                          ranges={dates}  
                          className='date'
                          minDate={new Date()}
                              
                              />}
                      </div>
                      <div className="searchCarsTime" onClick={toggling1}>
                          <FontAwesomeIcon icon={faClock} className='headerCarsIcon' />
                          <div className="searchTimer">
                              <label>Time: </label>
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
                    <div className="headerCarsSearchDataC">
                      <div className="headerCarsSearchData" onClick={() => setOpenDateDrop(!openDateDrop)} >
                          <FontAwesomeIcon icon={faCalendarDays} className='headerCarsIcon' />
                          <span className='headerCarsSearchText'>Drop-off date<br />
                          {`${format(dates[0].endDate, 'dd/MM/yyyy')}`}</span>
                          </div>   
                          {openDateDrop && <DateRange
                          editableDateInputs={true}
                          onChange={item => setDates([item.selection])}
                          moveRangeOnFirstSelection={false} 
                          ranges={dates}
                          className='date'
                          minDate={new Date()}
                      />}
                      </div>
                      <div className="searchCarsTime" onClick={toggling2}>
                          <FontAwesomeIcon icon={faClock} className='headerCarsIcon' />
                          <div className="searchTimer">
                              <label>Time: </label>
                              <div className='selectHours' >
                                  {selectedValue2 || '10:00'}
                                  {isOpen2 &&
                                      <div className='carsHours' onClick={(e) => setSelectedValue2(e.target.value)}>
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
                  <div className="headerSearchItem">
                     <button className="headerBtnSearch" onClick={handleSearch}>Search</button>
                  </div>
              </div></>}
      </div>
    </div>
  )
}

export default HeaderCarsRentals
