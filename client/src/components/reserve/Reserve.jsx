import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch'
import { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './Reserve.scss'
import { AuthContext } from '../../context/AuthContext'

const Reserve = ({ setOpen, hotelId, days, dates }) => {
    const [selectedRooms, setSelectedRooms] = useState([])
    const [roomNumber, setRoomNumber] = useState([])
    const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`)
    // const { dates } = useContext(SearchContext)
    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})
    const { user } = useContext(AuthContext)

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime())

        const dates = []

        while (date <= end) {
            dates.push(new Date(date).getTime()) 
            date.setDate(date.getDate() + 1)
        }
        return dates
    }

    const alldates = getDatesInRange(dates[0]?.startDate, dates[0]?.endDate)

    const isAvailable = (roomNumber) => {
        const isFound = roomNumber.unavailableDates.some(date => alldates.includes(new Date(date).getTime()))
        return !isFound
    }

    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        const id = e.target.id
        setSelectedRooms(checked ? [...selectedRooms, value] : selectedRooms.filter(item => item !== value))
        setRoomNumber(checked ? [...roomNumber, id] : roomNumber.filter(item => item !== id))
    }

    const navigate = useNavigate()

    const tripData= {
                    userId: user._id,
                    type: 'hotel',
                    id: hotelId,
                    optionId: selectedRooms,
                    roomNumber: roomNumber,
                    data: {
                        dataStart: dates[0]?.startDate,
                        dataEnd: dates[0]?.endDate,  
        }
    }

    const handleClick = async () => {
        try {
            await Promise.all(selectedRooms.map(roomId => {
                const res = axiosInstance.put(`/rooms/availability/${roomId}`,
                    { dates: alldates })    
                    return res.data
            }))
            await axiosInstance.post(`/trips/${user._id}`,
            tripData
                )
            setOpen(false)
            navigate('/')
        }
         catch (err) {
        }
    }


  return (
      <div className='reserve'>
          <div className="rContainer">
              <FontAwesomeIcon icon={faCircleXmark} className='rClose' onClick={() => setOpen(false)} />
              <span>Select your rooms:</span>
              {data.map(item => (
                  <div className="rItem" key={item._id}>
                      <div className="rItemInfo">
                          <div className="rTitle">{item.title}</div>
                          <div className="rDesc">{item.desc}</div>
                          <div className="rMax">
                              Max people: <b>{item.maxPeople}</b>
                          </div>
                          <div className="rPrice">${item.price * days}</div>
                      </div>
                      <div className="rSelectRooms">
                      {item.roomNumbers.map(roomNumber => (
                      <div className="room" key={roomNumber._id}>
                              <label>{roomNumber.number}</label>
                              <input type="checkbox" value={roomNumber._id}
                                  id={roomNumber.number} onChange={handleSelect} disabled={!isAvailable(roomNumber)} />
                          </div>
                      ))}
                          </div>
                  </div>
              ))}
              <button onClick={handleClick} className="rButton">Reserve Now!</button>
          </div>
    </div>
  )
}

export default Reserve
