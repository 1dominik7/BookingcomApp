import './TypeRentCar.scss'
import useFetch from '../../hooks/useFetch'

const TypeRentCar = ({ rentalCarId, term, insurance, pickup, returnTime, price }) => {

  const { data, loading, error } = useFetch(`/carRentals/find/${rentalCarId}`)

  return (
      <div className='carRentalC'>
               {data.logo ? <img src={data.logo[0]} alt="" className='img' /> : loading}
            <div className="info">
                  <div className="address">Place: {data?.place}</div>
                  <div className="city">City: {data?.city}</div>
                  <div className="brand">Brand: {data?.brand}</div>
                  <div className="brand">Hire Brand: {data?.hireBrand}</div>
                  <div className="seats">Seats: {data?.seats}</div>
                  <div className="seats">{insurance.map(item => item) ? 'Full Protection Insurance': 'No additional insurance'}</div>
      </div>
      <div className="termC">
              <div className="term">
                  <span>Pick-up</span>
          <span>{new Date(term.dataStart).toLocaleDateString()}</span>
          <span>{pickup}</span>
              </div>
              <div className="term">
                  <span>Drop-off</span>
          <span>{new Date(term.dataEnd).toLocaleDateString()}</span>
          <span>{returnTime}</span>
        </div>
        </div>
          <div className="price">
              <span>Price</span>
              <span>${price}</span>
        </div>            
    </div>
  )
}

export default TypeRentCar
