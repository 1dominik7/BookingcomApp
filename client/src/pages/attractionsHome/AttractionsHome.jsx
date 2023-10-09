import React from 'react'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import HeaderAttractions from '../../components/headerAttractions/HeaderAttractions'
import PopularAttractions from '../../components/popularAttractions/PopularAttractions'
import './AttractionsHome.scss'

const AttractionsHome = () => {
  return (
    <div>
        <HeaderAttractions />   
        <div className="AttractionsHomeContainer">
        <div className='AttractionsHomeDesc'>
          <PopularAttractions/>
        </div>
        <MailList/>
        <Footer/>
      </div>
      </div>
  )
}

export default AttractionsHome
