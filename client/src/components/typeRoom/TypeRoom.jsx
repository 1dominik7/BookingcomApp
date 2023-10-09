import './TypeRoom.scss'
import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'

const TypeRoom = ({ roomId, type, days}) => {

    const { data, loading, error } = useFetch(`/rooms/roomNumber/${roomId}`)

  const setPriceValue = (data.map(item => item.price))

  return (
    <div className='hotelRoomsInfo'>
      {type === "price" && '$'+ (setPriceValue * days)}
      {type === "limit" && data.map(item => item.maxPeople)}
      {type === "title" && data.map(item => item.title)}      
    </div>
  )
}

export default TypeRoom
