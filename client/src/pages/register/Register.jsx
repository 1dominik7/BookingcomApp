import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom'
import HideShow from '../../components/hideShow/HideShow';
import './Register.scss'

const Register = () => {

  const [credentials, setCredetials] = useState({
    email: undefined,
    password: undefined,
    password2: undefined
  })  

  const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL,})

  const [userError, setUserError] = useState(false)
  
  const { loading, error, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredetials(prev => ({ ...prev, [e.target.id]: e.target.value }))   
  }

  const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{10,}$/;
  
  const handleClick =async (e) => {
    e.preventDefault()
    if (credentials.password === credentials.password2 && (passwordPattern.test(credentials.password))) 
    {
      try {
        await axiosInstance.post('auth/register', credentials)
        navigate("/")
      } catch (err) {
        setUserError(true)
        console.log(credentials.email, credentials.password, credentials.password2, err)
      }
    }
  }

  const navLogin = () => {
    navigate('/login')
}

  return (
    <div className='register'> 
    <div className="rContainer">
        <h2>Create an account</h2>
        <div className="rRegisterC">
        <div className="rRegister">
            <span>Email address</span>
            <input name="email" type="text" placeholder='Enter your email address' id="email" onChange={handleChange} className="rInput" />
            {(userError === true) && <span className='rInputW'>User with this email already Exist</span>}
        </div>
        <div className="rRegister">
        <span>Password</span>
            <HideShow passText='Enter Password' id="password" handleChange={handleChange} />
            <span className={!passwordPattern.test(credentials.password) ? 'rInputDescW': 'rInputDesc'}>
              Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers.
            </span>
          </div>
          <div className="rRegister">
        <span>Confirm password</span>
            <HideShow name="name" passText='Confirm your password' id="password2" handleChange={handleChange}/>
            {credentials.password !== credentials.password2 && (<span className='rRegisterError1'>Passwords do not match</span>)}
          </div>
        </div>
        <div className="rRegisterButtonC">
        <button onClick={handleClick} className="rButton">Register</button>
        {error && <span className='rRegisterError1'>Please check if the email address or password you've entered is correct. </span>}
        </div>
        <div className="rRegisterMoreOption">
            <div className="line1"></div>
            <span>or use one of these options</span>
            <div className="line2"></div>
        </div>
        <div className="rRegisterIcons">
            <FacebookIcon className='rRegisterIcon facebook'/>
            <GoogleIcon className='rRegisterIcon gmail'/>
            <MobileFriendlyIcon className='rRegisterIcon phone'/>
        </div>
        <span className='rRegisterMore'>More ways to sign in</span>
        <div className="rRegisterLogin" >
          <span>Already have an account?</span>
          <div className="rRegisterLoginNav" onClick={navLogin}>
          <span className='rRegisterLoginSpan' > Log in</span>
            <ChevronRightIcon className='rRegisterLoginIcon'/>
            </div>
        </div>
        <div className="rRegisterInfo">
        By signing in or creating an account, you agree with our <span>Terms & conditions</span> and <span>Privacy statement</span>
        </div>
        <div className="rRegisterFooter">
            <span>All rights reserved. </span>
            <span>Copyright (2023) - hotelBooking  </span>
        </div>
    </div>
</div>
  )
}

export default Register
