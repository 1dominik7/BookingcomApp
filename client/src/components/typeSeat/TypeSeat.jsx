// import './TypeSeat.scss'
import useFetch from '../../hooks/useFetch'

const TypeSeat = ({ seatId, type}) => {

    const { data, loading, error } = useFetch(`/seats/seatNumber/${seatId}`)
  
  return (
    <div className='hotelRoomsInfo'>
      {type === "price" && '$'+ data.map(item => item.price)}
      {type === "title" && data.map(item => item.title)}      
    </div>
  )
}

export default TypeSeat
