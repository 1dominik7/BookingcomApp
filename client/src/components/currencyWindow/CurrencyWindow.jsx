import React, { useEffect, useState  } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadset, faCalendarDays, faThumbsUp, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import './CurrencyWindow.scss'

const CurrencyWindow = ({ setOpenCurrency, checked, setChecked }) => {   

    const selectCurrency = (number) => {
        setChecked(number)
        setOpenCurrency(false)
    }


  return (
    <div className="currencyContainer" onClick={(e) => (e.target.className === "currencyContainer" ? setOpenCurrency(false) : '')}>
          <div className="currencyWrapper">
              <h2>Select your currency</h2>
              <span>Where applicable prices will be converted to, and shown in, the currency that you select. The currency you pay in may differ based on your reservation, and a service fee may also apply.</span>
              <div className="currencyOptions">
                  <h4>All currencies</h4>
                  <div className="currencyOption">
                      <div className={checked === 1 ? "currencyActive" : "currency"} onClick={() =>selectCurrency(1)}>
                          <div className="currencyL">
                              <span>Euro</span>
                              <span>EUR</span>
                          </div>
                          {checked===1 && 
                              <FontAwesomeIcon icon={faCheck} className='currencyIcon' />
                          }
                      </div>
                      <div className={checked === 2 ? "currencyActive" : "currency"} onClick={() =>selectCurrency(2)}>
                          <div className="currencyL">
                              <span>Polish Złoty</span>
                              <span>PLN</span>
                          </div>
                          {checked===2 && 
                              <FontAwesomeIcon icon={faCheck} className='currencyIcon' />
                          }
                      </div>
                      <div className={checked === 3 ? "currencyActive" : "currency"} onClick={() =>selectCurrency(3)}>
                          <div className="currencyL">
                              <span>United States Dollar</span>
                              <span>USD</span>
                          </div>
                          {checked===3 && 
                              <FontAwesomeIcon icon={faCheck} className='currencyIcon' />
                          }
                      </div>
                      <div className={checked === 4 ? "currencyActive" : "currency"} onClick={() =>selectCurrency(4)} >
                              <div className="currencyL">
                                  <span>Pound Sterling</span>
                                  <span>GBP</span>
                              </div>
                        {checked === 4 &&   
                                  <FontAwesomeIcon icon={faCheck} className='currencyIcon' />
                          }
                      </div>
                      <div className={checked === 5 ? "currencyActive" : "currency"} onClick={() =>selectCurrency(5)} >
                          <div className="currencyL">
                              <span>Canadian Dollar</span>
                              <span>CAD</span>
                          </div>
                          {checked===5 && 
                              <FontAwesomeIcon icon={faCheck} className='currencyIcon' />
                          }
                      </div>
                      <div className={checked === 6 ? "currencyActive" : "currency"} onClick={() =>selectCurrency(6)} >
                          <div className="currencyL">
                              <span>Ukrainian Hryvnia</span>
                              <span>UAH</span>
                          </div>
                          {checked===6 && 
                              <FontAwesomeIcon icon={faCheck} className='currencyIcon' />
                          }
                      </div>
                      <div className={checked === 7 ? "currencyActive" : "currency"} onClick={() =>selectCurrency(7)}>
                          <div className="currencyL">
                              <span>Norwegian Krone</span>
                              <span>NOK</span>
                          </div>
                          {checked===7 && 
                              <FontAwesomeIcon icon={faCheck} className='currencyIcon' />
                          }
                      </div>
                      <div className={checked === 8 ? "currencyActive" : "currency"} onClick={() =>selectCurrency(8)}>
                          <div className="currencyL">
                              <span>Swiss Franc</span>
                              <span>CHF</span>
                          </div>
                          {checked===8 && 
                              <FontAwesomeIcon icon={faCheck} className='currencyIcon' />
                          }
                      </div>
                      <div className={checked === 9 ? "currencyActive" : "currency"} onClick={() =>selectCurrency(9)}>
                          <div className="currencyL">
                              <span>Czech Koruna</span>
                              <span>CZK</span>
                          </div>
                          {checked===9 && 
                              <FontAwesomeIcon icon={faCheck} className='currencyIcon' />
                          }
                      </div>
                  </div>
              </div>
              <FontAwesomeIcon icon={faXmark} className='xMarkIcon' onClick={() => setOpenCurrency(false) } />
          </div>     
    </div>
  )
}

export default CurrencyWindow
