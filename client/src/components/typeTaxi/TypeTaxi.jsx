import './TypeTaxi.scss'
import useFetch from '../../hooks/useFetch'

const TypeTaxi = ({ taxiId, term, pickup, returnTime, price, from, destination }) => {

  const { data, loading, error } = useFetch(`/taxi/find/${taxiId}`)

  
  const selectedValue2 = () => {
    const time = pickup.toString()
    const min = data?.duration

    let t = time.split(":"),      
        h = Number(t[0]),         
        m = Number(t[1]);         
    m+= min % 60;               
    h+= Math.floor(min/60);      
    if (m >= 60) { h++; m-=60 }   
    
    return (h+"").padStart(2,"0")+":"  
           +(m+"").padStart(2,"0")                    
} 

  return (  
      <div className='carTaxiC'>
               {data.logo ? <img src={data.logo[0]} alt="" className='img' /> : loading}
            <div className="info">
                  <div className="address">From place: {from}</div>
                  <div className="address">Destination place: {destination}</div>
                  <div className="brand">Duration: {data?.duration} min</div>
                  <div className="brand">Seats: {data?.seats}</div>
                  <div className="seats">Suitcase: {data?.suitcase}</div>
      </div>
      <div className="termC">
              <div className="term">
                  <span>Journey details</span>
          <span>{new Date(term.dataStart).toLocaleDateString()}</span>
          <div className="time">
            <span>{pickup}</span>
            <span> - </span>
          <span>{selectedValue2()}</span>
          </div>
          </div>
        </div>
          <div className="price">
              <span>Price</span>
              <span>${price}</span>
        </div>            
    </div>
  )
}

export default TypeTaxi
