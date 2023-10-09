import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import './LanguageWindow.scss'

const LanguageWindow = ({language, setLanguage, setOpenLang}) => {    

    const selectLanguage = (number) => {
        setLanguage(number)
        setOpenLang(false)
    }

  return (
    <div className='languageContainer' onClick={(e) => (e.target.className === "languageContainer" ? setOpenLang(false) : '')}>
          <div className="languageWrapper">
              <h2>Select your language</h2> 
              <div className="languageOptions">
                  <h4>All languages</h4>
                  <div className="languageOption">
                      <div className={language === 1 ? "languageActive" : "language"} onClick={() =>selectLanguage(1)}>
                          <div className="languageL">
                            <div className='flag'>&#127468;&#127463;</div>
                            <span>English (UK)</span>
                          </div>
                          {language===1 && 
                              <FontAwesomeIcon icon={faCheck} className='languageIcon' />
                          }
                      </div>
                      <div className={language === 2 ? "languageActive" : "language"} onClick={() =>selectLanguage(2)}>
                          <div className="languageL">
                            <div className='flag'>🇵🇱</div>
                            <span>Polski</span>
                          </div>
                          {language===2 && 
                              <FontAwesomeIcon icon={faCheck} className='languageIcon' />
                          }
                      </div>
                      <div className={language === 3 ? "languageActive" : "language"} onClick={() =>selectLanguage(3)}>
                          <div className="languageL">
                            <div className='flag'>🇺🇸</div>
                            <span>English (US)</span>
                          </div>
                          {language===3 && 
                              <FontAwesomeIcon icon={faCheck} className='languageIcon' />
                          }
                      </div>
                      <div className={language === 4 ? "languageActive" : "language"} onClick={() =>selectLanguage(4)} >
                          <div className="languageL">
                            <div className='flag'>🇮🇹</div>
                            <span>Italiano</span>
                          </div>
                          {language===4 && 
                              <FontAwesomeIcon icon={faCheck} className='languageIcon' />
                          }
                      </div>
                      <div className={language === 5 ? "languageActive" : "language"} onClick={() =>selectLanguage(5)} >
                          <div className="languageL">
                            <div className='flag'>🇺🇦</div>
                            <span>Українська</span>
                          </div>
                          {language===5 && 
                              <FontAwesomeIcon icon={faCheck} className='languageIcon' />
                          }
                      </div>
                      <div className={language === 6 ? "languageActive" : "language"} onClick={() =>selectLanguage(6)}>
                          <div className="languageL">
                            <div className='flag'>🇳🇴</div>
                            <span>Norsk</span>
                          </div>
                          {language===6 && 
                              <FontAwesomeIcon icon={faCheck} className='languageIcon' />
                          }
                      </div>
                      <div className={language === 7 ? "languageActive" : "language"} onClick={() =>selectLanguage(7)}>
                          <div className="languageL">
                            <div className='flag'>🇩🇪</div>
                            <span>Deutsch</span>
                          </div>
                          {language===7 && 
                              <FontAwesomeIcon icon={faCheck} className='languageIcon' />
                          }
                      </div>
                      <div className={language === 8 ? "languageActive" : "language"} onClick={() =>selectLanguage(8)}>
                          <div className="languageL">
                            <div className='flag'>🇨🇿</div>
                            <span>Čeština</span>
                          </div>
                          {language===8 && 
                              <FontAwesomeIcon icon={faCheck} className='languageIcon' />
                          }
                      </div>
                  </div>
              </div>
              <FontAwesomeIcon icon={faXmark} className='xMarkIcon' onClick={() => setOpenLang(false) } />
          </div>     
    </div>
  )
}

export default LanguageWindow
