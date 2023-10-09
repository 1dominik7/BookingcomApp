import React from 'react'
import './Headline.scss'
import { useNavigate } from 'react-router-dom'
import LanguageWindow from '../languageWindow/LandguageWindow'

const HeadLine = ({language, setLanguage, openLang, setOpenLang}) => {

    const navigate = useNavigate()

    const homePage = () => {
        navigate('/')
    }

    const navRegister = () => {
        navigate('/register')
    }

    const navLogin = () => {
        navigate('/login')
    }

  return (
    <div className='headlineContainer'>
          <div className="headlineWrapper">
            <div className="headlineLeft">
              <h3 onClick={homePage}>hotelBooking</h3>
            </div>
            <div className="headlineRight">
            <div className="navUPItem language" onClick={() => setOpenLang(true)} >
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
                 <div className="headlineRightButtons">
                    <div className='headlineLink' onClick={navRegister}>Register</div>
                    <div className='headlineLink' onClick={navLogin}>Sign in</div>
                </div>
          </div>
      </div>
      {openLang && <LanguageWindow language={language} setLanguage={setLanguage} setOpenLang={setOpenLang} openLang={openLang}/>}
    </div>
  )
}

export default HeadLine
