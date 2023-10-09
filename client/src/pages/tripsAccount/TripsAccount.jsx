import React, { useContext } from 'react'
import Footer from '../../components/footer/Footer'
import img from '../../img/noReservation.png'
import './TripsAccount.scss'
import BottomAccountInfo from '../../components/bottomAccountInfo/BottomAccountInfo'
import { AuthContext } from '../../context/AuthContext'
import TypeHotel from '../../components/typeHotel/TypeHotel'
import useFetch from '../../hooks/useFetch'
import TypeFlight from '../../components/typeFlight/TypeFlight'
import TypeRentCar from '../../components/typeRentCar/TypeRentCar'
import TypeAttraction from '../../components/typeAttraction/TypeAttraction'
import TypeTaxi from '../../components/typeTaxi/TypeTaxi'

const TripsAccount = () => {
 
  const { user } = useContext(AuthContext)
  
  const { data, loading, error } = useFetch(`/trips/find/${user._id}`)

  return (
      <div className='tripsAccountContainer'>
          <div className="tripsAccountWrapper">
              {data === null ? 
                  <>
              <div className="tripsAccountPhoto">
                  <img src={img} alt="" className='tripsAccountPhotoImg'/>
              </div>
              <div className="tripsAccountDesc">
                  <h2>Your trips live here</h2>
                  <span>This page shows all your bookings. If you made a booking but don't see it here, you can import it using your booking confirmation number and PIN.</span>
                  <span className='tripAccountDescBlue'>Import booking</span>
              </div>
              </> 
                  :
          <div className='tripsAccountTC'>
            {data.map(item => (
              <div className='tripsAccountTCI' key={item.id}>
                {item?.type === "hotel" && 
                  <TypeHotel key={item._id} hotelId={item.id} term={item.data} roomId={item.optionId} roomNumber={item.roomNumber} />
                }
                {item?.type === "flight" && 
                  <TypeFlight key={item._id} flightId={item.id} term={item.data} seatId={item.optionId} seatNumber={item.roomNumber} />
                }
                {item?.type === 'rentCar' && 
                  <TypeRentCar key={item._id} rentalCarId={item.id} term={item.data} insurance={item.insurance} pickup={item.pickup} returnTime={item.return} price={item.price} />
                }
                {item?.type === 'attraction' &&
                  <TypeAttraction key={item._id} attractionId={item.id} term={item.data} pickup={item.pickup} price={item.price} adult={item.value1} children={item.value2} />
                }
                {item?.type === 'taxi' &&
                  <TypeTaxi key={item._id} taxiId={item.id} term={item.data} pickup={item.pickup} returnTime={item.return} price={item.price} from={item.value1} destination={item.value2} />
                }
              </div>
            ))}
          </div>
              }
          </div>
            <BottomAccountInfo/>
            <Footer/> 
      </div>
  )
}

export default TripsAccount
