import React from 'react'
import './CarBrand.scss'

const CarBrand = () => {
  return (
    <div className='carsBrand'>
            <div className="carBrand">
              <img className='carsImg' src="https://flextogo.com/wp-content/themes/europa-service1/images/FLEX_LOGO_RGB.svg" alt="" />
              <p>Flex to Go</p>
            </div>
            <div className="carBrand">
              <img className='carsImg' src="https://cdn2.rcstatic.com/images/suppliers/flat/panek_logo_400.jpg" alt="" />
              <p>Panek</p>
            </div>
            <div className="carBrand">
              <img className='carsImg' src="https://cdn2.rcstatic.com/images/suppliers/flat/car_net_logo_400.jpg" alt="" />
              <p>Car Net</p>
            </div>
            <div className="carBrand">
              <img className='carsImg' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Alamo_Rent_a_Car_%28logo%29.svg/1200px-Alamo_Rent_a_Car_%28logo%29.svg.png" alt="" />
              <p>Car Net</p>
            </div>
          </div>
  )
}

export default CarBrand
