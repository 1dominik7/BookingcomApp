import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faComment, faQuestionCircle, faUserNinja } from '@fortawesome/free-solid-svg-icons'
import './NavUserPanel.scss'
import NavOpenPanel from '../navOpenPanel/NavOpenPanel'
import CurrencyWindow from '../currencyWindow/CurrencyWindow'
import LanguageWindow from '../languageWindow/LandguageWindow'

const NavUserPanel = ({checked, setChecked, language, setLanguage, setOpenLang, openLang}) => {

  const [openPanel, setOpenPanel] = useState(false)
  const [openCurrency, setOpenCurrency] = useState(false)
  const [openMessage, setOpenMessage] = useState(false)
  const [openNotifications, setOpenNotifications] = useState(false)

  return (
      <div className='navUPContainer'>
          <div className="navUPWrapper">
          <div className="navUPItems">
          <div className="navUPItem currency" onClick={() => setOpenCurrency(true)}>
              {checked === 1 && 'EUR'}
              {checked === 2 && 'PLN'}
              {checked === 3 && 'USD'}
              {checked === 4 && 'GBP'}
              {checked === 5 && 'CAD'}
              {checked === 6 && 'UAH'}
              {checked === 7 && 'NOK'}
              {checked === 8 && 'CHF'}
              {checked === 9 && 'CZK'}
            <div className="currencyDisplay">
              <div className='currencyDisplayCD'>Choose your currency</div>
            </div>
                </div>
                <div className="navUPItem language" onClick={() => setOpenLang(true)}>
            <div className="navUPIcon">
              {language === 1 && <>&#127468;&#127463;</>}
              {language === 2 && '🇵🇱'}
              {language === 3 && '🇺🇸'}
              {language === 4 && '🇮🇹'}
              {language === 5 && '🇺🇦'}
              {language === 6 && '🇳🇴'}
              {language === 7 && '🇩🇪'}
              {language === 8 && '🇨🇿'}
            </div>
                   <div className="languageDisplay">
              <div className='languageDisplayLD'>Choose your language</div>
            </div>
                </div>
                 <div className="navUPItem info">
            <FontAwesomeIcon icon={faQuestionCircle} className='navUPIcon' />
            <div className="infoDisplay">
              <div className='infoDisplayID'>Contact Customer Service</div>
            </div>
                </div> 
                <div className="navUPItem comment" >
            <FontAwesomeIcon icon={faComment} className='navUPIcon' onClick={() => setOpenMessage(!openMessage)}/>
            {!openMessage &&
              <div className="commentDisplay">
                <div className='commentDisplayCmD'>Open messaging</div>
              </div>
            }
            {openMessage && 
              <div className="commentActiv">
                <span>No messages</span>
              </div>
            }
                </div>
                  <div className="navUPItem notifications">
            <FontAwesomeIcon icon={faBell} className='navUPIcon' onClick={() => setOpenNotifications(!openNotifications)} />
            {!openNotifications && 
              <div className="notificationsDisplay">
                <div className='notificationsDisplayND'>View your notifications</div>
              </div>
            }
            {openNotifications && 
              <div className="notificationsActiv">
                <span>No notifications</span>
              </div>
            }
                  </div>
                  <div className="navUPItem property">
                    List your property
                  </div>  
          <div className="navUPItem account" style={openPanel === true ? {backgroundColor:"#003580"} : {}} onClick={()=>setOpenPanel(!openPanel)}>
                      <div className="navUPItemAvatar">
                        <FontAwesomeIcon icon={faUserNinja} className='navUPIcon'/>  
                      </div>
                      <div className="navUPItemAccount">
                          <h4>Your Account</h4>
                          <span className='accountGoldenTag'>Genius Level 1</span>
                      </div>
            {openPanel && (<div className="navOpenPanel"> <NavOpenPanel /></div>)}
                  </div> 
        </div>
        {openCurrency && <CurrencyWindow setOpenCurrency={setOpenCurrency} checked={checked} setChecked={setChecked} />}
        {openLang && <LanguageWindow setOpenLang={setOpenLang} language={language} setLanguage={setLanguage} />}
          </div>
    </div>
  )
}

export default NavUserPanel
