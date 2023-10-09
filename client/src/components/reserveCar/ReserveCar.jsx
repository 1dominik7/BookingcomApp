import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCircleCheck, faSuitcase, faGauge, faGear, faSuitcaseRolling, faCheck, faXmark, faChevronDown,  faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import './ReserveCar.scss'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const ReserveCar = ({ data, setOpenTableCarReservation, setOpenTableCarReservationPackage, days, selectedValue1, selectedValue2, dates, id, insuranceActive, setInsuranceActive }) => {
  
  const [openModal, setOpenModal] = useState(false)

  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, })
  
  const navigate = useNavigate()

  const { user } = useContext(AuthContext)

   const handleClick = async () => {
        try {
            await axiosInstance.post(`/trips/${user._id}`,
            tripData
                )
            setOpenModal(false)
            navigate('/')
        }
         catch (err) {
        }
    }
  
    const tripData= {
      userId: user._id, 
      type: 'rentCar',
      id: id,
      data: {
          dataStart: dates[0]?.startDate,
          dataEnd: dates[0]?.endDate,  
      },
      insurance: insuranceActive,
      pickup: selectedValue1,
      returnTime: selectedValue2,
      price: data.cheapestPrice * days + (insuranceActive ? 40 : 0),
}

  return (
      <div className='reserveCar'>    
      <div className="reserveCarContainer">
        <div className="carTitle">
          {setOpenTableCarReservationPackage &&
            <span
              className='reserveCarBackButton'
            onClick={() => setOpenTableCarReservationPackage(false)}
            >Back to Search results</span>
          }
           {setOpenTableCarReservation &&
            <span
            className='reserveCarBackButton'
            onClick={() => setOpenTableCarReservation(false)}
            >Back to Search results</span>
          }
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
                        <h1>Fiat 500</h1>
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
                        </div>
                        <div className="carInfoRightDescAddressTop1">
                      <p>{`${format(dates[0].endDate, 'EEE, dd MMM') } · ${selectedValue2}`}</p>
                      <p><b>{data.place}</b></p>
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
              {insuranceActive && (<div className="carInfoRightHireChange">
                <p>Insurance</p>
                <p>$ 40</p>
              </div>)}
                    <div className="carInfoRightHireChange">
                    <p>Price for {days} {days > 1 ? 'days' : 'day'}:</p>
                <p>$ {data.cheapestPrice * days + (insuranceActive ? 40 : 0)}
                </p>
                  </div>
                  </div>
                  </div>
              </div>
        {setOpenTableCarReservation && (<FontAwesomeIcon icon={faXmark} className='carReserveXmark' onClick={() => setOpenTableCarReservation(false)
        } />)}
          {setOpenTableCarReservationPackage &&
          (<FontAwesomeIcon icon={faXmark} className='carReserveXmark' onClick={() => setOpenTableCarReservationPackage(false) 
        } />)}
        {setOpenTableCarReservation && (
          <div className="carReserveInsuranceProtectionInsurance"
            id={!insuranceActive ? "" : "active"}
          >
            <div className="carReserveInsuranceProtectionInsuranceTop">
              {!insuranceActive ?
                (<>
                  <h2>Are you sure you don't want Full Protection Insurance?</h2>
                  <h2>$40</h2>
                </>)
                :
                (<><h2>You’re protected</h2>
                  <h2>Included</h2></>)
              }
            </div>
            <div className="carReserveInsuranceProtectionInsuranceCentre">
              {!insuranceActive ? (<span>Your rental car’s basic cover has a $ 800.60 excess and only covers theft and bodywork damage. Full Protection Insurance covers so much more.</span>) :
                (<span>You’ll get a full refund if you’re charged for anything that Full Protection Insurance covers.</span>)
              }
              <div className="carReserveInsuranceProtectionInsuranceCentreModal" onClick={() => setOpenModal(!openModal)}>
                <div className="carReserveInsuranceProtectionInsuranceCentreModalClose">
                  <span>Find out more</span>
                  {!openModal ? <FontAwesomeIcon icon={faChevronDown} className='carIcon' /> :
                    <FontAwesomeIcon icon={faChevronUp} className='carIcon' />
                  }
                </div>
                {openModal && (<div className="carReserveInsuranceProtectionInsuranceCentreModalOpen">
                  <div className="carReserveInsuranceProtectionInsuranceCentreModalOpenOption">
                    <FontAwesomeIcon icon={faCheck} className='carIcon' />
                    <span>Refunds damage / theft excess charges</span>
                  </div>
                  <div className="carReserveInsuranceProtectionInsuranceCentreModalOpenOption">
                    <FontAwesomeIcon icon={faCheck} className='carIcon' />
                    <span>Refunds repair bills</span>
                  </div>
                  <div className="carReserveInsuranceProtectionInsuranceCentreModalOpenOption">
                    <FontAwesomeIcon icon={faCheck} className='carIcon' />
                    <span>Refunds breakdown & admin fees</span>
                  </div>
                </div>)}
              </div>
            </div>
            <div className="carReserveInsuranceProtectionInsuranceBottom">
              <div className="carReserveInsuranceProtectionInsuranceBottomLeft">
                <span>Exclusions apply.</span>
                <span className='blue'>Policy Terms  | IPID</span>
              </div>
              <div className="carReserveInsuranceProtectionInsuranceBottomRight" onClick={() => setInsuranceActive(!insuranceActive)}>
                {!insuranceActive ?
                  (<span>Add Full Protection Insurance</span>)
                  :
                  (<span>Remove Full Protection Insurance</span>)
                }
              </div>
            </div>
          </div>
          )}
        <div className="carReserveBottom">
        <div className="carReserveBottomLeft">
          <h2>Terms and conditions</h2>
            <p>By clicking ‘Book now’, you are confirming that you have read, understood and accepted our Terms of servie and the {data.hireBrand} rental terms.</p>
          </div>
          <div className="carReserveBottomRight">
            <div onClick={handleClick}>Book now</div>
          </div>
        </div>
          </div>
          </div>
  )
}

export default ReserveCar
