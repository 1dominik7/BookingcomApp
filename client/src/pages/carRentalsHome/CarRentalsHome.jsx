import React from 'react'
import './CarRentalsHome.scss'
import HeaderCarsRentals from '../../components/headerCarsRentals/HeaderCarsRentals'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import CarBrand from '../../components/carBrand/CarBrand'
import CarDiscount from '../../components/carDiscount/CarDiscount'
import CarInfo from '../../components/carInfo/CarInfo'
import PopularCarHire from '../../components/popularCarHire/PopularCarHire'

const CarRentalsHome = () => {
  return (
    <div>
      <HeaderCarsRentals />
      <div className="carHomeContainer">
      <div className='carHomeDesc'>
          <h1 className='carHomeTitle'>Popular car hire brands</h1>
          <CarBrand/>
        </div>
        <CarDiscount />
        <div className='carInfoElement'>
          <CarInfo />
        </div>
        <PopularCarHire/>
      <MailList/>
      <Footer/>
      </div>
    </div>
  )
}

export default CarRentalsHome
