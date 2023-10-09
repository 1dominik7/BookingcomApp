import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faPerson, faCar, faBuilding, faSuitcase, faCheck, faCheckCircle, faUser, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import  TaxiPhoto  from '../../img/img.png'
import './TaxisTransport.scss'

const TaxiTransport = () => {

    const [active, setActive] = useState("1")
    const [isActive1, setIsActive1] = useState(false)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [isActive4, setIsActive4] = useState(false)

    const toggleDate = (e) => {
        setActive(e.currentTarget.id)
    }
    
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  return (
    <div className='taxiTransportContainer'>
          <div className="taxiTransportWrapper">
              <div className="taxiTransportLeftSide">
                    <div className="taxiTransportLeftSideItem">
                      <FontAwesomeIcon icon={faCar} className='taxiTransportIcon' />  
                      <div className="taxiTransportLeftSideItemDesc">
                          <h2>Booking your airport taxi</h2>
                          <span>Confirmation is immediate. If your plans change, you can cancel for free up to 24 hours before your scheduled pick-up time</span>
                      </div>
                  </div>
                  <div className="taxiTransportLeftSideItem">
                      <FontAwesomeIcon icon={faPerson} className='taxiTransportIcon' />  
                      <div className="taxiTransportLeftSideItemDesc">
                          <h2>Meeting your driver</h2>
                          <span>You'll be met on arrival and taken to your vehicle. Your driver will track your flight, so they'll wait for you even if it's delayed</span>
                      </div>
                  </div>
                  <div className="taxiTransportLeftSideItem">
                      <FontAwesomeIcon icon={faBuilding} className='taxiTransportIcon' />  
                      <div className="taxiTransportLeftSideItemDesc">
                          <h2>Arriving at your destination</h2>
                          <span>Get to your destination quickly and safely – no waiting in line for a taxi, no figuring out public transport</span>
                      </div>
                    </div>
              </div>
                <div className="taxiTransportRightSide">
                  <img src={TaxiPhoto} alt="" />
                  <span>How does it work?</span>
                </div>
          </div>
          <div className="taxiTransportTypeWrapper">
                <div className="taxiTransportTypeWrapperItems">
                <h2>Airport taxis for any kind of trip</h2>
                <div className="taxiTransportTypeWrapperItemsOptions">
                      <div
                          id="1"
                          className={active === "1" ? "taxiTransportTypeWrapperItemsOption active" : "taxiTransportTypeWrapperItemsOption"}
                          onClick={toggleDate}
                      >1 - 3 passengers</div>
                      <div
                          id="2"
                          className={active === "2" ? "taxiTransportTypeWrapperItemsOption active" : "taxiTransportTypeWrapperItemsOption"}
                          onClick={toggleDate}
                      >4 - 7 passengers</div>
                      <div
                          id="3"
                          className={active === "3" ? "taxiTransportTypeWrapperItemsOption active" : "taxiTransportTypeWrapperItemsOption"}
                          onClick={toggleDate}
                      >All taxis</div>
                </div>
                      {active === "1" &&
                          (<div className="taxiTransportTypeWrapperItemsTypes">
                          <div className="taxiTransportTypeWrapperItemsType">
                              <div className="title">
                                  <h3>Standard</h3>
                                  <span>Skoda Octavia or similar</span>
                              </div>
                              <div className="options">
                                  <div className="option">
                                      <FontAwesomeIcon icon={faUser} className='taxiOptionIcon' />
                                      <span>3 passengers</span>
                                  </div>
                                  <div className="option">
                                      <FontAwesomeIcon icon={faSuitcase} className='taxiOptionIcon' />
                                      <span>2 standard bags</span>
                                  </div>
                                  <div className="option">
                                      <FontAwesomeIcon icon={faCheckCircle} className='taxiOptionIcon' />
                                      <span className='blue'>Meet & Greet included</span>
                                  </div>
                                  <div className="option">
                                      <FontAwesomeIcon icon={faCheck} className='taxiOptionIcon' />
                                      <span className='green'>Free cancellation</span>
                                  </div>
                              </div>
                              <button onClick={goToTop}>
                                  Search
                              </button>
                          </div>
                      <div className="taxiTransportTypeWrapperItemsType">
                            <div className="title">
                            <h3>Executive</h3>
                            <span>Mercedes-Benz E-Class or similar</span>
                            </div>
                            <div className="options">
                              <div className="option">
                                  <FontAwesomeIcon icon={faUser} className='taxiOptionIcon' />  
                                  <span>3 passengers</span>
                              </div>
                              <div className="option">
                                  <FontAwesomeIcon icon={faSuitcase} className='taxiOptionIcon' />  
                                  <span>2 standard bags</span>
                              </div>
                              <div className="option">
                                  <FontAwesomeIcon icon={faCheckCircle} className='taxiOptionIcon' />  
                                  <span className='blue'>Meet & Greet included</span>
                              </div>
                              <div className="option">
                                  <FontAwesomeIcon icon={faCheck} className='taxiOptionIcon' />  
                                  <span className='green'>Free cancellation</span>
                              </div>
                          </div>
                          <button onClick={goToTop}>
                              Search
                          </button>             
                      </div>
                          </div>)}
                          {active === "2" &&
                          (<div className="taxiTransportTypeWrapperItemsTypes">
                          <div className="taxiTransportTypeWrapperItemsType">
                              <div className="title">
                                  <h3>People carrier</h3>
                                  <span>Peugeot 5008 or similar</span>
                              </div>
                              <div className="options">
                                  <div className="option">
                                      <FontAwesomeIcon icon={faUser} className='taxiOptionIcon' />
                                      <span>5 passengers</span>
                                  </div>
                                  <div className="option">
                                      <FontAwesomeIcon icon={faSuitcase} className='taxiOptionIcon' />
                                      <span>5 standard bags</span>
                                  </div>
                                  <div className="option">
                                      <FontAwesomeIcon icon={faCheckCircle} className='taxiOptionIcon' />
                                      <span className='blue'>Meet & Greet included</span>
                                  </div>
                                  <div className="option">
                                      <FontAwesomeIcon icon={faCheck} className='taxiOptionIcon' />
                                      <span className='green'>Free cancellation</span>
                                  </div>
                              </div>
                              <button onClick={goToTop}>
                              Search
                          </button> 
                          </div>
                      <div className="taxiTransportTypeWrapperItemsType">
                            <div className="title">
                            <h3>Executive people carrier</h3>
                            <span>Mercedes-Benz V-Class or similar</span>
                            </div>
                            <div className="options">
                              <div className="option">
                                  <FontAwesomeIcon icon={faUser} className='taxiOptionIcon' />  
                                  <span>6 passengers</span>
                              </div>
                              <div className="option">
                                  <FontAwesomeIcon icon={faSuitcase} className='taxiOptionIcon' />  
                                  <span>6 standard bags</span>
                              </div>
                              <div className="option">
                                  <FontAwesomeIcon icon={faCheckCircle} className='taxiOptionIcon' />  
                                  <span className='blue'>Meet & Greet included</span>
                              </div>
                              <div className="option">
                                  <FontAwesomeIcon icon={faCheck} className='taxiOptionIcon' />  
                                  <span className='green'>Free cancellation</span>
                              </div>
                              </div>  
                              <button onClick={goToTop}>
                              Search
                          </button>     
                          </div>
                          <div className="taxiTransportTypeWrapperItemsType">
                            <div className="title">
                            <h3>Large people carrier</h3>
                            <span>Ford Tourneo or similar</span>
                            </div>
                            <div className="options">
                              <div className="option">
                                  <FontAwesomeIcon icon={faUser} className='taxiOptionIcon' />  
                                  <span>7 passengers</span>
                              </div>
                              <div className="option">
                                  <FontAwesomeIcon icon={faSuitcase} className='taxiOptionIcon' />  
                                  <span>7 standard bags</span>
                              </div>
                              <div className="option">
                                  <FontAwesomeIcon icon={faCheckCircle} className='taxiOptionIcon' />  
                                  <span className='blue'>Meet & Greet included</span>
                              </div>
                              <div className="option">
                                  <FontAwesomeIcon icon={faCheck} className='taxiOptionIcon' />  
                                  <span className='green'>Free cancellation</span>
                              </div>
                          </div>
                          <button onClick={goToTop}>
                              Search
                          </button>             
                      </div>
                      </div> )}
                  {active === "3" &&
                      <div className="taxiTransportTypeWrapperItemsTypesAll">
                          <div className="taxiTransportTypeWrapperItemsTypes">
                              <div className="taxiTransportTypeWrapperItemsType">
                                  <div className="title">
                                      <h3>Standard</h3>
                                      <span>Skoda Octavia or similar</span>
                                  </div>
                                  <div className="options">
                                      <div className="option">
                                          <FontAwesomeIcon icon={faUser} className='taxiOptionIcon' />
                                          <span>3 passengers</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faSuitcase} className='taxiOptionIcon' />
                                          <span>2 standard bags</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faCheckCircle} className='taxiOptionIcon' />
                                          <span className='blue'>Meet & Greet included</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faCheck} className='taxiOptionIcon' />
                                          <span className='green'>Free cancellation</span>
                                      </div>
                                  </div>
                                  <button onClick={goToTop}>
                                      Search
                                  </button>
                              </div>
                              <div className="taxiTransportTypeWrapperItemsType">
                                  <div className="title">
                                      <h3>Executive</h3>
                                      <span>Mercedes-Benz E-Class or similar</span>
                                  </div>
                                  <div className="options">
                                      <div className="option">
                                          <FontAwesomeIcon icon={faUser} className='taxiOptionIcon' />
                                          <span>3 passengers</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faSuitcase} className='taxiOptionIcon' />
                                          <span>2 standard bags</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faCheckCircle} className='taxiOptionIcon' />
                                          <span className='blue'>Meet & Greet included</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faCheck} className='taxiOptionIcon' />
                                          <span className='green'>Free cancellation</span>
                                      </div>
                                  </div>
                                  <button onClick={goToTop}>
                                      Search
                                  </button>
                              </div>
                          </div>
                          <div className="taxiTransportTypeWrapperItemsTypes">
                              <div className="taxiTransportTypeWrapperItemsType">
                                  <div className="title">
                                      <h3>People carrier</h3>
                                      <span>Peugeot 5008 or similar</span>
                                  </div>
                                  <div className="options">
                                      <div className="option">
                                          <FontAwesomeIcon icon={faUser} className='taxiOptionIcon' />
                                          <span>5 passengers</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faSuitcase} className='taxiOptionIcon' />
                                          <span>5 standard bags</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faCheckCircle} className='taxiOptionIcon' />
                                          <span className='blue'>Meet & Greet included</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faCheck} className='taxiOptionIcon' />
                                          <span className='green'>Free cancellation</span>
                                      </div>
                                  </div>
                                  <button onClick={goToTop}> 
                                      Search
                                  </button>
                              </div>
                              <div className="taxiTransportTypeWrapperItemsType">
                                  <div className="title">
                                      <h3>Executive people carrier</h3>
                                      <span>Mercedes-Benz V-Class or similar</span>
                                  </div>
                                  <div className="options">
                                      <div className="option">
                                          <FontAwesomeIcon icon={faUser} className='taxiOptionIcon' />
                                          <span>6 passengers</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faSuitcase} className='taxiOptionIcon' />
                                          <span>6 standard bags</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faCheckCircle} className='taxiOptionIcon' />
                                          <span className='blue'>Meet & Greet included</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faCheck} className='taxiOptionIcon' />
                                          <span className='green'>Free cancellation</span>
                                      </div>
                                  </div>
                                  <button onClick={goToTop}>
                                      Search
                                  </button>
                              </div>
                              <div className="taxiTransportTypeWrapperItemsType">
                                  <div className="title">
                                      <h3>Large people carrier</h3>
                                      <span>Ford Tourneo or similar</span>
                                  </div>
                                  <div className="options">
                                      <div className="option">
                                          <FontAwesomeIcon icon={faUser} className='taxiOptionIcon' />
                                          <span>7 passengers</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faSuitcase} className='taxiOptionIcon' />
                                          <span>7 standard bags</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faCheckCircle} className='taxiOptionIcon' />
                                          <span className='blue'>Meet & Greet included</span>
                                      </div>
                                      <div className="option">
                                          <FontAwesomeIcon icon={faCheck} className='taxiOptionIcon' />
                                          <span className='green'>Free cancellation</span>
                                      </div>
                                  </div>
                                  <button onClick={goToTop}>
                                      Search
                                  </button>
                              </div>
                          </div>
                      </div>
                  }
              </div>
          </div>
          <div className="taxiTransportBottomWrapper">
                <div className="taxiTransportBottomLeftSide">
                  <h2>Find out more about our airport taxi service</h2>
                  <span>See more FAQs on our help page</span>
                </div>
              <div className="taxiTransportBottomRightSide">
                  <div
                      className="taxiTransportBottomRightSideInfo"
                      onClick={()=>setIsActive1(!isActive1)}>
                      <div className="taxiTransportBottomRightSideInfoB">
                          <span className='taxiTransportBottomTitle'>What happens of my flight is early or delayed?</span>
                          <FontAwesomeIcon icon={!isActive1 ? faChevronDown : faChevronUp} className='taxiBottomnIcon' />
                      </div>
                      <div className="taxiTransportBottomRightSideInfoA">
                          {isActive1 &&
                              <span>Our Meet & Greet service means that if you provide your flight number when you're booking your airport taxi, we'll be able to track your flight and adjust your pick-up time automatically according to your actual arrival time. Once your flight has landed, your driver will wait for 45 minutes. This should give you plenty of time to pass through security, claim your baggage and head through to arrivals to meet your driver.</span>
                          }
                      </div>
                </div>
                  <div
                      className="taxiTransportBottomRightSideInfo"
                      onClick={()=>setIsActive2(!isActive2)}>
                      <div className="taxiTransportBottomRightSideInfoB">
                          <span className='taxiTransportBottomTitle'>What's included in the price?</span>
                          <FontAwesomeIcon icon={!isActive2 ? faChevronDown : faChevronUp} className='taxiBottomnIcon' />
                      </div> 
                      <div className="taxiTransportBottomRightSideInfoA">
                          {isActive2 &&
                              <span>Our prices include all taxes, fees, gratuity and toll road charges. If you book an airport pick-up, prices also include Meet & Greet as standard, which means we'll track your flight and wait for 45 minutes from the time your flight arrives. If you book a return taxi to the airport – or any other non-airport pick-up – your driver will wait for 15 minutes after the scheduled pick-up time. Please note that you may have to pay an additional cost for certain special requests or any amendments you want to make to your journey. </span>   
                          }
                      </div>
                  </div>
                  <div
                      className="taxiTransportBottomRightSideInfo"
                      onClick={()=>setIsActive3(!isActive3)}>
                      <div className="taxiTransportBottomRightSideInfoB">
                          <span className='taxiTransportBottomTitle'>How do I pay?</span>
                          <FontAwesomeIcon icon={!isActive3 ? faChevronDown : faChevronUp} className='taxiBottomnIcon' />
                      </div>
                      <div className="taxiTransportBottomRightSideInfoA">
                          {isActive3 &&
                              <span>All of our private transport services are pre-paid, which means you pay online at the time of booking. Payment is secure, and we accept most major credit cards, debit cards, PayPal, and eligible rewards in your Booking.com Wallet.</span>
                          }
                      </div>
                  </div>
                  <div
                      className="taxiTransportBottomRightSideInfo"
                      onClick={()=>setIsActive4(!isActive4)}>
                      <div className="taxiTransportBottomRightSideInfoB">
                          <span className='taxiTransportBottomTitle'>Can i cancel my booking?</span>
                          <FontAwesomeIcon icon={!isActive4 ? faChevronDown : faChevronUp} className='taxiBottomnIcon' />
                      </div>
                      <div className="taxiTransportBottomRightSideInfoA">
                          {isActive4 &&
                              <span>Yes. You can always cancel your booking for free up to 24 hours prior to your scheduled pick-up time. Some of our partners allow a shorter window for free cancellation. Check your booking confirmation for more information.</span>
                          }
                      </div>
                </div>
            </div>
            </div>
    </div>  
  )
}

export default TaxiTransport
