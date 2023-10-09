import React, { useContext, useState } from 'react'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext';
import './TrendingCities.scss'

const TrendingCities = () => {

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const d = new Date()   
    const dd = d.setDate(d.getDate() + 9);
    const ddd = new Date(dd);
    const dataFinish = new Date(ddd.toString());

    const [dates, setDates] = useState([{
        startDate: new Date().setDate(new Date().getDate()+2),
        endDate: dataFinish,
        key: 'selection'
    }])

    const navigate = useNavigate()
    const { dispatch } = useContext(SearchContext)

    const handleClickWWA = () => {
        dispatch({ type: "NEW_SEARCH", payload: {toCity:'Warsaw', options, dates} })
        navigate('/flights/flightList', { state: {  toCity:'Warsaw',options, dates} }); 
    }

    const handleClickMAD= () => {
        dispatch({ type: "NEW_SEARCH", payload: {toCity:'Madrid', options, dates} })
        navigate('/flights/flightList', { state: {  toCity:'Madrid',options, dates} }); 
    }

    const handleClickLDN = () => {
        dispatch({ type: "NEW_SEARCH", payload: {toCity:'London', options, dates} })
        navigate('/flights/flightList', { state: {  toCity:'London',options, dates} }); 
    }

  return (
    <div className='popularCities'>
    <div className="popularItem" onClick={handleClickWWA}>
     <img className='popularImg' src="https://images.pexels.com/photos/2613438/pexels-photo-2613438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
     <div className="popularTitles" >
         <h1>Warsaw, Poland</h1>
         <h2>{`${format(dates[0].startDate, 'dd MMM')} - ${format(dates[0].endDate, 'dd MMM')} · Round Trip`}</h2>
     </div>
 </div>
 <div className="popularItem" onClick={handleClickMAD} >
     <img className='popularImg' src="https://images.pexels.com/photos/15461018/pexels-photo-15461018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
     <div className="popularTitles">
         <h1>Madrid, Spain</h1>
         <h2>{`${format(dates[0].startDate, 'dd MMM')} - ${format(dates[0].endDate, 'dd MMM')} · Round Trip`}</h2>
     </div>
 </div>
 <div className="popularItem" onClick={handleClickLDN}>
     <img className='popularImg' src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
     <div className="popularTitles">
         <h1>London, England</h1>
         <h2>{`${format(dates[0].startDate, 'dd MMM')} - ${format(dates[0].endDate, 'dd MMM')} · Round Trip`}</h2>
     </div>
</div>
</div>
  )
}

export default TrendingCities
