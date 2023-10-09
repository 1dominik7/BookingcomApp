import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import { useNavigate } from 'react-router-dom'
import './Login.scss'
import HideShow from '../../components/hideShow/HideShow';

const Login = () => {
    const [credentials, setCredetials] = useState({
        email: undefined,
        password: undefined
    })

    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

    const { loading, error, dispatch } = useContext(AuthContext)
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredetials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }


    const handleClick =async (e) => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })
        try {
            const res = await axiosInstance.post('auth/login', credentials)
            dispatch({type:"LOGIN_SUCCESS", payload: res.data})
            navigate("/")
        } catch (err) {
            dispatch({type:"LOGIN_FAILURE", payload: err.response.data})
        }
    }

    const navRegister = () => {
        navigate('/register')
    }


  return (
    <div className='login'> 
          <div className="lContainer">
              <h2>Sign in</h2>
              <div className="lLoginC">
              <div className="lLogin">
                <span>Email address</span>
                      <input type="text" placeholder='Enter your email address' id="email" onChange={handleChange} className="lInput" name="email" />
              </div>
              <div className="lLogin">
              <span>Password</span>
                <HideShow name="password" handleChange={handleChange} id="password"/>
                </div>
              </div>
              <div className="lLoginButtonC">
              <button disabled={loading} onClick={handleClick} className="lButton">Login</button>
              {error && <span className='lErrorMess'>{error.message}</span>}
              </div>
              <div className="lLoginMoreOption">
                  <div className="line1"></div>
                  <span>or use one of these options</span>
                  <div className="line2"></div>
              </div>
              <div className="lLoginIcons">
                  <FacebookIcon className='lLoginIcon facebook'/>
                  <GoogleIcon className='lLoginIcon gmail'/>
                  <MobileFriendlyIcon className='lLoginIcon phone'/>
              </div>
              <span className='lLoginMore'>More ways to sign in</span>
              <div className="lLoginRegister" onClick={navRegister}>
                  Create Account
              </div>
              <div className="lLoginInfo">
              By signing in or creating an account, you agree with our <span>Terms & conditions</span> and <span>Privacy statement</span>
              </div>
              <div className="lLoginFooter">
                  <span>All rights reserved. </span>
                  <span>Copyright (2023) - hotelBooking  </span>
              </div>
          </div>
    </div>
  )
}

export default Login
