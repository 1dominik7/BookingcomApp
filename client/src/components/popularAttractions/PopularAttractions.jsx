import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLandmark, faCalendarCheck, faHeadset } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { SearchContext } from '../../context/SearchContext'
import './PopularAttractions.scss'

const PopularAttractions = () => {

  const { data, loading, error, reFetch } = useFetch(`/attractions`) 

  const d = new Date()   
    const dd = d.setDate(d.getDate() + 3);
    const ddd = new Date(dd);
    const dataFinish = new Date(ddd.toString());

    const [dates, setDates] = useState([{
        startDate: new Date(),
        endDate: dataFinish,
        key: 'selection'
    }])

  const navigate = useNavigate()
    
  const {dispatch} = useContext(SearchContext)

  const handleSearchWwa = () => {
    dispatch({type:"NEW_SEARCH", payload:{destination:'Warsaw', dates}})
    navigate('/attractions/attractionsList', { state: {destination:'Warsaw', dates}})
  }
  
  const handleSearchLdn = () => {
    dispatch({type:"NEW_SEARCH", payload:{destination:'London', dates}})
    navigate('/attractions/attractionsList', { state: {destination:'London', dates}})
  }
  
  const handleSearchMrd = () => {
    dispatch({type:"NEW_SEARCH", payload:{destination:'Madrid', dates}})
    navigate('/attractions/attractionsList', { state: {destination:'Madrid', dates}})
}

  return (
      <div className='popularAttractionsContainer'>
             <h1 className='AttractiosnAttractionsTitle'>Popular destinations</h1>
          <div className="popularAttractionsWrapper">
              <div className="popularAttractionsOption" onClick={handleSearchWwa}>
                  <img src="https://cdn.pixabay.com/photo/2015/06/26/23/36/warsaw-823079_960_720.jpg" alt="" />
                <div className="popularAttractionsOptionTitle">
                  <h3>Warsaw</h3>
                  <span>{data.filter(item => (item.city === "Warsaw")).length} things to do</span>
                </div>
              </div>
              <div className="popularAttractionsOption" onClick={handleSearchMrd}>
                  <img src="https://cdn.pixabay.com/photo/2017/09/04/16/13/madrid-2714570_960_720.jpg" alt="" />
                  <div className="popularAttractionsOptionTitle">
                  <h3>Madrid</h3>
                  <span>{data.filter(item => (item.city === "Madrid")).length}  things to do</span>
                </div>
              </div>
              <div className="popularAttractionsOption" onClick={handleSearchLdn}>
                  <img src="https://cdn.pixabay.com/photo/2020/11/12/16/55/road-5736078_960_720.jpg" alt="" />
                  <div className="popularAttractionsOptionTitle">
                  <h3>London</h3>
                  <span>{data.filter(item => (item.city === "London")).length}  things to do</span>
                </div>
              </div>
          </div>
          <div className="popularAttractionsWrapperBottom">
              <h1 className='AttractiosnAttractionsTitle'>We've got you covered</h1>
              <div className="popularAttractionsWrapperBottomDesc">
                  <div className="popularAttractionsWrapperBottomDescOption">
                      <FontAwesomeIcon icon={faLandmark} className='popularAttractionsIcon' />
                      <div className="popularDescDiv">
                        <h3>Explore top attractions</h3>
                        <span>Experience the best of your destination, with attractions, tours, activities and more</span>
                      </div>
                  </div>
                  <div className="popularAttractionsWrapperBottomDescOption">
                      <FontAwesomeIcon icon={faCalendarCheck} className='popularAttractionsIcon' />
                      <div className="popularDescDiv">
                        <h3>Fast and flexible</h3>
                        <span>Book tickets online in minutes, with free cancellation on many attractions</span>
                      </div>
                      </div>
                  <div className="popularAttractionsWrapperBottomDescOption">
                      <FontAwesomeIcon icon={faHeadset} className='popularAttractionsIcon' />
                      <div className="popularDescDiv">
                        <h3>Support when you need it</h3>
                        <span>Booking.com's global Customer Service team is here to help 24/7</span>
                      </div>
                      </div>
              </div>
        </div>
    </div>
  )
}

export default PopularAttractions
