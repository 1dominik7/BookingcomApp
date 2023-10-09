import React, { useContext, useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import SearchItem from '../../components/searchItem/SearchItem'
import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { SearchContext } from '../../context/SearchContext'

const TypeHotels = () => {

  const d = new Date()   
  const dd = d.setDate(d.getDate() + 1);
  const ddd = new Date(dd);
  const dataFinish = new Date(ddd.toString());

  const location = useLocation()
  const type = location.pathname.split("/")[3].slice(0, -1)

  const { data, loading, error } = useFetch(`/hotels?type=${type}`)
  const [destination, setDestination] = useState("")
  const [dates, setDates] = useState([{
      startDate: new Date(),
      endDate: dataFinish,
      key: 'selection'
  }])
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
})
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)
  const [query, setQuery] = useState("")
  const [openInputType, setOpenInputType] = useState(false)
  const [changeDestination, setChangeDestination] = useState('')
  const navigate = useNavigate()

  const {data1, reFetch} = useFetch(`/hotels?city=${changeDestination === '' ? destination : changeDestination}&min=${min || 0}&max=${max || 999}`)

  const {dispatch} = useContext(SearchContext)
  
  const handleClick = () => {
    if (destination || changeDestination === "") {
      alert("Type destination")
  }
  else {
      dispatch({ type: "NEW_SEARCH", payload: { destination: changeDestination, dates, options } })
      navigate('/hotels', { state: { destination: changeDestination, dates, options } })
  }
  }

  const [cities, setCities] = useState(['Warsaw','Madrid','London'])

  const searchHandle = (e) => {
    setOpenInputType(true)
    setQuery(e.target.value)
    setChangeDestination(e.target.value)
}


  return (
    <div>
      <Header type="list" />
        {
          loading ?
            ("loading")
            :
      (
        <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className='lsTitle'>Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <div className="lsItemSearchC" onClick={() => setOpenInputType(!openInputType)}>  
              <input placeholder={changeDestination} type="text" onChange={searchHandle} value={changeDestination}/>
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
              <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`}</span>
              {openDate &&
                <DateRange
                onChange={item => setDates([item.selection])}
                minDate={new Date()}
                ranges={dates}
                className='date'
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
            <button onClick={handleClick} className='buttonSearch'>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
              {data.map(item => (
                <SearchItem item={item} key={item._id} dates={dates} destination={destination} options={options}/>
              ))}
            </>}
          </div>
        </div>
      </div>
      )
        }
      <MailList />
        <Footer/>
    </div>
  )
}

export default TypeHotels
