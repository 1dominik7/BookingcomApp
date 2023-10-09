import React, { useContext, useState } from 'react'
import './Featured.scss' 
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'

const Featured = () => {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=Warsaw,Madrid,London")
    
    const {dispatch} = useContext(SearchContext)

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })

    const d = new Date()   
    const dd = d.setDate(d.getDate() + 1);
    const ddd = new Date(dd);
    const dataFinish = new Date(ddd.toString());

    const [dates, setDates] = useState([{
        startDate: new Date(),
        endDate: dataFinish,
        key: 'selection'
    }])
    
    const navigate = useNavigate()

    const handleSearchWwa = () => {
        dispatch({type:"NEW_SEARCH", payload:{destiantion:'Warsaw',dates, options}})
        navigate('/hotels', { state: {destination:'Warsaw', dates, options}})
    }

    const handleSearchLdn = () => {
        dispatch({type:"NEW_SEARCH", payload:{destiantion:'London',dates, options}})
        navigate('/hotels', { state: {destination:'London', dates, options}})
    }

    const handleSearchMrd = () => {
        dispatch({type:"NEW_SEARCH", payload:{destiantion:'Madrid',dates, options}})
        navigate('/hotels', { state: {destination:'Madrid', dates, options}})
    }


  return (
    <div className='featured'>
          {loading ? ("Loading please wait")
              :
              (<><div className="featuredItem" onClick={handleSearchWwa}>
              <img className='featuredImg' src="https://cdn.pixabay.com/photo/2017/02/23/11/15/cialis-2091918_960_720.jpg" alt="" />
              <div className="featuredTitles">
                  <h1>Warsaw</h1>
                  <h2>{data[0]} properties</h2>
              </div>
          </div>
          <div className="featuredItem" onClick={handleSearchMrd}>
              <img className='featuredImg' src="https://cdn.pixabay.com/photo/2020/04/06/18/48/madrid-5010803_960_720.jpg" alt="" />
              <div className="featuredTitles">
                  <h1>Madrid</h1>
                  <h2>{data[1]} properties</h2>
              </div>
          </div>
          <div className="featuredItem" onClick={handleSearchLdn}>
              <img className='featuredImg' src="https://cdn.pixabay.com/photo/2022/02/15/13/00/building-7014904_960_720.jpg" alt="" />
              <div className="featuredTitles">
                  <h1>London</h1>
                  <h2>{data[2]} properties</h2>
              </div>
        </div></>)}
    </div>
  )
}

export default Featured
