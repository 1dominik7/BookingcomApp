import React from 'react'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import HeaderFlight from '../../components/headerFlight/HeaderFlight'
import PopularFlights from '../../components/popularFlights/PopularFlights'
import TrendingCities from '../../components/trendingCities/TrendingCities'
import FAQ from '../../components/faq/FAQ'
import './FlightHome.scss'

const FlightHome = () => {

    return (
    <div>
        <HeaderFlight />
        <div className="flightHomeContainer">
        <div className='flightHomeDesc'>
          <h1 className='flightHomeTitle'>Popular flights near you</h1>
          <p>Find deals on domestic and international flights</p>
          <PopularFlights />
          </div>
          <div className='flightHomeDesc'>
          <h1 className='flightHomeTitle'>Trending cities</h1>
          <p>Book flights to a destination popular</p>
          <TrendingCities />
          </div>
          <FAQ/>
        <MailList/>
        <Footer />
        </div>
    </div>
  )
}

export default FlightHome

