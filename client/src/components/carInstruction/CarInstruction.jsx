import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CarInstruction.scss'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const CarInstruction = ({ data, setOpenPickUp }) => {
  
    const CarLocation = () => {
        if (data.place === 'WWA Warsaw Frederic Chopin Airport') {
            return ( <iframe title="mapFrame" src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=WWA%20Warsaw%20Frederic%20Chopin%20Airport+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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
    <div className='carInstructionContainer'>
              <div className="carInstructionWrapper">
              <h1>Pick-up instructions</h1>
              <div className="carInstructionLogo">
                  <img src={data.brandLogo} alt="" className="carInstructionLogoImg" /><p>Supplied by <b>{data.hireBrand}</b></p>
              </div>
              <div className="carInstructionPickUpLocation">
                  <h3>Pick-up location</h3>
                  <p>{data.place} Terminal 1 level 2 (Zone A/B)</p>
              </div>
              <div className="carInstructionPickUpLocation">
                  <h3>Opening hours</h3>
                  <p>Mon - Sun 09:00 - 23:00</p>
              </div>
              <FontAwesomeIcon icon={faXmark} className='carInstructionCross' onClick={() => setOpenPickUp(false)} />
              <div className="carInstructionMap">
                {CarLocation()}
              </div>
          </div>
    </div>
  )
}

export default CarInstruction
