import React from 'react'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import HeaderTaxi from '../../components/headerTaxi/HeaderTaxi'
import './AirportTaxis.scss'
import TaxiInfo from '../../components/taxiInfo/TaxiInfo'
import TaxiTransport from '../../components/taxiTransport/TaxiTransport'

const AirportTaxis = () => {
  return (
    <div>
      <HeaderTaxi /> 
      <div className="taxiHomeContainer">
        <TaxiInfo/>
        <h1 className='taxiHomeTitle'>Airport transfers made easy</h1>
        <TaxiTransport /> 
        <MailList/>
        <Footer />
        </div>
    </div>
  )
}

export default AirportTaxis
