import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faCreditCard, faLock, faPhotoFilm, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/footer/Footer'
import './ManageAccount.scss'

const ManageAccount = () => {
  return (
      <div className='accountManagerContainer'>
          <div className="accountManagerWrappper">
              <div className="accountManagerTitle">
                  <h1>Account settings</h1>
                  <span>Manage your Booking.com experience</span>
              </div>
              <div className="accountManagerOptions">
                  <div className="accountManagerOptionsColumn">
                      <div className="accountManagerOption">
                          <div className="accountManagerOptionIcon">
                          <FontAwesomeIcon icon={faUserPlus} className='accountManagerIcon' />
                          </div>
                          <div className="accountManagerOptionDesc">
                              <h3>Personal details</h3>
                              <span>Update your info and find out how it's used</span>
                              <span className='accountManagerBluetext'>Manage personal details.</span>
                          </div>
                      </div>
                      <div className="accountManagerOption">
                          <div className="accountManagerOptionIcon">
                          <FontAwesomeIcon icon={faLock} className='accountManagerIcon' />
                          </div>
                          <div className="accountManagerOptionDesc">
                              <h3>Security</h3>
                              <span>Adjust your security settings and set up two-factor authentication</span>
                              <span className='accountManagerBluetext'>Manage personal security.</span>
                          </div>
                      </div>
                      <div className="accountManagerOption">
                          <div className="accountManagerOptionIcon">
                          <FontAwesomeIcon icon={faPhotoFilm} className='accountManagerIcon' />
                          </div>
                          <div className="accountManagerOptionDesc">
                              <h3>Privacy</h3>
                              <span>Exercise your privacy rights and control how your data is used.</span>
                              <span className='accountManagerBluetext'>Manage privacy</span>
                          </div>
                      </div>
                      <div className="accountManagerOption">
                          <div className="accountManagerOptionIcon">
                          <FontAwesomeIcon icon={faUsers} className='accountManagerIcon' />
                          </div>
                          <div className="accountManagerOptionDesc">
                              <h3>Other travelers</h3>
                              <span>Add or edit info about the people you're traveling with.</span>
                              <span className='accountManagerBluetext'>Manage travelers</span>
                          </div>
                      </div>
                  </div>
                  <div className="accountManagerOptionsColumn">
                  <div className="accountManagerOption">
                          <div className="accountManagerOptionIcon">
                          <FontAwesomeIcon icon={faBars} className='accountManagerIcon' />
                          </div>
                          <div className="accountManagerOptionDesc">
                              <h3>Preferences</h3>
                              <span>Change your language, currency, and accessibility requirements.</span>
                              <span className='accountManagerBluetext'>Manage preferences</span>
                          </div>
                      </div>
                  <div className="accountManagerOption">
                          <div className="accountManagerOptionIcon">
                          <FontAwesomeIcon icon={faCreditCard} className='accountManagerIcon' />
                          </div>
                          <div className="accountManagerOptionDesc">
                              <h3>Payment details</h3>
                              <span>Securely add or remove payment methods to make it easier when you book.</span>
                              <span className='accountManagerBluetext'>Manage payment details</span>
                          </div>
                      </div>
                  <div className="accountManagerOption">
                          <div className="accountManagerOptionIcon">
                          <FontAwesomeIcon icon={faBell} className='accountManagerIcon' />
                          </div>
                          <div className="accountManagerOptionDesc">
                              <h3>Email notifications</h3>
                              <span>Decide what you want to be notified about, and unsubscribe from what you don't.</span>
                              <span className='accountManagerBluetext'>Manage notifications</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer/>
    </div>
  )
}

export default ManageAccount
