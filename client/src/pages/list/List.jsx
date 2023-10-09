import React, { useState } from 'react'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'; 
import Header from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import SearchItem from '../../components/searchItem/SearchItem'
import useFetch from '../../hooks/useFetch'
import './List.scss'

const List = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [changeDestination, setChangeDestination] = useState('')
  const [dates, setDates] = useState(location.state.dates)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)
  const [openInputType, setOpenInputType] = useState(false)
  const [query, setQuery] = useState("")

  const { data, loading, error, reFetch } = useFetch(`/hotels?city=${changeDestination === '' ? destination : changeDestination}&min=${min || 0}&max=${max || 999}`)

  const [cities, setCities] = useState(['Warsaw','Madrid','London'])

    const handleClick = () => {
      reFetch()
  }
  
  const searchHandle = (e) => {
    setOpenInputType(true)
    setQuery(e.target.value)
    setChangeDestination(e.target.value)
}

  return (
    <div>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className='lsTitle'>Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <div className="lsItemSearchC" onClick={() => setOpenInputType(!openInputType)}>
                <input
                  placeholder={destination}
                  type="text"
                  onChange={searchHandle}
                  defaultValue={destination}
                  value={changeDestination}
                />
              {openInputType &&
                        <div className="foundHotelCity" >
                            {cities.filter(item => item.toLowerCase().includes(query)).map(item => (
                                <div className='foundLink'
                                    onClick={() => setChangeDestination(item)}
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
            </div>
            <div className="lsDataItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)} className='dateRange'>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`}</span>
              {openDate &&
                <DateRange
                editableDateInputs={true}
                onChange={item => setDates([item.selection])}
                moveRangeOnFirstSelection={false} 
                ranges={dates}
                className='date'
                minDate={new Date()}
              />}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionItem">
                <span className="lsOptionText">Min price <small>per night</small></span>
                <input type="number" onChange={e => setMin(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                  <span className="lsOptionText">Max price <small>per night</small></span>
                <input type="number" onChange={e => setMax(e.target.value)} className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Adult</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Children</span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
              </div>
              <div className="lsOptionItem">
                <span className="lsOptionText">Room</span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room}/>
              </div>
              </div>
            </div>
            <button onClick={handleClick } className='buttonSearch'>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
              {data.map(item => (
                <SearchItem item={item} key={item._id} dates={dates} destination={destination} options={options} />
              ))}
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
