import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCircleCheck, faSuitcase, faGauge, faGear, faSuitcaseRolling, faCheck, faQuestionCircle, faXmark, faChevronDown, faCircleInfo, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { format } from 'date-fns'
import './Car.scss'
import { AuthContext } from '../../context/AuthContext'
import Header from '../../components/header/Header'
import CarInstruction from '../../components/carInstruction/CarInstruction'
import CarInstructionDropOff from '../../components/carInstruction/CarInstructionDropOff'
import ReserveCar from '../../components/reserveCar/ReserveCar'

const Car = () => {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [dates, setDates] = useState(location.state.dates)       
  const [place, setPlace] = useState(location.state.place) 
  const [selectedValue1, setSelectedValue1] = useState(location.state.selectedValue1) 
  const [selectedValue2, setSelectedValue2] = useState(location.state.selectedValue2)  

  const { data, loading, error } = useFetch(`/carRentals/find/${id}`)

  const [openPickUp, setOpenPickUp] = useState(false)
  const [openDropOff, setOpenDropOff] = useState(false)
  const [openQuestionMark, setOpenQuestionMark] = useState(false)
  const [openTableOption1, setOpenTableOption1] = useState(false)
  const [openTableOption2, setOpenTableOption2] = useState(false)
  const [openTableOption3, setOpenTableOption3] = useState(false)
  const [openTableCarReservation, setOpenTableCarReservation] = useState(false)
  const [openTableCarReservationPackage, setOpenTableCarReservationPackage] = useState(false)
  const [insuranceActive, setInsuranceActive] = useState(false)

  const CarReservationHandler = () => {
    setOpenTableCarReservation(true)
  }

  const CarReservationPackageHandler = () => {
    setOpenTableCarReservationPackage(true)
  }


  const PickUpHandler = () => {
    setOpenPickUp(!openPickUp)
  }

  const DropOffHandler = () => {
    setOpenDropOff(!openDropOff)
  }
  
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate)
  
  const QuestionMarkHandler = () => {
    setOpenQuestionMark(!openQuestionMark)
  }

  return (  
    <div>
      <Header type="list" />
      {loading ?
        ("loading")
        : (
          <div className="carContainer">
            <div className="carWrapper">
              <div className="carTitle">
                <a href='/carRentals/carRentalsList'>Back to Search results</a>
                <h1>Your deal</h1>
                <p>Next … Checkout</p>
              </div>
              <div className="carInfo">
                <div className="carInfoLeft">
                <div className="carLines">
              <div className='carLine1'></div>
              <div className='carLine2'></div>
              </div>
                  <div className="carFreeCancellation">
                  <FontAwesomeIcon icon={faCircleCheck} className='carIcon' />
                    <p>Free cancellation up to 48 hours before pick-up</p>
                  </div>
                  <div className="carInfoLeftCenter">
                    <img src={data.logo} className="carPhoto" alt=""/>
                    <div className="carDetails">
                      <p className='carDetailsPick'>Top Pick</p>
                      <div className='carDetailsTitle'>
                        <h1>{data.brand}</h1>
                        <p>or similar small car</p>
                      </div>
                      <div className="carDetailsInfo">
                        <div className="carDetailsInfosLeft">
                          <div className='carDetailsInfoLeft'>
                          <FontAwesomeIcon icon={faUser} className='carFontIcon ' />
                            <p>{data.seats} seats</p>
                          </div>
                          <div className='carDetailsInfoLeft'>
                          <FontAwesomeIcon icon={faSuitcase} className='carFontIcon ' />
                            <p>1 Large bag</p>
                          </div>
                          <div className='carDetailsInfoLeft'>
                          <FontAwesomeIcon icon={faGauge} className='carFontIcon ' />
                            <p>Unlimited mileage</p>
                          </div>
                        </div>
                        <div className="carDetailsInfosRight">
                          <div className='carDetailsInfoRight'>
                          <FontAwesomeIcon icon={faGear} className='carFontIcon' />
                            <p>Manual</p>
                          </div>
                          <div className='carDetailsInfoRight'>
                          <FontAwesomeIcon icon={faSuitcaseRolling} className='carFontIcon' />
                            <p>1 Small bag</p>
                          </div>
                        </div>
                      </div>
                      <div className="carLocation">
                        <p>{data.city} Airport</p>
                        <p>Outside of Terminal</p>
                      </div>
                      <div className="carGuaranteed">
                        <FontAwesomeIcon icon={faCircleCheck} className='carIcon' />
                        <p>Guaranteed 2023 registered car</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carInfoRight">
                  <div className="carInfoRightDesc">
                    <div className="carInfoRightDescLogo">
                      <img src={data.brandLogo} className="carLogoBrand" alt="" />
                   Supplied by <b>{data.hireBrand}</b>
                    </div>
                    <h2>Pick-up and drop-off</h2>
                    <div className="carInfoRightDescAddress">
                      <div className='carFontLocationIcon' >
                        <div className='carIcon'></div>
                        <div className="carVerticalLine"></div>
                        <div className='carIcon'></div>
                        </div>
                      <div className="carInfoRightDescAddressTop">
                        <div className="carInfoRightDescAddressTop1">
                      <p>{`${format(dates[0].startDate, 'EEE, dd MMM') } · ${selectedValue1}`}</p>
                      <p><b>{data.place}</b></p>
                          <div className="carInfoRightDescAddressTop1Instr"
                          onClick={PickUpHandler}
                          >
                            View pick-up instruction
                      </div>
                        </div>
                        <div className="carInfoRightDescAddressTop1">
                      <p>{`${format(dates[0].endDate, 'EEE, dd MMM') } · ${selectedValue2}`}</p>
                      <p><b>{data.place}</b></p>
                          <div className="carInfoRightDescAddressTop1Instr"
                          onClick={DropOffHandler}
                          >
                            View drop-off instruction
                      </div>
                        </div>
                        </div>
                      </div>
                  </div>
                  <div className="carInfoRightPrice">
                    <h2>Car price breakdown</h2>
                  <div className="carInfoRightHireChange">
                    <p>Car hire charge</p>
                    <p>$ {data.cheapestPrice * days}</p>
                    </div>
                    <div className="carInfoRightHireChange">
                    <p>Price for {days} {days > 1 ? 'days' : 'day'}:</p>
                    <p>$ {data.cheapestPrice * days}</p>
                  </div>
                  </div>
                  </div>
              </div>
              <div className="carInculdedPrice">
                <h2>Included in the price</h2>
                <div className="carIncludedPriceOptions">
                  <div className="carIncludedPriceOptionsLeft">
                    <div className="carIncludedPriceOptionsLeftOption">
                      <FontAwesomeIcon icon={faCheck} className='carIncludedIcon' />
                      <p>Free cancellation up to 48 hours before pick-up</p>
                    </div>
                    <div className="carIncludedPriceOptionsLeftOption">
                    <FontAwesomeIcon icon={faCheck} className='carIncludedIcon' />
                      <p>Theft Protection with $ 800.60 excess</p>
                    </div>
                  </div>
                  <div className="carIncludedPriceOptionsRight">
                    <div className="carIncludedPriceOptionsRightOption">
                    <FontAwesomeIcon icon={faCheck} className='carIncludedIcon' />
                      <p>Collision Damage Waiver with $ 800.60 excess</p>
                    </div>
                    <div className="carIncludedPriceOptionsRightOption">
                    <FontAwesomeIcon icon={faCheck} className='carIncludedIcon' />
                      <p>Unlimited mileage</p>       
                  </div>
                  </div>
                </div>
              </div>
              <div className="carInsurancePackage">
                <div className="carInsurancePackageTitle">
                  <div className="carInsurancePackageTitleLeft">
                    <h2>Insurance...</h2>
                    <h2 className='carInsurancePackageTitleLeftGreen'>for peace of mind</h2>
                  </div>
                  <div className="carInsurancePackageTitleRight">
                    <FontAwesomeIcon icon={faCheck} className='carIncludedIcon' />
                    <h2 className='carInsurancePackageTitleLeftGreen' >FREE cancellation</h2>
                    <FontAwesomeIcon icon={faQuestionCircle} className='carIncludedIconQuestion'
                      onClick={QuestionMarkHandler} />
                    {openQuestionMark ? 
                      (
                        <div className="QuestionMark">
                          <p>Full refund if you cancel your policy anytime before pick-up
                          </p>
                          <FontAwesomeIcon icon={faXmark} className='carIncludedIcon' onClick={()=>setOpenQuestionMark(false)}/>
                          </div>
                      )
                        :""
                    }
                  </div>
                </div>
                <p>At the counter, the car hire company will block a deposit amount on your credit card. You could lose your whole deposit if the car is damaged or stolen, but as long as you have our Full Protection Insurance, Zurich Insurance will refund you! (The cover price you see includes all applicable taxes and fees).</p>
                <p>T&Cs and standard exclusions apply. Please read: <span className='carInsurancePackageBlue'>Policy Terms</span> | <span className='carInsurancePackageBlue'>IPID</span></p>
                <div className="carInsurancePackageTable">
                  <div className="carInsurancePackageTableTop">
                    <div className='carInsurancePackageTableTopOption1'>
                    <h3> What is covered</h3>
                    </div>
                    <div className='carInsurancePackageTableTopOption2'>
                    <h3>No additional insurance</h3>
                    </div>
                    <div className='carInsurancePackageTableTopOption3'>
                    <h3 className='carInsurancePackageTableTopOption3Green'>Full Protection Insurance</h3>
                    Total cover price: $ 40
                    </div>
                  </div>
                  <div className="carInsurancePackageTableBottom">
                    <div className="carInsurancePackageTableBottomOption">
                      <div className="carInsurancePackageTableBottomOptionContainer" onClick={() => {
                        setOpenTableOption1(!openTableOption1)
                      }}>
                        <div className="carInsurancePackageTableBottomOptionContainerBefore">
                        {!openTableOption1 ?
                    <FontAwesomeIcon icon={faChevronDown} className='carInsurancePacakageChevron' />
                          :
                    <FontAwesomeIcon icon={faChevronUp} className='carInsurancePacakageChevron' />
                        }
                          <span className='carInsurancePacakageSpan'>The car's excess</span>
                          </div>
                        {openTableOption1 ?
                          <span className='openTableOption'>Your car comes with standard damage cover (CDW) with an excess of $ 800.60 and Theft Protection (TP) with an excess of $ 800.60. If the bodywork is damaged or the car is stolen, the car hire company could charge you up to the excess amount – but Zurich Insurance will refund you. (Excludes personal possessions.)</span>
                          : ""
                          }
                        </div>
                      <FontAwesomeIcon icon={faXmark} className='carInsurancePacakageXMark' />
                      <FontAwesomeIcon icon={faCircleCheck} className='carInsurancePacakageCheck' />
                    </div>
                    <div className="carInsurancePackageTableBottomOption">
                      <div className="carInsurancePackageTableBottomOptionContainer" onClick={() => {
                        setOpenTableOption2(!openTableOption2)
                      }}>
                      <div className="carInsurancePackageTableBottomOptionContainerBefore">
                    {!openTableOption2 ?
                    <FontAwesomeIcon icon={faChevronDown} className='carInsurancePacakageChevron' />
                          :
                    <FontAwesomeIcon icon={faChevronUp} className='carInsurancePacakageChevron' />
                        }
                          <span className='carInsurancePacakageSpan'>Windows, mirrors, wheel & tyres</span>
                          </div>
                        {openTableOption2 ?
                          <span className='openTableOption'>Protection products often have exclusions, but Full Protection Insurance covers every exterior and mechanical part of your car, from wheels and windows to engine, roof & undercarriage. (Excludes cleaning costs.)</span>
                          : ""
                        }
                        </div>
                      <FontAwesomeIcon icon={faXmark} className='carInsurancePacakageXMark' />
                      <FontAwesomeIcon icon={faCircleCheck} className='carInsurancePacakageCheck' />
                    </div>
                    <div className="carInsurancePackageTableBottomOption">
                      <div className="carInsurancePackageTableBottomOptionContainer" onClick={() => {
                        setOpenTableOption3(!openTableOption3)
                      }}>
                      <div className="carInsurancePackageTableBottomOptionContainerBefore">
                      {!openTableOption3 ?
                    <FontAwesomeIcon icon={faChevronDown} className='carInsurancePacakageChevron' />
                          :
                    <FontAwesomeIcon icon={faChevronUp} className='carInsurancePacakageChevron' />
                        }
                          <span className='carInsurancePacakageSpan'>Administration and breakdown charges</span>
                          </div>
                        {openTableOption3 ?
                          <span className='openTableOption'>If you break down, lose your key(s) or lock yourself out, Zurich Insurance will refund any call-out charges, towing fees and key replacement costs. (Excludes flight / accommodation costs.)</span>
                          : ""
                        }
                        </div>
                      <FontAwesomeIcon icon={faXmark} className='carInsurancePacakageXMark' />
                      <FontAwesomeIcon icon={faCircleCheck} className='carInsurancePacakageCheck' />
                  </div>
                  </div>
                </div>
                <div className="carInsuranceNote">
                  <FontAwesomeIcon icon={faCircleInfo} className='carInsuranceNoteLogo' />
                  <span className='carInsuranceNoteInfo'><b>Please note:</b> Your own car insurance is unlikely to cover hire cars.</span>
                </div>
                <div className="carButtonsContainer">
                  <div className="carButton" onClick={CarReservationHandler}>
                    <h3>Go to book</h3>
                    <span>Without Full Protection Insurance </span>
                  </div>
                  <div className="carButtonBonus" onClick={CarReservationPackageHandler}>
                    <h3>Go to book</h3>
                    <span>With Full Protection Insurance </span>
                  </div>
                </div>
              </div>
            </div>
            <MailList />
            <Footer/>
          </div>)}
      {openPickUp && <CarInstruction setOpenPickUp={setOpenPickUp} data={data} />}
      {openDropOff && <CarInstructionDropOff setOpenDropOff={setOpenDropOff} data={data} />}
      {openTableCarReservation && <ReserveCar setOpenTableCarReservation={setOpenTableCarReservation} data={data} days={days} selectedValue1={selectedValue1} selectedValue2={selectedValue2} dates={dates} id={id} insuranceActive={insuranceActive} setInsuranceActive={setInsuranceActive} />}
      {openTableCarReservationPackage && <ReserveCar setOpenTableCarReservationPackage={setOpenTableCarReservationPackage} data={data} days={days} selectedValue1={selectedValue1} selectedValue2={selectedValue2} dates={dates} id={id} insuranceActive={insuranceActive===false ? true : true} setInsuranceActive={setInsuranceActive}/>}
        </div>
        )
}

export default Car
