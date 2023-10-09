import './TypeRoom.scss'
import useFetch from '../../hooks/useFetch'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Rooms = ({ dataHotel, id}) => {
    
  const [dataRoom, setDataRoom] = useState([])
  
  const idd = (dataHotel.include(id) ? dataHotel : '')

    // const { data, loading, error } = useFetch(`/rooms/${idd}`)
   
    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, })

    // useEffect(() => {
    //     const getRoom = async () => {
    //         try {
    //             const res =
    //             await axiosInstance.get(`/rooms/numberRoom/${roomId}`)
    //             setDataRoom(res.data)
    //     } catch (err) {
    //         console.log(err)
    //         }
    //     }
    //     getRoom()
    // }, [])


  console.log(id, dataHotel)
    
  return (
    <div className='hotelTypeC'>
     
    </div>
  )
}

export default Rooms
