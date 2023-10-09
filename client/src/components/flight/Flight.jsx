import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faCircle, faSuitcase, faGift } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch'
import { useLocation} from 'react-router-dom'
import { format } from 'date-fns'
import './Flight.scss'
import { useNavigate } from 'react-router-dom'
import ReserveFlight from '../reserveFlight/ReserveFlight'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'

const Flight = ({setOpenModal, flightId, toCity, fromCity, diffTime}) => {
    const location = useLocation()
    const [dates, setDates] = useState(location.state.dates)       
    const [options, setOptions] = useState(location.state.options)
    const [seatNumber, setSeatNumber] = useState([])
    const [selectedSeats, setSelectedSeats] = useState([])
    const [itemId, setItemId] = useState()
    const [priceChecked, setPriceChecked] = useState([])
    const { data, loading, error } = useFetch(`/flights/find/${flightId}`)

    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})
    
    const { user } = useContext(AuthContext)
   
    const navigate = useNavigate()

    const tripData= {
                    userId: user._id,
                    type: 'flight',
                    id: flightId,
                    optionId: selectedSeats,
                    roomNumber: seatNumber,
                    data: {
                        dataStart: dates[0]?.startDate,
                        dataEnd: dates[0]?.endDate,  
        }
    }

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

    const handleClick = async () => {
        try {
            await Promise.all(selectedSeats.map(seatId => {
                const res = axiosInstance.put(`/seats/availability/${seatId}`,
                    { dates: alldates })    
                    return res.data
            }))
            await axiosInstance.post(`/trips/${user._id}`,
            tripData
                )
            setOpenModal(false)
            navigate('/')
        }
         catch (err) {
        }
    }

    let sum = 0

    for (let i = 0; i < priceChecked.length; i++){
        sum += priceChecked[i]
    }

    return (  
        <div className="flightModal">
         <div className='flightContainer'>
                <FontAwesomeIcon icon={faX} className='cross' onClick={() => setOpenModal(false)} />
                <div className='flightDetails'>
                <div className="flightTop">
                <h1 className='containerTitle'>Your flight to {data.toCity}</h1>
                <h2 className='containerDirection'>Flight to {data.toCity}</h2>
                    <p className='containerTime'>{diffTime}</p>
                </div>
                <div className='flightCity'>
                        <FontAwesomeIcon icon={faCircle} className='circle'/>
                        <div className="cityDetails">
                            <p>{format(dates[0].startDate, `${('EEEE').substring(0,3)} dd MMM`)} · {data.departureTime} </p>
                            <h2 className='cityDirection'>{fromCity} · {data.fromCity}</h2>
                            </div>
                    </div>
                    <div className='flightLine'></div>
                    <div className='flightCity'>
                        <FontAwesomeIcon icon={faCircle} className='circle' />
                        <div className="cityDetails">
                            <p>{format(dates[0].startDate, `${('EEEE').substring(0,3)} dd MMM`)} · {data.arrivalTime} </p>
                            <h2 className='cityDirection'>{toCity} · {data.toCity}</h2>
                            </div>
                    </div>
                    <div className="flightTop">
                    <h2 className='containerDirection'>Flight to {data.fromCity}</h2>
                        <p className='containerTime'>{diffTime}</p>
                    </div> 
                    <div className='flightLine2'></div>
                    <div className='flightCity'>
                        <FontAwesomeIcon icon={faCircle} className='circle'/>
                        <div className="cityDetails">
                            <p>{format(dates[0].endDate, `${('EEEE').substring(0,3)} dd MMM`)} · {data.departureTime} </p>
                            <h2 className='cityDirection'>{toCity} · {data.toCity}</h2>
                            </div>
                    </div>
                    <div className='flightLine'></div>
                <div className='flightCity'>
                        <FontAwesomeIcon icon={faCircle} className='circle' />
                        <div className="cityDetails">
                            <p>{format(dates[0].endDate, `${('EEEE').substring(0,3)} dd MMM`)} · {data.arrivalTime} </p>
                            <h2 className='cityDirection'>{fromCity} · {data.fromCity}</h2>
                            </div>
                    </div>
                    <div className="border"></div>
                <div className='flightIncluded'>
                    <div className='flightBaggage'>
                        <h1>Included baggage</h1>
                        <p>The total baggage included in the price </p>
                    </div>
                    <FontAwesomeIcon icon={faSuitcase} className='package'/>
                    <div className='baggageDesc'>
                        <p>Economy class</p>
                        <p>1 personal item</p>
                        <p>Must go under the seat in front of you</p>
                    </div>
                    <div className='flightOption'>
                        <p>Included</p>
                    </div>
                    </div>
                    <div className="flightSeats">
                        {data?.seats?.map(item =>
                            <ReserveFlight key={item.id} item={item} dates={dates} setItemId={setItemId} seatNumber={seatNumber} setSeatNumber={setSeatNumber} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} adult={options.adult} children={options.children} priceChecked={priceChecked} setPriceChecked={setPriceChecked} />
                            )}
                    </div>
                </div>
            <div className='flightDiscount'>
                <div className='discountLeft'>
                    <div className='discountTitle'>
                        <p className='genius'>Genius</p>
                        <p className='discountTrip'>Trip saving</p>
                    </div>
                    <h1>Save 10% on your stay</h1>
                    <p>Once you've booked your flights, enjoy a 10% discount at participating Genius properties worldwide by signing into your account.</p>
                </div>
                <FontAwesomeIcon icon={faGift} className='gift' />
            </div>
            <div className='flightBottom'>
                <div className='leftPrice'>
                        <p className='flightPrice'>{sum}$</p>
                    <p className='priceDesc'> total price for all travellers</p>
                    </div>
                    {selectedSeats.length === 0 ?
                        <div className='selectFlightButton'>
                            <span className='warning'>Select your seats</span>
                            <button className='selectFlight' disabled onClick={handleClick}>Select</button>
                        </div>
                        :
                        <div className="selectFlightButtonOn">
                        <button className='selectFlight' onClick={handleClick}>Select</button>
                        </div>    
                    }
            </div>
            </div>
        </div>
    )
}

export default Flight
