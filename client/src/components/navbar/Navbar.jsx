import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faMuseum, faPlane, faQuestionCircle, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../context/AuthContext'
import './Navbar.scss'
import NavUserPanel from '../navUserPanel/NavUserPanel'
import CurrencyWindow from '../currencyWindow/CurrencyWindow'
import LanguageWindow from '../languageWindow/LandguageWindow'

const Navbar = ({openAccPanelHandle, userNavbar, setSelected, selected, openLang, setOpenLang, language, setLanguage}) => {
  
  const [openCurrency, setOpenCurrency] = useState(false)
  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem("checked")) || 3)

  const { user } = useContext(AuthContext)

  const location = useLocation()
  let path = location.pathname

  useEffect(() => {
    window.localStorage.setItem("checked", checked);
  }, [checked]);
 
  if (path === '/') {
    setSelected(1)  
  }

  const navigate = useNavigate()

  const navRegister = () => {
    navigate('/register')
}

const navLogin = () => {
    navigate('/login')
  }

  return (
    (userNavbar === true) ?
      (
        < div className='navbarUser' >
    <div className='navContainer'>
      <Link to="/" style={{color: "inherit", textDecoration:"none"}}>
            <span className='logo'>hotelBooking</span>
      </Link>    
      {user ? (
        <div className="navUserPanel">
                <NavUserPanel checked={checked} setChecked={setChecked} language={language} setLanguage={setLanguage} setOpenLang={setOpenLang} openLang={openLang} />
        </div>
        ) : (
          <div className="navItems">
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
          <FontAwesomeIcon icon={faQuestionCircle} className='navIcon'/>
          <span className='navDesc'>List your properties</span>
          <div className="navButtonC">
            <button className="navButton" onClick={navRegister}>Register</button>
            <button className="navButton" onClick={navLogin}>Login</button>
          </div>
        </div>
      )}
      </div>
      </div>
      )
      :
    < div className = 'navbar' >
      <div className='navContainer'>
        <Link to="/" style={{color: "inherit", textDecoration:"none"}}>
              <span className='logo'>hotelBooking</span>
        </Link>    
        {user ? (
          <div className="navUserPanel">
            <NavUserPanel openAccPanelHandle={openAccPanelHandle} checked={checked} setChecked={setChecked} language={language} setLanguage={setLanguage} setOpenLang={setOpenLang} openLang={openLang} />
          </div>
          ) : (
          <div className="navItems">
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
            <FontAwesomeIcon icon={faQuestionCircle} className='navIcon'/>
            <span className='navDesc'>List your properties</span>
            <div className="navButtonC">
              <button className="navButton" onClick={navRegister}>Register</button>
              <button className="navButton" onClick={navLogin}>Login</button>
            </div>
          </div>
        )}
      </div>
        <div className="navList">
          <Link to={"/"} className='navListItem'
            id={selected === 1  ? 'active' : ''}
          onClick={()=>setSelected(1)}
        > 
                  <FontAwesomeIcon icon={faBed} />
                  <span>Stays</span>
              </Link>
                  <Link to={"/flights"} className='navListItem'
          id={selected === 2 ? 'active' : '' }
          onClick={()=>setSelected(2)}  
        >
                  <FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span>
              </Link>
        <Link to={"/carRentals"} className='navListItem'
          id={selected === 3 ? 'active' : '' }
          onClick={()=>setSelected(3)}
        >
                  <FontAwesomeIcon icon={faCar} />
                  <span>Car rentals</span>
              </Link>
        <Link to={"/attractions"} className='navListItem'
          id={selected === 4 ? 'active' : '' }
        onClick={()=>setSelected(4)}>
          <FontAwesomeIcon icon={faMuseum} />
                  <span>Attractions</span>
              </Link>
        <Link to={"/taxi"} className='navListItem'
          id={selected === 5 ? 'active' : '' }
        onClick={()=>setSelected(5)}>
                  <FontAwesomeIcon icon={faTaxi} />
                  <span>Airport taxis</span>
                </Link>
        </div>
        {openCurrency && <CurrencyWindow setOpenCurrency={setOpenCurrency} checked={checked} setChecked={setChecked} />}
        {openLang && <LanguageWindow language={language} setLanguage={setLanguage} setOpenLang={setOpenLang} openLang={openLang} />}
    </div >
  )
}

export default Navbar
