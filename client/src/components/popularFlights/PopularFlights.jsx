import React, { useContext, useState } from 'react'
import './PopularFlights.scss'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'

const PopularFlights = () => {

    const d = new Date()   
    const dd = d.setDate(d.getDate() + 4);
    const ddd = new Date(dd);
    const dataFinish = new Date(ddd.toString());

    const [dates, setDates] = useState([{
        startDate: new Date(),
        endDate: dataFinish,
        key: 'selection'
    }])

    const [options, setOptions] = useState({
        adult: 2,
        children: 0,
    })


    const navigate = useNavigate()
    const {dispatch} = useContext(SearchContext)

    const handleClickWWAtoMAD = () => {
        dispatch({type:"NEW_SEARCH", payload:{destination:"MAD Adolfo Suarez Madrid-Barajas Airport", from:"WWA Warsaw Frederic Chopin Airport", dates, options}})
        navigate('/flights/flightList', { state: { destination:"MAD Adolfo Suarez Madrid-Barajas Airport", from:"WWA Warsaw Frederic Chopin Airport", dates, options } })
    }

    const handleClickLDNtoWWA = () => {
        dispatch({type:"NEW_SEARCH", payload:{destination:"WWA Warsaw Frederic Chopin Airport", from:"LDN London Heathrow Airport", dates, options}})
        navigate('/flights/flightList', { state: { destination:"WWA Warsaw Frederic Chopin Airport", from:"LDN London Heathrow Airport", dates, options } })
    }

    const handleClickMADtoLDN = () => {
        dispatch({type:"NEW_SEARCH", payload:{destination:"LDN London Heathrow Airport", from:"WWA Warsaw Frederic Chopin Airport", dates, options}})
        navigate('/flights/flightList', { state: { destination:"LDN London Heathrow Airport", from:"WWA Warsaw Frederic Chopin Airport", dates, options } })
    }

  return (
    <div className='popularFlights'>
             <div className="popularItem" onClick={handleClickLDNtoWWA}>
              <img className='popularImg' src="https://cdn.pixabay.com/photo/2013/10/18/23/37/poland-197670_960_720.jpg" alt="" />
              <div className="popularTitles">
                  <h1>London to Warsaw</h1>
                  <h2 className='popularTitlesH2'>{`${format(dates[0].startDate, 'dd MMM')} - ${format(dates[0].endDate, 'dd MMM')} · Round Trip`}</h2>
              </div>
          </div>
          <div className="popularItem" onClick={handleClickWWAtoMAD} >
              <img className='popularImg' src="https://cdn.pixabay.com/photo/2014/04/19/12/40/madrid-327979_960_720.jpg" alt="" />
              <div className="popularTitles">
                  <h1>Warsaw to Madrid</h1>
                  <h2 className='popularTitlesH2'>{`${format(dates[0].startDate, 'dd MMM')} - ${format(dates[0].endDate, 'dd MMM')} · Round Trip`}</h2>
              </div>
          </div>
          <div className="popularItem" onClick={handleClickMADtoLDN}>
              <img className='popularImg' src="https://cdn.pixabay.com/photo/2010/12/13/10/21/bridge-2715_960_720.jpg" alt="" />
              <div className="popularTitles">
                  <h1>Madrid to London</h1>
                  <h2 className='popularTitlesH2'>{`${format(dates[0].startDate, 'dd MMM')} - ${format(dates[0].endDate, 'dd MMM')} · Round Trip`}</h2>
              </div>
        </div>
    </div>
  )
}

export default PopularFlights
