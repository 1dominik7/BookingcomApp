import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import './ReserveAttraction.scss'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ReserveAttraction = ({ setOpenReserve, data, tickets, time, active, totalPrice, dates, id }) => {
    
    const { user } = useContext(AuthContext)

    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, })

    const navigate = useNavigate()

    const firstDate = dates
    const secondDate = new Date(firstDate.getTime() + 86400000)
    const thirdDate = new Date(firstDate.getTime() + (2*86400000))
    const fourthDate = new Date(firstDate.getTime() + (3 * 86400000))

    const activeCheck = () => {
        if (active === "1") {
            return format(firstDate,'EEE, dd MMM')
        } else if (active === "2") {
            return format(secondDate,'EEE, dd MMM')
        }else if (active === "3") {
            return format(thirdDate,'EEE, dd MMM')
        }else if (active === "4") {
            return format(fourthDate,'EEE, dd MMM')
        }
    }
    
    const handleClick = async () => {
        try {
            await axiosInstance.post(`/trips/${user._id}`,
            tripData
                )
            setOpenReserve(false)
            navigate('/')
        }
         catch (err) {
        }
    }

        const tripData= {
            userId: user._id, 
            type: 'attraction',
            id: id,
            data: {
                dataStart: dates,  
            },
            pickup: (Object.keys(time)).toString(),
            price: totalPrice(),
            value1: tickets.adult,
            value2: tickets.children
      }
    
  return (
    <div className='reserveAttraction'>    
          <div className="reserveAttractionContainer">
              <FontAwesomeIcon
                icon={faXmark}
                className='reserveAttractionXmark'
                onClick={()=>setOpenReserve(false)}
              />
              <div className="reserveAttractionDetails">
                  <img src={data?.photos[0]} alt="" className='reserveAttractionPhoto'/>
                  <div className="reserveAttractionDetailsOptions">
                      <h2>{data?.title}</h2>
                      <span>{activeCheck()} {Object.keys(time)}</span>
                      <h3>{totalPrice()} $</h3>
                      <h2>{data?.category}</h2>
                  <div className='reserveAttractionTickets'>
                          {tickets.adult>0 &&
                              <div className="reserveAttractionTicketsOption">
                                  <div className="reserveAttractionTicketsOptionLeft">
                                      <span>{tickets.adult}</span>
                                      <span>x</span>
                                      <span>Adult (age 13+)</span>
                                  </div>
                                  <div className="reserveAttractionTicketsOptionRight">
                                      {data?.cheapestPrice} $
                                  </div>
                              </div>
                          }
                          {tickets.children>0 &&
                              <div className="reserveAttractionTicketsOption">
                                  <div className="reserveAttractionTicketsOptionLeft">
                                      <span>{tickets.children}</span>
                                      <span>x</span>
                                      <span>Child (age 0-12)</span>
                                  </div>
                                  <div className="reserveAttractionTicketsOptionRight">
                                      {(data?.cheapestPrice) / 2} $
                                  </div>
                              </div>
                          }
                      </div>
                      <div className="reserveAttractionTotal">
                          <h2>Total Price</h2>
                          <h2>{totalPrice()} $</h2>
                      </div>
                    <div className="reserveAttractionButton">
                     <button onClick={handleClick}>Reserve</button>
                  </div>
                  </div>
              </div>
    </div>
    </div>
  )
}

export default ReserveAttraction
