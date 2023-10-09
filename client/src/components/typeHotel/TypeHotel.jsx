import './TypeHotel.scss'
import useFetch from '../../hooks/useFetch'
import TypeRoom from '../typeRoom/TypeRoom'
import RoomNumber from '../roomNumber/RoomNumber'

const TypeHotel = ({ hotelId, term, roomId, roomNumber }) => {

  const { data, loading, error } = useFetch(`/hotels/find/${hotelId}`)

  const date1 = new Date(term.dataStart)
  const date2 = new Date(term.dataEnd)

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(date1, date2)

  return (
      <div className='hotelTypeC'>
                  {data.photos ? <img src={data.photos[0]} alt="" className='img' /> : loading}
            <div className="info">
                  <div className="name">{data?.name}</div>
                  <div className="city">{data?.city}</div>
                  <div className="address">{data?.address}</div>
                  <div className="address">{data?.title}</div>
      </div>
      <div className="termC">
              <div className="term">
                  <span>Check-in date</span>
                  <span>{new Date(term.dataStart).toLocaleDateString()}</span>
              </div>
              <div className="term">
                  <span>Check-out date</span>
                  <span>{new Date(term.dataEnd).toLocaleDateString()}</span>
        </div>
        </div>
        <div className="limitPeople">
        <div className="limitPeopleC">
          <div className="limitPeopleCItemT">
          <span className='title'>Room title:</span>
                {roomId.map(item =>
                  <TypeRoom key={item.id} roomId={item} type="title"/>
            )}
          </div>
          <div className="limitPeopleCItemN">
          <span className='title'>Room number:</span>
                {roomNumber.map((number) => 
                  <RoomNumber key={number.id} number={number}/>
          )}
          </div>
          <div className="limitPeopleCItemL">
          <span className='title'>People Limit:</span>
                {roomId.map((item) => 
                  <TypeRoom type="limit" key={item.id} roomId={item}/>
          )}
            </div>
          </div>
          <div className="price">
              <span>Price</span>
              {roomId.map(item =>
                <TypeRoom type="price" key={item.id} roomId={item} term={term} days={days} />
              )}
      </div>  
      </div>
    </div>
  )
}

export default TypeHotel
