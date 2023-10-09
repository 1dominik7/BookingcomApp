import './TypeFlight.scss'
import useFetch from '../../hooks/useFetch'
import RoomNumber from '../roomNumber/RoomNumber'
import TypeSeat from '../typeSeat/TypeSeat'

const TypeFlight = ({ flightId, term, seatId, seatNumber }) => {

  const { data, loading, error } = useFetch(`/flights/find/${flightId}`)

  return (
      <div className='flightTypeC'>
                  {data.logo ? <img src={data.logo[0]} alt="" className='img' /> : loading}
      <div className="info">
        <span>{new Date(term?.dataStart).toLocaleDateString()}</span>
        <span>From City:</span>
        <div className="city">{data?.departureAirport}</div>
        <div className="flightCT">
        <div className="address">{data?.fromCity}</div>
          <div className="time">{data?.departureTime}</div>
          </div>
        <span>To City:</span>
        <div className="city">{data?.arrivalAirport}</div>
        <div className="flightCT">
                  <div className="address">{data?.toCity}</div>
                  <div className="time">{data?.arrivalTime}</div>
      </div>
      </div>
      <div className="info">
        <span>{new Date(term?.dataEnd).toLocaleDateString()}</span>
        <span>From City:</span>
        <div className="city">{data?.arrivalAirport}</div>
        <div className="flightCT">
        <div className="address">{data?.toCity}</div>
          <div className="time">{data?.departureTime}</div>
          </div>
        <span>To City:</span>
        <div className="city">{data?.departureAirport}</div>
        <div className="flightCT">
                  <div className="address">{data?.fromCity}</div>
                  <div className="time">{data?.arrivalTime}</div>
      </div>
      </div>
        <div className="limitPeople">
        <div className="limitPeopleC">
          <div className="limitPeopleCItemT">
          <span className='title'>Seat title:</span>
                {seatId.map(item =>
                  <TypeSeat key={item.id} seatId={item} type="title"/>
            )}
          </div>
          <div className="limitPeopleCItemN">
          <span className='title'>Seat number:</span>
                {seatNumber.map((number) => 
                  <RoomNumber key={number.id} number={number}/>
          )}
          </div>
          </div>
          <div className="price">
              <span>Price</span>
              {seatId.map(item =>
                <TypeSeat type="price" key={item.id} seatId={item} />
              )}
        </div> 
        </div>
    </div>
  )
}

export default TypeFlight
