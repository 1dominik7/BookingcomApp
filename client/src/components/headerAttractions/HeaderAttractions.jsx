import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faLandmark } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { SearchContext } from '../../context/SearchContext'
import { useNavigate } from 'react-router-dom'
import './HeaderAttractions.scss'

const HeaderAttractions = ({ type }) => {
    
    const d = new Date()   
    const dd = d.setDate(d.getDate() + 1);
    const ddd = new Date(dd);
    const dataFinish = new Date(ddd.toString());

    const [dates, setDates] = useState([{
        startDate: new Date(),
        endDate: dataFinish,
        key: 'selection'
    }])

    const [openInputType, setOpenInputType] = useState(false)
    const [destination, setDestination] = useState('')
    const [openDatePick, setOpenDatePick] = useState(false)
    const [data, setData] = useState(['Warsaw', 'Madrid' , 'London'])
    const [query, setQuery] = useState("")

    const { user } = useContext(AuthContext)

    const { dispatch } = useContext(SearchContext)
    const navigate = useNavigate()

    const handleSearch = () => {
        if (destination === '') {
            return alert('Choose location')
        }
        else
        dispatch({type:"NEW_SEARCH", payload:{dates, destination}})
        navigate('/attractions/attractionsList', { state: {  dates, destination } })
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
    <div className='attractionsHeader'>
    <div className={type ==="list" ? "headerContainer listMode" : "headerContainer"}>
        {type !== 'list' &&
            <>
                <h1 className="headerTitle">Attractions, activities and experiences</h1>
        <p className="headerDesc">
            Discover new attractions and experiences to match your interests and travel style
        </p>
        {!user && <button className='headerBtn' onClick={navLogin}>Sign in / Register</button>}
        <div className="headerAttractionsSearch">
                      <div
                          className="headerAttractionsSearchItem"
                          onClick={() =>
                            setOpenInputType(!openInputType)}
                      >
                    <FontAwesomeIcon icon={faLandmark} className='headerAttractionsIcon' />
                    <form action="" >
                      <input
                            type="text"
                            placeholder='Where are you going  ?'
                            className='headerAttractionsSearchInput'
                            onChange={searchHandle}
                            value={destination}
                        />
                        </form>
                    {openInputType &&
                        <div className="foundAttractions" >
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
                      <div
                          className="headerAttractionsSearchDataC" 
                      >
                    <div className="headerAttractionsSearchData" onClick={() => setOpenDatePick(!openDatePick)}>
                <FontAwesomeIcon icon={faCalendarDays} className='headerAttractionsIcon'/>
                          <span
                            className='headerAttractionSearchText'
                          >{`${format(dates[0].startDate, 'dd/MM/yyyy')} to ${format(dates[0].endDate, 'dd/MM/yyyy')}`}
                              </span>
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
            <div className="headerSearchItem">
               <button className="headerBtnSearch" onClick={handleSearch}>Search</button>
            </div>
        </div></>}
</div>
</div>
  )
}

export default HeaderAttractions
