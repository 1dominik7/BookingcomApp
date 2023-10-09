import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCalendarDays, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchAttraction from '../../components/searchAttraction/SearchAttraction'
import './AttractionsList.scss'

const AttractionsList = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location?.state?.destination)
  const [changeDestination, setChangeDestination] = useState('')
  const [dates, setDates] = useState(location?.state?.dates)
  const [openDate, setOpenDate] = useState(false)
  const [min, setMin] = useState([])
  const [max, setMax] = useState([])
  const [data1, setData1] = useState([])
  const [openLocation, setOpenLocation] = useState(false)
  const [selectedSubCats, setSelectedSubCats] = useState([])
  const [selectLocation, setSelectLocation] = useState(['Warsaw', 'Madrid','London'])
  const [query, setQuery]= useState("")
  const [city, setCity]= useState(destination)
  
  const { data, loading, error, reFetch } = useFetch(`/attractions?city=${changeDestination === '' ? destination : changeDestination}&min=${min || 0}&max=${max || 9999}${selectedSubCats.length > 0 ? `&category=${ selectedSubCats[0]}&category=${selectedSubCats[1]}&category=${ selectedSubCats[2]}` : ""}`) 

  const handleChange = (e) => { 
    const value = e.target.value;
    const isChecked = e.target.checked;
    
    if (isChecked) {
      setSelectedSubCats([...selectedSubCats,value])
    } else {
      setSelectedSubCats(
        selectedSubCats.filter(item => item !==value)
      )
    }
  }

  const handleChangePrice = (e) => { 
    const valueMaxPrice = e.target.max;
    const valueMinPrice = e.target.min;
    const isCheckedPrice = e.target.checked;
    
    setMax(isCheckedPrice ? [valueMaxPrice] : max.filter(item => item !== valueMaxPrice))
    setMin(isCheckedPrice ? [valueMinPrice] : min.filter(item => item !== valueMinPrice))
  }
  
  useEffect(() => {
    reFetch()
  }, [selectedSubCats,min,max]
  );

  const handleClick = () => {
    reFetch()
    setData1(data)
    setCity(changeDestination)
  }

  const searchHandle = (e) => {
    setOpenLocation(true)
    setQuery(e.target.value)
    setChangeDestination(e.target.value)
}

  return (
    <div>
    <Header type="list" />
    <div className="listAttractionsContainer">
      <div className="listAttractionstWrapper">
          <div className="listAttractionsSearch">
            <div className="listAttractionsSearchLinks">
              <Link className='listAttractionsSearchLink' to={'/attractions'}>Home</Link>
              <FontAwesomeIcon icon={faChevronRight}  className='linkAttractionsIcon' />
              <Link className='listAttractionsSearchLink'>{city}</Link>
              <FontAwesomeIcon icon={faChevronRight}  className='linkAttractionsIcon' />
              <Link className='listAttractionsSearchLink'>Attractions</Link>
            </div>
            <div className="lsAttractionsSearchCity">
            <h2>{city} Attractions</h2>
              <h3>{data.length} things to do</h3>
            </div>
            <div className="lsAttractionsSearch">
              <div className="lsAttractionsSearchItem"
              onClick={() => setOpenLocation(!openLocation)}>
              <FontAwesomeIcon icon={faSearch}  className='AttractionsIcon' />
            <form action="" >
                <input type="text"
                  className='AttractionsSearchInput'
                  placeholder={destination}
                  value={changeDestination ?? destination}
                  onChange={searchHandle}
                />
                </form>
              {openLocation &&
                              <div className="foundLocations" >
                                  {selectLocation.filter(item => item.toLowerCase().includes(query)).map(item => (
                                      <div className='foundLink'
                                          onClick={() => setChangeDestination(item)}
                                          key={item}
                                      >
                                          <div className="foundLocation"   >
                                              <div className="foundtitle" >{item}</div>
                                          </div>
                                      </div>
                                  ))}
                                  <div className='bottomText'>booking 2023</div>
                              </div>
                          }
              </div>
              <div
                          className="AttractionsSearchData" 
                      >
                <FontAwesomeIcon icon={faCalendarDays} className='AttractionsIcon' />
                          <span
                            onClick={() => setOpenDate(!openDate)}
                            className='AttractionSearchText'
                          >{`${format(dates[0]?.startDate, 'dd/MM/yyyy')} to ${format(dates[0]?.endDate, 'dd/MM/yyyy')}`}
                        </span>
                    {openDate && <DateRange
                          editableDateInputs={true}
                          onChange={item => setDates([item.selection])}
                          moveRangeOnFirstSelection={false} 
                          ranges={dates}
                          className='dateAttractions'
                          minDate={new Date()}
                      />}
              </div> 
              <button
                className='AttractionsSearchButton'
                onClick={handleClick}
              >
                Search</button>
              </div>
            <div className="lsAttractionItem">
              <h3>Filter</h3>
              <div className="lsAttractionsOptions">
              <div className="lsAttractionsOption">
        <label>Category</label>
          <div className="lsAttractionsOptionDetails"  >
                    <input type="checkbox"
                      onChange={handleChange}
                      className='lsAttractionsOptionDetailsCheckBox'
                      value="Tours" 
            />
                <span>Tours</span>
                    <span className='lsFlightOptionDetailsCount'>({(data.filter(item => item.category === "Tours")).length})</span>
                  </div>
                  <div className="lsAttractionsOptionDetails">
              <input type="checkbox"
                  onChange={handleChange}
                  className='lsAttractionsOptionDetailsCheckBox'
                  value="Activities"
                    />  
                    <span>Activities</span>
                    <span className='lsFlightOptionDetailsCount'>({(data.filter(item => item.category === "Activities")).length})</span>
                    </div>
                    <div className="lsAttractionsOptionDetails"
                  >
              <input type="checkbox"
                     onChange={handleChange}
                     className='lsAttractionsOptionDetailsCheckBox'
                      value="Museums"
                    />
                     <span>Museums</span>
                    <span className='lsFlightOptionDetailsCount'>({(data.filter(item => item.category === "Museums")).length})</span>
                    </div>
                    </div>
                <div className="lsAttractionsOption">
                  <label>Price</label>
                  <div className="lsAttractionsOptionDetails">
                    <input type="checkbox" className='lsAttractionsOptionDetailsCheckBox'
                      min={0}
                      max={14.99}
                      onChange={
                        handleChangePrice
                        }               
                    />
                      <span>0 $-15 $ </span>
                    <span
                      className="lsFlightOptionDetailsCount" >({(data.filter(item => (item.cheapestPrice >=(0 || min) && item.cheapestPrice <=(14.99 || max) ))).length})</span>
                    </div>
                    <div className="lsAttractionsOptionDetails">
                    <input type="checkbox" className='lsAttractionsOptionDetailsCheckBox'
                       min={14.999}
                       max={24.99}
                       onChange={
                         handleChangePrice
                         }   
                    />
                      <span>15 $ - 25 $ </span>
                      <span
                      className="lsFlightOptionDetailsCount" >({(data.filter(item => (item.cheapestPrice >=(14.999 || min) && item.cheapestPrice <=(24.99 || max) ))).length})</span>
                      </div>
                      <div className="lsAttractionsOptionDetails">
                    <input type="checkbox" className='lsAttractionsOptionDetailsCheckBox'
                       min={24.999}
                       max={49.99}
                       onChange={
                         handleChangePrice
                         }  
                    />
                      <span>25 $ - 50 $ </span>
                      <span
                      className="lsFlightOptionDetailsCount" >({(data.filter(item => (item.cheapestPrice >=(24.999 || min) && item.cheapestPrice <=(49.99 || max) ))).length})</span>
                      </div>
                      <div className="lsAttractionsOptionDetails">
                    <input type="checkbox" className='lsAttractionsOptionDetailsCheckBox'
                       min={49.999}
                       max={999}
                       onChange={
                         handleChangePrice
                         }  
                    />
                    <span>50 $+ </span>
                    <span
                      className="lsFlightOptionDetailsCount" >({(data.filter(item => (item.cheapestPrice >=(49.999 || min) && item.cheapestPrice <=(999 || max) ))).length})</span>
                    </div> 
                   </div>
            </div>
          </div>
        </div>
        <div className="listFlightResult">
            {loading ? "loading" : <>
              {destination !== undefined ?
                (<>
                  {data?.map(item => (
                    <SearchAttraction item={item} key={item._id} dates={dates} destination={changeDestination === '' ? destination : changeDestination} subCat={selectedSubCats} />)
                  )
                }</>) :
                (<>{data1?.map(item => (
                  <SearchAttraction item={item} key={item._id} dates={dates} destination={changeDestination === '' ? destination : changeDestination} subCat={selectedSubCats} />
                ))}</>)
              }
            </>}
        </div>
      </div>
      </div>
  </div>
  )
}

export default AttractionsList
