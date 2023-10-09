import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faWallet, faG, faSuitcase, faUserNinja, faSignOut  } from '@fortawesome/free-solid-svg-icons'
import './NavOpenPanel.scss'
import { AuthContext } from '../../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const NavOpenPanel = () => {

    const { loading, error, dispatch } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogout = async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGOUT" })
        try {
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }
    
  return (
    <div className="navAccPanel">
          <Link className="navAccPanelItems" to='/manageAccount'>
        <FontAwesomeIcon icon={faUserNinja} className='navUPIconL' /> 
        <span>Manage account</span>
    </Link>
    <Link className="navAccPanelItems" to='/myReservation'>
        <FontAwesomeIcon icon={faSuitcase} className='navUPIconL' /> 
        <span>Bookings & Trips</span>
    </Link>
    <Link className="navAccPanelItems" to='/genius'>
        <FontAwesomeIcon icon={faG} className='navUPIconL' /> 
        <span>Genius loyalty programme</span>
    </Link>
    <Link className="navAccPanelItems" to='/rewardsnWallet'>
        <FontAwesomeIcon icon={faWallet} className='navUPIconL' /> 
        <span>Rewards & Wallet</span>
    </Link>
    <Link className="navAccPanelItems" to='/myWishList'>
        <FontAwesomeIcon icon={faHeart} className='navUPIconL' />  
        <span>Saved</span>
    </Link>
    <Link className="navAccPanelItems" onClick={handleLogout} >
     <FontAwesomeIcon icon={faSignOut} className='navUPIconL' /> 
        <span>Sign out</span>
    </Link>
</div>
  )
}

export default NavOpenPanel
