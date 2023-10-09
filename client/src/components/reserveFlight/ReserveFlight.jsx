import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './ReserveFlight.scss'
import { AuthContext } from '../../context/AuthContext'

const ReserveFlight = ({ item, dates, setItemId, seatNumber, setSeatNumber, setSelectedSeats, selectedSeats, adult, children, priceChecked, setPriceChecked}) => {
    const { data, loading, error } = useFetch(`/seats/${item}`)

    const result = +children + +adult

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

    const isAvailable = (seatNumber) => {
        const isFound = seatNumber.unavailableDates.some(date => alldates.includes(new Date(date).getTime()))
        return !isFound
    }

    const handleSelect = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        const id = e.target.id
        setPriceChecked(checked ? [...priceChecked, data.price] : priceChecked.filter(item => item !== data.price))
        setSelectedSeats(checked ? [...selectedSeats, value] : selectedSeats.filter(item => item !== value))
        setSeatNumber(checked ? [...seatNumber, id] : seatNumber.filter(item => item !== id))
    }

    setItemId(item)



  return (
      <div className='reserveFlight'>
            <div className="rFlightItems">
            <div className="rTitle">
                <h3>{data.title}</h3>
                <h3>{data.price}$</h3>
            </div>       
                  <div className="seats">
                  {data?.seatNumbers?.map(item => 
                      <div className="seat">
                          <label>{item.number}</label>
                          <input type="checkbox" value={item._id}
                              id={item.number} onChange={handleSelect} disabled={!isAvailable(item)} />
                      </div>
                        )}
                  </div> 
                  </div>      
    </div>
  )
}

export default ReserveFlight
