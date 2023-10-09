import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { Link, useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot, faCalendarDays, faChevronCircleRight, faChevronRight, faStar, faCheck, faLocation, faClock, faCircleInfo, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import './Attractions.scss'
import { format } from 'date-fns'
import ReserveAttraction from '../../components/reserveAttraction/ReserveAttraction'
import { Calendar } from 'react-date-range'

const Attractions = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2]

  const { data, loading, error, reFetch } = useFetch(`/attractions/find/${id}`)

  const [dates, setDates] = useState(location?.state?.dates)
  const [open, setOpen] = useState(false)
  const [slideNumber, setSlideNumber] = useState(false)
  const [active, setActive] = useState("1")
  const [timeHour, setTimeHour] = useState({})
  const [openFAQ1, setOpenFAQ1] = useState(false)
  const [openFAQ2, setOpenFAQ2] = useState(false)
  const [openFAQ3, setOpenFAQ3] = useState(false)
  const [openFAQ4, setOpenFAQ4] = useState(false)
  const [openFAQ5, setOpenFAQ5] = useState(false)
  const [tickets, setTickets] = useState({
      adult: 0, 
      children: 0,
  })
  const [openReserve, setOpenReserve] = useState(false)
  const [activeAlert, setActiveAlert] = useState(false)
  const [openDate, setOpenDate] = useState(false)
  const [value, setValue] = useState(dates[0]?.startDate || new Date())

  const secondDate = new Date(value.getTime() + 86400000)
  const thirdDate = new Date(value.getTime() + (2*86400000))
  const fourthDate = new Date(value.getTime() + (3*86400000))

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true)
  }

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 4   : slideNumber-1
    } else {
      newSlideNumber = slideNumber === 4 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber)
  }

  useEffect(() => {
    if (data)
    setTimeHour({ [data?.time?.slice(0,1)]:true});
  },[data])

  const toggleActive = (id) => {
     setTimeHour((prevState) => ({
      [id]: ( prevState[id]!==false ? true : false)
     }))
  }

  const toggleDate = (e) => {
    setActive(e.currentTarget.id)
  }

  const handleTickets = (name, operation) => {
    setTickets(prev => {
        return {
            ...prev,
            [name]: operation === 'i' ? tickets[name] + 1 : tickets[name] - 1,
    }})
  }

  const totalPrice = () => {
    return (data.cheapestPrice * tickets.adult)+((data.cheapestPrice/2) * tickets.children)
  }

  const nextHandler = () => {
    if (tickets.adult === 0 && tickets.children === 0) {
      setActiveAlert(true)
    }
      else {
        setActiveAlert(false)
        setOpenReserve(true)
      }
  }

  const Location = () => {
    if (data.title === 'Vistula River Sightseeing Cruise') {
      return ( <iframe title="mapFrame" src="https://maps.google.com/maps?width=100%35&amp;height=200&amp;hl=en&amp;q=52.238580,21.034990+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      className="location" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>)
  }
  else if (data.place === 'MAD Adolfo Suarez Madrid-Barajas Airport') {
      return ( <iframe title="mapFrame" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=MAD%20Adolfo%20Suarez%20Madrid-Barajas%20Airport+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      className="location" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>)
  }
  else if (data.place === 'LDN London Heathrow Airport') {
      return ( <iframe title="mapFrame" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=LDN%20London%20Heathrow%20Airport+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      className="location" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>)
  }
  }
  
  return (
    <div>
    <Header type="list" />
    {
    loading ?
      ("loading")
      : (
            <div className='attractionItemContainer'>
               {open && (<div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() =>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() =>handleMove('l')}/>
          <div className="sliderWrapper">
            <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={() =>handleMove('r')}/>
        </div>)}
              <div className="attractionItemNav">
                <Link className='listAttractionsSearchLink' to={'/attractions'} >Home</Link>
                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                <Link className='listAttractionsSearchLink' to={'/attractions/attractionsList'} >Attractions</Link>
                <FontAwesomeIcon icon={faChevronRight} className='arrow'/>
                <span>{data.title}</span>
              </div>
          <div className="attractionItemImage">            
            {data.photos?.map((photo,i) => (
              <div className={`attractionImgWrapper${i}`} key={i}
              >
                <img onClick={() => handleOpen(i)} src={photo} alt="" className='hotelImg'/>
              </div>
            ))}
                </div>
                <div className="attractionItemWrapper"> 
                <div className="attractionItemLeftSide">
                <div className="attractionItemTittle">
                  <h1>{data.title}</h1>
                  <span>{data.shortDesc}</span>
                </div>
                  <div className="attractionItemInfo">
                    <div className="attractionItemInfoTop">
                      <div className="attractionItemInfoTopMain">
                      <FontAwesomeIcon icon={faStar} 
                      className='attractionStart' />
                        <span><b>{data.rate}</b></span>
                      </div>
                      <div className="attractionItemInfoTopOther">
                        <span>Posted on Booking.com</span>
                        <span className='link'>See all reviews</span>
                   </div>
                    </div>
                    <div className="attractionItemInfoBottom">
                    <FontAwesomeIcon icon={faCheck} 
                      className='attractionCheck' />
                    <div className="attractionItemInfoBottomMain">
                        <span className='greenText'>Free cancellation available</span>
                        <span>Up to 24 hours before the start time</span>
                      </div>
                    </div>
                </div>
                  <div className="attractionItemText">
                    {data.desc}
                </div>
                  <div className="attractionItemLocation">
                    <h2>Location</h2>
                    <div className="attractionItemLocationMap"> {Location()}
                    </div>
                    <div className="attractionItemLocationInfo">
                    <FontAwesomeIcon icon={faLocationDot} 
                          className='attractionLocationDot' />
                      <div className="attractionItemLocationInfoTitle">
                        <h3>Departure point</h3>
                        <span>{data.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="attractionFAQ">
                    <h2>Frequently asked questions</h2>
                    <div className="attractionFAQWrapper">
                  <div className="attractionFAQ1">
                    <div className="attractionFAQMain" onClick={() => setOpenFAQ1(!openFAQ1)}>
                          <span>How do I book a ticket?</span>
                          {openFAQ1 ?
                            <FontAwesomeIcon icon={faChevronUp}
                              className='attractionFAQIcon' /> :
                              <FontAwesomeIcon icon={faChevronDown}
                              className='attractionFAQIcon' />
                          }
                        </div>
                        {openFAQ1 ?
                          <div className="attarcionFAQMore">
                            <span>Select a date and time from the drop-down menu. </span>
                            <span>Choose the payment amount and the number of tickets. </span>
                            <span>Select the Next button and enter your payment details.</span>
                            <span>You'll receive a confirmation email once the payment is complete. </span>
                            <span>You might need to print out or pick up physical tickets from a collection point for some attractions. You can find this information on the attraction page. </span>
                          </div>
                          :""
                        }
                      </div>
                      <div className="attractionFAQ1">
                    <div className="attractionFAQMain" onClick={()=>setOpenFAQ2(!openFAQ2)}>
                    <span>When do i pay?</span>
                          {openFAQ2 ?
                            <FontAwesomeIcon icon={faChevronUp}
                              className='attractionFAQIcon' />
                            :
                            <FontAwesomeIcon icon={faChevronDown}
                            className='attractionFAQIcon' />
                          }     
                    </div>
                        {openFAQ2 ?
                          <div className="attarcionFAQMore">
                            <span>Booking.com collects payment on behalf of the attraction operator when you book your ticket. </span>
                          </div>
                          :
                          ""
                        }
                      </div>
                      <div className="attractionFAQ1">
                    <div className="attractionFAQMain" onClick={()=>setOpenFAQ3(!openFAQ3)}>
                          <span>How do digital tickets work?</span>
                          {openFAQ3 ?
                            <FontAwesomeIcon icon={faChevronUp}
                              className='attractionFAQIcon' />
                            :
                            <FontAwesomeIcon icon={faChevronDown}
                              className='attractionFAQIcon' />
                          }
                    </div>
                        {openFAQ3 &&
                          <div className="attarcionFAQMore">
                            <span>Each digital ticket contains a unique code. Depending on which attraction you booked, this can be a QR or numerical code. </span>
                            <span>If your digital ticket contains a barcode or QR code, give it to the staff at the attraction's entrance or ticket collection point so they can scan it. </span>
                            <span>For those with numerical codes, just show your ticket to staff for verification. </span>
                          </div>
                        }
                      </div>
                      <div className="attractionFAQ1">
                        <div
                          onClick={()=>setOpenFAQ4(!openFAQ4)}className="attractionFAQMain" >
                          <span>Can I cancel or modify my tickets?</span>
                          {openFAQ4 ?
                            <FontAwesomeIcon icon={faChevronUp}
                              className='attractionFAQIcon' />
                            :
                            <FontAwesomeIcon icon={faChevronDown}
                              className='attractionFAQIcon' />
                          }
                    </div>
                          {openFAQ4 &&
                        <div className="attarcionFAQMore">
                              <span>You’ll need to check the policy on the specific ticket you’re booking. Last minute bookings might no longer have free cancellation available. </span>
                        </div>
                          }                
                      </div>
                      <div className="attractionFAQ1">
                        <div className="attractionFAQMain"
                        onClick={()=>setOpenFAQ5(!openFAQ5)}
                        >
                          <span>When will I get my free cancellation refund?</span>
                          {openFAQ5 ? 
                            <FontAwesomeIcon icon={faChevronUp}
                              className='attractionFAQIcon' />
                            :
                            <FontAwesomeIcon icon={faChevronDown}
                              className='attractionFAQIcon' />
                          }
                    </div>
                        {openFAQ5 &&
                          <div className="attarcionFAQMore">
                            <span>After you cancel, we'll immediately issue a full refund. Depending on your bank or payment provider, it can take 3-10 days for you to be refunded to your original payment method.</span>
                          </div>
                        }
                      </div>
                      </div>
                </div>
                </div>
                <div className="attractionItemRightSide">
                <div className="attractionDateRightSideTop">
                  <h2>Tickets and prices</h2>
                  <h3>Search ticket availability by date</h3>
                  <div className='blueText' onClick={()=>setOpenDate(!openDate)}>
                      {!openDate ? "Show more dates" : "Close calendar" }  
                    </div>
                    {openDate && <Calendar
                          value={value}
                          onChange={(newValue) => {
                            setValue(newValue)
                            console.log(value)
                          }}
                          activeStartDate={dates[0].startDate}
                          className='date'
                          minDate={new Date()}
                      />}
                  </div>
                  <div className="attractionDateOptions">
                    <div
                      id="1"
                      className={active==="1" ? "attractionDateOption active" : "attractionDateOption"}
                     onClick={toggleDate}
                    >
                      <span>{format(value,'EEE')}</span>
                      <h1>{format(value,'d')}</h1>
                      <span>{format(value,'MMM')}</span>
                      <span className={active==="1" ? "attractionDateOptionPositionTy on" : "attractionDateOptionPositionTy"}>Today</span>
                    </div>
                    <div 
                      id="2"
                    className={active === "2" ? "attractionDateOption active" : "attractionDateOption"}
                    onClick={toggleDate}
                    >
                    <span>{format(secondDate,'EEE')}</span>
                      <h1>{format(secondDate,'d')}</h1>
                      <span>{format(secondDate,'MMM')}</span>
                      <span className={active === "2" ? "attractionDateOptionPositionTw on" : "attractionDateOptionPositionTw"}>Tommorow</span>
                    </div>
                    <div
                      id="3"
                      className={active === "3" ? "attractionDateOption active" : "attractionDateOption"}
                      onClick={toggleDate}
                    >
                   <span>{format(thirdDate,'EEE')}</span>
                      <h1>{format(thirdDate,'d')}</h1>
                      <span>{format(thirdDate,'MMM')}</span>
                    </div>
                    <div 
                      id="4"
                      className={active==="4" ? "attractionDateOption active" : "attractionDateOption"}
                      onClick={toggleDate}
                    >
                   <span>{format(fourthDate,'EEE')}</span>
                      <h1>{format(fourthDate,'d')}</h1>
                      <span>{format(fourthDate,'MMM')}</span>
                    </div>
                  </div>
                  <div className="attractionHoursOptions">
                    <h2>Select time</h2>
                    <div className="attractionHourOption"> 
                      {data?.time?.map(
                        (item) => (
                          <div
                            key={item}
                            className={timeHour[`${item}`] ? "attractionHourOptionDivOn"
                              : "attractionHourOptionDiv"}
                            onClick={() => toggleActive(item)}
                          >{item}</div>
                        ))}
                       </div>
                  </div>
                  <div className="attractionTicketContainer">
                    { activeAlert &&
                      <span className='attractionAlert'>Please select at least one ticket</span>
                    } 
                    <h3>Cruise</h3>
                    <div className="attractionTicketLogos">
                      <div className="attractionTicketLogo">
                        <FontAwesomeIcon icon={faCircleInfo} 
                          className='attractionCheck' />
                        <span>Non-refundable</span>
                      </div>
                      <div className="attractionTicketLogo">
                        <FontAwesomeIcon icon={faClock} 
                          className='attractionCheck' />
                        <span>Duration: {data.duration}</span> 
                      </div>
                    </div>
                    <div className="attractionTicketOptions">
                      <h3>How many tickets?</h3>
                      <div className="attractionTicketAdult">
                        
                        <div className="attractionTicketAdultLeft">
                         <span>Adult (age 13+)</span> 
                          <span className='ticketPrice'>{data.cheapestPrice} $</span>
                        </div>
                        <div className="attractionTicketAdultRight">
                          <button
                            disabled={tickets.adult <= 0}
                            className='buttonMP'
                            onClick={() => handleTickets('adult', 'd')}
                          >-</button>
                          <div className='tickets'>{tickets.adult}</div>
                          <button
                            className='buttonMP'
                            onClick={() => handleTickets('adult', 'i')}
                          >+</button>
                        </div>
                        </div>
                      <div className="attractionTicketChild">
                      <div className="attractionTicketChildLeft">
                         <span> Child(age 0-12)</span>
                         <span className='ticketPrice'>{((data.cheapestPrice)/2)} $</span>
                        </div>
                        <div className="attractionTicketChildRight">
                          <button
                             disabled={tickets.children <= 0}
                            className='buttonMP'
                            onClick={() => handleTickets('children', 'd')}
                          >-</button>
                          <div className='tickets'>{tickets.children}</div>
                          <button
                            onClick={() => handleTickets('children', 'i')}
                            className='buttonMP'>+</button>
                      </div>
                      </div>
                    </div>
                    <div className="attractionTicketBottom">
                      <div className="ticketPrice"
                        style={{ visibility: totalPrice() === 0 ? "hidden" : "visible" }}>
                      <span className='ticketPriceTitle'>Total</span>
                        <span className='ticketPriceTotal'
                        >
                          {totalPrice()} $</span>
                      </div>
                      <div className="ticketButton"
                        onClick={nextHandler}
                      > Next </div>
                      </div>
                      </div>
                </div>
                
              </div>
              {openReserve && <ReserveAttraction setOpenReserve={setOpenReserve} data={data} tickets={tickets} time={timeHour} active={active} totalPrice={totalPrice} dates={value} id={id} />}
          </div>
          )
  }
  </div>
  )
}

export default Attractions
