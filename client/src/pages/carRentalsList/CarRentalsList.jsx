import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import SearchCars from '../../components/searchCars/SearchCars'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import Header from '../../components/header/Header'
import './CarRentalsList.scss'

const CarRentalsList = () => {

    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [changeDestination, setChangeDestination] = useState('')
    const [dates, setDates] = useState(location.state.dates)
    const [selectedValue1, setSelectedValue1 ] = useState(location.state.selectedValue1)
    const [selectedValue2, setSelectedValue2 ] = useState(location.state.selectedValue2)
    const [openDate, setOpenDate] = useState(false)
    const [min, setMin] = useState(undefined)
    const [max, setMax] = useState(undefined)
    const [data1, setData1] = useState([])
    const [airport, setAirport] = useState(['WWA Warsaw Frederic Chopin Airport', 'MAD Adolfo Suarez Madrid-Barajas Airport', 'LDN London Heathrow Airport'])
    const [OpenAirportFrom, setOpenAirportFrom] = useState(false)
    const [OpenAirportTo, setOpenAirportTo] = useState(false)
  const [query, setQuery] = useState("")
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  
    const { data, loading, error, reFetch } = useFetch(`/carRentals?place=${changeDestination === '' ? destination : changeDestination}&min=${min || 0}&max=${max || 9999}`)
  
  const handleClick = () => {
    reFetch()
    setData1(data)
  }

  const searchHandle = (e) => {
    setOpenAirportFrom(true)
    setQuery(e.target.value)
    setChangeDestination(e.target.value)
}

const toggling1 = () => setIsOpen1(!isOpen1)
const toggling2 = () => setIsOpen2(!isOpen2)

  return (
    <div>
    <Header type="list" />
    <div className="listCarContainer">
      <div className="listCarWrapper">
        <div className="listCarSearch">
          <h1 className='lsCarTitle'>Search</h1>
          <div className="lsCarItem">
              <label>Place</label>
              <div className="lsCarItemIC" onClick={() =>
                  setOpenAirportFrom(!OpenAirportFrom)}>
              <input
                type="text"
                placeholder={destination}
                onChange={searchHandle}
                defaultValue={destination}
                value={changeDestination}
                />
              {OpenAirportFrom &&
                              <div className="foundAirports" >
                                  {airport.filter(item => item.toLowerCase().includes(query)).map(item => (
                                      <div className='foundLink'
                                          onClick={()=>setChangeDestination(item)}
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
          <div className="lsCarItem">
              <label>Trip Date</label>
              <div className="lsCarItemDate">
                <div className="lsCarItemDateLeft" onClick={() => setOpenDate(!openDate)}>
                  <span >{`${format(dates[0].startDate, "dd/MM/yyyy")}, to `}</span>
                  <span>{format(dates[0].endDate, 'dd/MM/yyyy')}</span>
              </div>
                <div className="lsCarItemDateRight">
                  <div className="lsCarItemDateRightF" onClick={toggling1} >
                  {selectedValue1}
                  {isOpen1 && <div className='carsHours'
                    onClick={(e) => setSelectedValue1(e.target.value)}>
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
                    <div className="lsCarItemDateRightF" onClick={toggling2} >
                  {selectedValue2}
                  {isOpen2 && <div className='carsHours'
                    onClick={(e) => setSelectedValue2(e.target.value)}>
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
            {openDate &&
              <DateRange
              onChange={item => setDates([item.selection])}
              minDate={new Date()}
              ranges={dates}
              className='date'
            />}
          </div>
          <div className="lsCarItem">
            <label>Options</label>
            <div className="lsCarOptions">
            <div className="lsCarOptionItem">
              <span className="lsCarOptionText">Min price <small>per day</small></span>
                  <input type="number" min={0} onChange={e => setMin(e.target.value)} className="lsCarOptionInput" />
            </div>
            <div className="lsCarOptionItem">
                <span className="lsCarOptionText">Max price <small>per day</small></span>
              <input type="number" min={1} onChange={e => setMax(e.target.value)} className="lsCarOptionInput" />
            </div>
            </div>
          </div>
          <button onClick={handleClick} className='searchButton'>Search</button>
        </div>
        <div className="listCarResult">
            {loading ? "loading" : <>
             {
                (<>{
                  data.map(item => (
                      <SearchCars item={item} key={item._id} dates={dates} destination={changeDestination === '' ? destination : changeDestination} selectedValue1={selectedValue1} selectedValue2={selectedValue2}  />
                  ))
                }</>) 
               
            }
          </>  }
        </div>
      </div>
      </div>
  </div>
  )
}

export default CarRentalsList
