import './TypeAttraction.scss'
import useFetch from '../../hooks/useFetch'

const TypeAttraction = ({ attractionId, term, pickup, price, adult, children }) => {

  const { data, loading, error } = useFetch(`/attractions/find/${attractionId}`)

  return (
      <div className='attractionC'>
               {data.photos ? <img src={data.photos[0]} alt="" className='img' /> : loading}
            <div className="info">
                  <div className="title">Title: {data?.title}</div>
                  <div className="desc">Description: {data?.shortDesc}</div>
                  <div className="lcoation">Location: {data?.location}</div>
                  <div className="city">City: {data?.city}</div>
                  <div className="duration">Duration: {data?.duration}</div>
      </div>
      <div className="termC">
              <div className="term">
                  <span>Date of visit</span>
          <span>{new Date(term.dataStart).toLocaleDateString()}</span>
          <span>{pickup}</span>
              </div>
      </div>
      <div className="ticekts">
        {adult > 0 ?
          <div className="ticket">
            <span>Adult: </span>
            <span>{adult} {adult > 1 ? 'tickets' : 'ticket'}</span>
          </div>
          :
          ''
        }
          {children > 0 ?
          <div className="ticket">
            <span>Children: </span>
            <span>{children} {children > 1 ? 'tickets' : 'ticket'}</span>
          </div>
          :
          ''
        }
      </div>
          <div className="price">
              <span>Price</span>
              <span>${price}</span>
        </div>            
    </div>
  )
}

export default TypeAttraction
