import React, { useContext, useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheck, faCarSide, faCarOn, faArrowRight, faChevronDown, faCreditCard, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import './Taxi.scss'
import { AuthContext } from '../../context/AuthContext'
import Header from '../../components/header/Header'
import axios from 'axios'

const Taxi = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [destination, setDestination] = useState(location.state.destination)
    const [from, setFrom] = useState(location.state.from)
    const [selectedValue1, setSelectedValue1] = useState(location.state.selectedValue1)
    const [dates, setDates] = useState(location.state.dates)
    const [value, setValue] = useState('1')
    const [openPhoneList, setOpenPhoneList] = useState(false)
    const [openInfo, setOpenInfo] = useState(false)

    const { user } = useContext(AuthContext)

    const { data, loading, error } = useFetch(`/taxi/find/${id}`)

    const changeContent = (e) => {
        setValue(e.target.id)
        setOpenPhoneList(false)
    }
        
    useEffect(() => {
    },[value])
    
    const valueFlag = () => {
        if (value === "1") {
            return <>&#x1F1EC;&#x1F1E7;</>
        } else if (value === "2") {
            return <>&#x1F1F5;&#x1F1F1;</>
        } else if (value === "3") {
            return <>&#x1F1E9;&#x1F1EA;</>
        }
    }

    const phoneN = () => {
        if (value === "1") {
            return <>+ 44</>
        } else if (value === "2") {
            return <>+ 48</>
        } else if (value === "3") {
            return <>+ 49</>
        }
    }

    const selectedValue2 = () => {
        const time = selectedValue1
        const min = data.duration

        let t = time.split(":"),      
            h = Number(t[0]),         
            m = Number(t[1]);         
        m+= min % 60;               
        h+= Math.floor(min/60);      
        if (m >= 60) { h++; m-=60 }   
        
        return (h+"").padStart(2,"0")+":"  
               +(m+"").padStart(2,"0")                    
    } 

    const tripData= {
        userId: user._id, 
        type: 'taxi',
        id: id,
        data: {
            dataStart: dates,
        },
        pickup: selectedValue1,
        price: data?.cheapestPrice,
        value1: from,
        value2: destination,
  }

    const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, })

    const navigate = useNavigate()

  const handleClick = async () => {
    try {
        await axiosInstance.post(`/trips/${user._id}`,
        tripData
            )
        navigate('/')
    }
     catch (err) {
    }
    }

  return (
      <div>
          <Header type="list" />
    {loading ?
      ("loading")
              :
              (
                  <div className="taxiContainer">
                      <div className="taxiWrapper">
                          <div className="taxiLeftSide">
                              <div className="taxiLeftSideJourney">
                              <h1 className='taxiListSearchTitle'>Your journey</h1>
                             <div className="taxiLeftSideJourneyTop">
                          <div className="taxiListSearcContainerInfo">
                          <FontAwesomeIcon icon={faCircle} className='taxiListSearcContainerInfoCircle' />
                          <div className="taxiListSearcContainerInfoDesc">
                            <span>{format(dates, "dd/MM/yyyy")} · {selectedValue1}</span>
                                              <h2>{from}</h2>
                          </div>
                          </div>
                                      <span className='taxiListSearcContainerDuration'>About {data.duration} min</span>
                                      <div className="taxiListSearcContainerLine"></div>
                          <div className="taxiListSearcContainerInfo">
                          <FontAwesomeIcon icon={faCircle} className='taxiListSearcContainerInfoCircle' />
                          <div className="taxiListSearcContainerInfoDesc">
                              <span>{format(dates, "dd/MM/yyyy")} ·{selectedValue2()} </span>
                             <h2>{destination}</h2>
                          </div>
                          </div>
                                  </div>
                                  <div className="taxiLeftSideJourneyBottom">
                                      <FontAwesomeIcon icon={faCarSide} className='taxiListSearcContainerInfoCircle' />
                                      <div className="taxiLeftSideJourneyBottomDesc">
                                          <h2>Your vehicle</h2>
                                          <span>{data.type} · Up to {data.seats} people · {data.suitcase} suitcases</span>
                                          <span>Provided by Via One</span>
                                      </div>
                                  </div>    
                              </div>       
                              <div className="taxiLeftSidePickUp">
                                  <h1>Pick-up details</h1>
                                  <div className="taxiLeftSidePickUpInfo">
                                      <FontAwesomeIcon icon={faCarOn} className='taxiLeftSideIcon' />
                                      <div className="taxiLeftSidePickUpInfoDesc">
                                          <h2>Finding your driver</h2>
                                          <span>Step-by-step instructions to meet your driver will be sent after your booking is confirmed.</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="taxiLeftSidePolicies">    
                                  <h1>Policies</h1>
                                  <div className="taxiLeftSidePoliciesInfo">
                                      <FontAwesomeIcon icon={faCheck} className='taxiLeftSideIcon' />
                                      <div className="taxiLeftSidePoliciesInfoDesc">
                                          <h2>Free cancellation</h2>
                                          <span>Cancel for free up to 24 hours before you go</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="taxiLeftSidePrice">
                                  <h1>Price breakdown</h1>
                                  <div className="taxiLeftSidePriceInfo">
                                      <div className="taxiLeftSidePriceInfoLeft">
                                          <FontAwesomeIcon icon={faArrowRight} className='taxiLeftSideIcon' />
                                          <span>One-way</span>
                                      </div>
                                      <span>$ {data.cheapestPrice}</span>
                                  </div>
                                  <hr/>
                                  <div className="taxiLeftSidePriceTotal">
                                      <div className="taxiLeftSidePriceTotalLeft">
                                          <h2>Total price</h2>
                                          <span>Including taxes</span>
                                      </div>
                                      <h2>$ {data.cheapestPrice}</h2>
                                  </div>
                              </div>
                          </div>
                          <div className="taxiRightSide">
                              <div className="taxiRightSideTop">
                                  <div className="taxiRightSideTopDesc">
                                      <h1>Add your contact details</h1>
                                      <span>This will help your driver reach you if necessary</span>
                                  </div>
                                  <div className="taxiRightSideTopInputs">
                                      <div className="taxiRightSideTopInput">
                                          <span className='taxiRightSideTopInputSpan'>First name(s)</span>
                                          <input type="text" className="taxiRightSideTopInputText" />
                                      </div>
                                      <div className="taxiRightSideTopInput">
                                          <span className='taxiRightSideTopInputSpan'>Last name(s)</span>
                                          <input type="text" className="taxiRightSideTopInputText" />
                                      </div>
                                      <div className="taxiRightSideTopInput">
                                          <span className='taxiRightSideTopInputSpan'>Email address</span>
                                          <input type="text" className="taxiRightSideTopInputText" />
                                      </div>
                                      <div className="taxiRightSideTopInput">
                                          <span>Phone number</span>
                                          <div className="taxiRightSideTopInputC" >
                                              <div className="taxiRightSideTopInputCDisplay" onClick={()=>setOpenPhoneList(!openPhoneList)}>
                                                 <div className='flagIcon'> {valueFlag()}</div>
                                                  <FontAwesomeIcon icon={faChevronDown} className='taxiRightSideTopIcon' />
                                              </div>
                                              {openPhoneList &&
                                                  <div className="taxiRightSideTopInputCOptions" onClick={changeContent} 
                                                  >
                                                      <div className="taxiRightSideTopInputCOption" id='1' >
                                                          United Kingdom (+44)
                                                      </div>
                                                      <div className="taxiRightSideTopInputCOption" id='2'>
                                                          Poland (+48)
                                                      </div>
                                                      <div className="taxiRightSideTopInputCOption" id='3'>
                                                          Germany (+49)
                                                      </div>
                                                  </div>
                                              }
                                              <div  className='taxiRightSideTopInputNumber' >
                                                  <span className='taxiRightSideTopInputNumberL'>{phoneN()}</span>
                                                  <input type="text" className='taxiRightSideTopInputNumberR'/>
                                              </div>
                                              </div>
                                        </div>
                                  </div>
                              </div>
                              <div className="taxiRightSideBottom">
                                  <div className="taxiRightSideBottomCard">
                                      <h1>How would you like to pay?</h1>
                                      <div className="taxiRightSideBottomCardC">
                                          <span>Cardholder's name</span>
                                          <input type="text" className="taxiRightSideBottomCardCI" />
                                      </div>
                                      <div className="taxiRightSideBottomCardC">
                                          <span>Card number</span>
                                          <div className="taxiRightSideBottomCardCN">
                                          <FontAwesomeIcon icon={faCreditCard} className='taxiRightSideBottomCardIcon' />
                                              <input type="text" className="taxiRightSideBottomCardCI" />
                                          </div>
                                      </div>
                                      <div className="taxiRightSideBottomCardCR">
                                        <div className="taxiRightSideBottomCardCL">
                                          <span>Expiry date</span>
                                              <input type="text" className="taxiRightSideBottomCardCI" placeholder='MM/YY' maxLength={5} />
                                          </div>
                                          <div className="taxiRightSideBottomCardCL">
                                          <span>CVC</span>
                                              <input type="text" className="taxiRightSideBottomCardCI"
                                              placeholder='CCC'
                                            maxLength={3}
                                              />
                                          </div>
                                      </div>
                                  </div>
                                  <hr/>
                                  <div className="taxiRightSideBottomInfo">
                                      <div className="taxiRightSideBottomInfoBefore" onClick={()=> setOpenInfo(!openInfo)}>
                                      <h1>Information about the Package Travel Directive</h1>
                                          {!openInfo ?
                                              <FontAwesomeIcon icon={faChevronDown} className='taxiRightSideBottomCardIcon' />
                                              :
                                              <FontAwesomeIcon icon={faChevronUp} className='taxiRightSideBottomCardIcon' />
                                          }
                                      </div>
                                      {openInfo &&
                                          <span className="taxiRightSideBottomInfoAfter">
                                              If you book any additional travel services during the same visit to Booking.com, the travel service may become part of a Linked Travel Arrangement. In that case Booking.com has, as required by EU law, protection in place to refund your payments to Booking.com for services not performed because of our insolvency. We grant this protection regardless of your booking location. Please note that this does not provide a refund in the event of the insolvency of the relevant service provider. Please click here for more information.
                                          </span>
                                      }
                                  </div>
                                  <hr/>
                                  <div className="taxiRightSideBottomInfo1">
                                      <span>By clicking 'Book and pay', you’re accepting our Privacy Statement and Terms and Conditions.</span>
                                  </div>
                                  </div>
                                  <div className="taxiRightSideBottomInfo2">
                                      <span>Please see our Privacy Statement to understand how we use and protect your personal information. </span>
                                  </div>
                                  <div className="taxiRightSideBottomInfo3">
                                      <span>Privacy Statement</span>
                                  </div>
                                  <div className="taxiRightSideBottomButtonC">
                                  <button
                                      className='taxiRightSideBottomButton'
                                      onClick={handleClick}
                                  >Book and pay</button>
                                  </div>
                          </div>
                      </div>
      </div>)}
  </div>
  )
}

export default Taxi
