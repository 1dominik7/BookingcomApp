import React, { useState } from 'react'
import viewImg from '../../img/viewImg.png'
import geniusPhoto from '../../img/geniusPhoto.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faCirclePlus, faCookieBite, faGift, faHeadphones, faHourglass, faInfoCircle, faKey, faLock, faMugHot, faPercent, faUnlock, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons'
import './GeniusAccount.scss'
import HeaderGenius from '../../components/headerGenius/HeaderGenius'
import BottomAccountInfo from '../../components/bottomAccountInfo/BottomAccountInfo'
import Footer from '../../components/footer/Footer'

const GeniusAccount = () => {

    const [faq, setFaq] = useState([false,false,false,false,false,false,false])

    const handleIconClick = (i) => {
        const item = [...faq];
        item[i] = !item[i];
        setFaq(item);
    };



  return (
      <div className='geniusAccountContainer'>
          <div className="geniusAccountImg">
                  <img src={viewImg} alt="" className='geniusImg' />
              </div>
          <div className="geniusAccountWrapper">
              <div className="geniusAccountDesc">
                  <span className='geniusAccountDescT1'>Travel more, spend less</span>
                  <span className='geniusAccountDescT2'>Genius</span>
                  <span className='geniusAccountDescT3'>hotelBooking.com's loyalty programme</span>
              </div>
              <div className="geniusAccountPanel">
                  <div className="geniusAccountPanelDesc">
                      <h2>You're at Genius Level 1</h2>
                    <div className="geniusAccountPanelDescC">
                          <span>Complete <b>5 stays</b> before 30 July 2025 to unlock <b>Genius Level 2</b> travel rewards.</span>
                        <div className="accountManagerIconC">
                          <FontAwesomeIcon icon={faInfoCircle} className='accountManagerIcon' />
                          <div className="accountManagerIconModal">
                          You need to complete a total of <b>5 stays in 2 years</b> to unlock <b>Genius Level 2</b>. Any stays completed over 2 years ago will expire and no longer count towards your progression in the programme.Previously unlocked discounts and rewards are yours to keep and enjoy forever.
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="geniusAccountPanelIcons">
                      <div className="geniusAccountPanelIconsSide">
                          <FontAwesomeIcon icon={faUser} className='geniusAccountIcon user' />
                          <span>Level 1</span>
                      </div>
                      <div className="geniusAccountPanelIconsSide">
                          <FontAwesomeIcon icon={faLock} className='geniusAccountIcon lock' />
                          <span>Level 2</span>
                      </div>
                      <div className="geniusAccountPanelIconsSideLine"></div>
                  </div>
              </div>
              <div className="geniusAccountDiscount">
                  <h1>Book your next stay for less</h1>
                  <span>Enjoy <b>free lifetime access</b> to Genius Level 1 discounts at <b>participating properties</b> worldwide.</span>
                  <div className="geniusAccountDiscountDesc">
                      <div className="geniusAccountDiscountDescSide">
                          <div className="geniusAccountDiscountDescSideTop">
                              <FontAwesomeIcon icon={faGift} className='geniusAccountIcon' />
                              <div className="geniusAccountDiscountDescSideTopC">
                                  <h4>Genius discounts</h4>
                                  <span>Enjoy discounted stays at over 390,000 <b>participating properties</b> worldwide.</span>
                              </div>
                          </div>
                          <div className="geniusAccountDiscountDescSideTopLine"></div>
                          <div className="geniusAccountDiscountDescSideBottom">
                              <div className="geniusAccountDiscountDescSideBottomC currentLvl">
                                  <div className="geniusAccountDiscountDescSideBottomCT currentGeniusLvl">
                                      <FontAwesomeIcon icon={faUnlock} className='geniusAccountIcon' />
                                      <div className='geniusAccountLvl'>Level 1</div>
                                  </div>
                                  <div className="geniusAccountDiscountDescSideBottomCB">
                                      <h4>10% discounts</h4> 
                                      <span>Applied to the price before taxes & charges</span>
                                  </div>
                              </div>
                              <div className="geniusAccountDiscountDescSideBottomC">
                                  <div className="geniusAccountDiscountDescSideBottomCT">
                                      <FontAwesomeIcon icon={faLock} className='geniusAccountIcon' />
                                      <div className='geniusAccountLvl'>Level 2</div>
                                  </div>
                                  <div className="geniusAccountDiscountDescSideBottomCB">
                                      <h4>15% discounts</h4> 
                                      <span>Applied to the price before taxes & charges</span>
                                  </div>
                              </div>
                              <div className="geniusAccountDiscountDescSideBottomC">
                                  <div className="geniusAccountDiscountDescSideBottomCT">
                                      <FontAwesomeIcon icon={faLock} className='geniusAccountIcon' />
                                      <div className='geniusAccountLvl'>Level 3</div>
                                  </div>
                                  <div className="geniusAccountDiscountDescSideBottomCB">
                                      <h4>20% discounts</h4> 
                                      <span>Applied to the price before taxes & charges</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="geniusAccountDiscountDescSideR">
                          <div className="geniusAccountDiscountDescSideRightL">
                              <div className="geniusAccountDiscountDescSideRightC">
                                  <div className="geniusAccountDiscountDescSideRightCT">
                                      <FontAwesomeIcon icon={faCookieBite} className='geniusAccountIcon' />
                                      <div className="geniusAccountDiscountDescSideRightCTD">
                                          <FontAwesomeIcon icon={faLock} className='geniusAccountIcon' />
                                          <span>Level 2</span>
                                      </div>
                                  </div>
                                  <div className="geniusAccountDiscountDescSideRightCT">
                                      <h5>Free breakfasts</h5>
                                      <span>Waking up is easy with complimentary breakfast, available on select stays</span>
                                  </div>
                              </div>
                              <div className="geniusAccountDiscountDescSideRightC">
                                  <div className="geniusAccountDiscountDescSideRightCT">
                                      <FontAwesomeIcon icon={faUserShield} className='geniusAccountIcon' />
                                      <div className="geniusAccountDiscountDescSideRightCTD">
                                          <FontAwesomeIcon icon={faLock} className='geniusAccountIcon' />
                                          <span>Level 3</span>
                                      </div>
                                  </div>
                                  <div className="geniusAccountDiscountDescSideRightCT">
                                      <h5>Priority support on stays</h5>
                                      <span>Get direct access to a live agent to discuss or modify any of your stays</span>
                                  </div>
                                  </div>
                            </div>
                              <div className="geniusAccountDiscountDescSideRightL">
                              <div className="geniusAccountDiscountDescSideRightC">
                                  <div className="geniusAccountDiscountDescSideRightCT">
                                      <FontAwesomeIcon icon={faKey} className='geniusAccountIcon' />
                                      <div className="geniusAccountDiscountDescSideRightCTD">
                                          <FontAwesomeIcon icon={faLock} className='geniusAccountIcon' />
                                          <span>Level 2</span>
                                      </div>
                                  </div>
                                  <div className="geniusAccountDiscountDescSideRightCT">
                                      <h5>Free room upgrades</h5>
                                      <span>Travel in style with free upgrades, automatically applied to select stays</span>
                                  </div>
                              </div>
                              <div className="geniusAccountDiscountDescSideRightC">
                                  <div className="geniusAccountDiscountDescSideRightCT">
                                      <FontAwesomeIcon icon={faHourglass} className='geniusAccountIcon hourGlass' />
                                  </div>
                                  <div className="geniusAccountDiscountDescSideRightCT">
                                      <h5>Stay tuned</h5>
                                      <span>We're always working on adding new and exciting travel rewards</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="geniusAccountSaving">
                  <div className="geniusAccountSavingL">
                      <h1>Savings made simple</h1>
                      <span>You’ll recognise <b>participating properties</b> by the blue Genius logo. All discounts and rewards are automatically applied when you book – you won’t have to lift a finger.</span>
                      <span>So simple, it's Genius.</span>
                </div>
                  <div className="geniusAccountSavingR">
                      <img src={geniusPhoto} alt="" />
                </div>
                </div>
              <div className="geniusAccountDiscover">
                  <h1>Discover new levels of travel rewards</h1>
                  <span>Each stay counts towards your progress in the programme. Once unlocked, your discounts and travel rewards are yours to keep forever. Where will you go next?</span>
                  <div className="geniusAccountDiscoverOptions">
                      <div className="geniusAccountDiscoverOptionsC">
                          <h3>Genius Level 1</h3>
                          <div className="geniusAccountDiscoverOptionsLine"></div>
                          <span>Unlock instant discounts at <b>participating properties</b> worldwide upon signing in.</span>
                          <div className="geniusAccountDiscoverOptionsCC">
                          <div className="geniusAccountDiscoverOptionsCDsc">
                              <FontAwesomeIcon icon={faPercent} className='geniusAccountIcon discount' />
                              <span>10% discounts</span>
                          </div>
                          </div>
                      </div>
                      <div className="geniusAccountDiscoverOptionsC">
                          <h3>Genius Level 2</h3>
                          <div className="geniusAccountDiscoverOptionsLine"></div>
                          <span>Enjoy this level at <b>participating properties</b> worldwide upon completing 5 stays in 2 years.</span>
                          <div className="geniusAccountDiscoverOptionsCC">
                          <div className="geniusAccountDiscoverOptionsCDsc">
                              <FontAwesomeIcon icon={faPercent} className='geniusAccountIcon discount' />
                              <span>10%-15% discounts</span>
                          </div>
                          <div className="geniusAccountDiscoverOptionsCDsc">
                              <FontAwesomeIcon icon={faMugHot} className='geniusAccountIcon' />
                              <span>Free breakfasts on select stays</span>
                          </div>
                          <div className="geniusAccountDiscoverOptionsCDsc">
                              <FontAwesomeIcon icon={faCirclePlus} className='geniusAccountIcon' />
                              <span>Free room upgrades on select stays</span>
                              </div>
                              </div>
                      </div>
                      <div className="geniusAccountDiscoverOptionsC">
                          <h3>Genius Level 3</h3>
                          <div className="geniusAccountDiscoverOptionsLine"></div>
                          <span>Enjoy this level at <b>participating properties</b> worldwide upon completing 15 stays in 2 years.</span>
                          <div className="geniusAccountDiscoverOptionsCC">
                          <div className="geniusAccountDiscoverOptionsCDsc">
                              <FontAwesomeIcon icon={faPercent} className='geniusAccountIcon discount' />
                              <span>10%-20% discounts</span>
                          </div>
                          <div className="geniusAccountDiscoverOptionsCDsc">
                              <FontAwesomeIcon icon={faMugHot} className='geniusAccountIcon' />
                              <span>Free breakfasts on select stays</span>
                          </div>
                          <div className="geniusAccountDiscoverOptionsCDsc">
                              <FontAwesomeIcon icon={faCirclePlus} className='geniusAccountIcon' />
                              <span>Free room upgrades on select stays</span>
                              </div>
                              <div className="geniusAccountDiscoverOptionsCDsc">
                              <FontAwesomeIcon icon={faHeadphones} className='geniusAccountIcon' />
                              <span>Priority support on all stays</span>
                              </div>
                              </div>
                      </div>
                  </div>   
              </div> 
              <div className="geniusBookingCom">
                  <h1>Booking.com is better with Genius</h1>
                  <span>Enjoy a lifetime of discounts and travel rewards at hundreds of thousands of properties worldwide with Booking.com’s loyalty programme. </span>
                  <div className="geniusBookingComC">
                      <div className="geniusBookingComCOption">
                        <div className="geniusBookingComCOptionLine"></div>  
                        <div className="geniusBookingComCOptionDesc">
                            <h3>Easy to find</h3>
                            <span>Once signed in, look for the blue Genius logo to find your travel rewards.</span>
                        </div>   
                      </div>
                      <div className="geniusBookingComCOption">
                        <div className="geniusBookingComCOptionLine"></div>  
                        <div className="geniusBookingComCOptionDesc">
                            <h3>Easy to keep</h3>
                            <span>After unlocking each Genius Level, the rewards are yours to enjoy for life.</span>
                        </div>   
                      </div>
                      <div className="geniusBookingComCOption">
                        <div className="geniusBookingComCOptionLine"></div>  
                        <div className="geniusBookingComCOptionDesc">
                            <h3>Easy to grow</h3>
                            <span>The more you stay, the more you get. The best part? Every stay counts towards your progress.</span>
                        </div>   
                      </div>
                  </div>
                </div>

              <div className="geniusFAQ">
                  <h1>Genius FAQs</h1>
                  <div className="geniusFAQC">
                      <div
                          className="geniusFAQCOpitons"
                          onClick={() => handleIconClick(1)}
                      >
                          <div className="geniusFAQCOption">
                              <h4>How do I claim my discounts and travel rewards?</h4>
                              {faq['1'] ? <FontAwesomeIcon icon={faChevronUp} className='geniusAccountIcon' /> :<FontAwesomeIcon icon={faChevronDown} className='geniusAccountIcon' />}
                          </div>
                          {faq[`1`]  ? <span>All discounts and travel rewards are automatically applied – you won’t have to do a thing! Simply look for the Genius logo when making a booking to find and enjoy your savings.</span> : ""}
                      </div>
                      <div className="geniusFAQCLine"></div>
                      <div
                          className="geniusFAQCOpitons" 
                          onClick={() => handleIconClick(2)}
                      >
                          <div className="geniusFAQCOption">
                              <h4>How many Genius Levels are there?</h4>
                              {faq['2'] ? <FontAwesomeIcon icon={faChevronUp} className='geniusAccountIcon' /> :<FontAwesomeIcon icon={faChevronDown} className='geniusAccountIcon' />}
                          </div>
                          {faq[`2`]  ? <span>There are currently 3 Genius Levels. Once you’ve met the required number of stays and unlocked a new level, it’s yours to keep and enjoy for life! Please note that it may take up to 72 hours for your status to update.</span> : ""}
                      </div>
                      <div className="geniusFAQCLine"></div>
                      <div
                          className="geniusFAQCOpitons"
                          onClick={() => handleIconClick(3)}
                      >
                          <div className="geniusFAQCOption">
                              <h4>Which properties offer Genius discounts and travel rewards?</h4>
                              {faq['3'] ? <FontAwesomeIcon icon={faChevronUp} className='geniusAccountIcon' /> :<FontAwesomeIcon icon={faChevronDown} className='geniusAccountIcon' />}
                          </div>
                          {faq[`3`] && <span>There are over 390,000 participating properties worldwide. Only well-reviewed properties are eligible to join the Genius programme and are required to offer at least one discounted option. These properties can also choose to offer other travel rewards, such as free breakfasts and room upgrades.</span>}
                      </div>
                      <div className="geniusFAQCLine"></div>
                      <div
                          className="geniusFAQCOpitons"
                          onClick={() => handleIconClick(4)}
                      >
                          <div className="geniusFAQCOption">
                              <h4>Will I get Genius discounts and travel rewards every time I book?</h4>
                              {faq['4'] ? <FontAwesomeIcon icon={faChevronUp} className='geniusAccountIcon' /> :<FontAwesomeIcon icon={faChevronDown} className='geniusAccountIcon' />}
                          </div>
                          {faq[`4`] && <span>No. While Genius discounts and rewards are offered on thousands of options at participating properties, they’re not guaranteed on every booking you make. Both participating properties and options with discounts or travel rewards can be recognised by the blue Genius logo. Be sure to check whether or not your option has a Genius discount or reward applied to it before booking your stay.</span>}
                      </div>
                      <div className="geniusFAQCLine"></div>
                      <div
                          className="geniusFAQCOpitons"
                          onClick={() => handleIconClick(5)}
                      >
                          <div className="geniusFAQCOption">
                              <h4>What happens if I cancel a reservation?</h4>
                              {faq['5'] ? <FontAwesomeIcon icon={faChevronUp} className='geniusAccountIcon' /> :<FontAwesomeIcon icon={faChevronDown} className='geniusAccountIcon' />}
                          </div>
                          {faq[`5`] && <span>To progress in Genius you have to complete a stay. That means your booking only counts towards your Genius status after you've stayed and checked out.</span>}
                      </div>
                      <div className="geniusFAQCLine"></div>
                      <div
                          className="geniusFAQCOpitons"
                          onClick={() => handleIconClick(6)}  
                      >
                          <div className="geniusFAQCOption">
                              <h4>How do I progress in the programme?</h4>
                              {faq['6'] ? <FontAwesomeIcon icon={faChevronUp} className='geniusAccountIcon' /> :<FontAwesomeIcon icon={faChevronDown} className='geniusAccountIcon' />}
                          </div>
                          {faq[`6`] && <span>To unlock the next level you must complete the required number of stays within a 2-year period. If a stay was completed longer than 2 years ago, it’ll no longer count towards your progress.</span>}
                      </div>
                      <div className="geniusFAQCLine"></div>
                      <div
                          className="geniusFAQCOpitons"
                          onClick={() => handleIconClick(7)}
                      >
                          <div className="geniusFAQCOption">
                              <h4>What is Priority support?</h4>
                              {faq['7'] ? <FontAwesomeIcon icon={faChevronUp} className='geniusAccountIcon' /> :<FontAwesomeIcon icon={faChevronDown} className='geniusAccountIcon' />}
                          </div>
                          {faq[`7`] && <span>Priority support is an expedited Customer Service line, giving you direct access to a live agent. This travel reward is available on every stay you book, whether it’s a Genius option or not.</span>}
                      </div>
                  </div>
              </div>
              <div className="geniusInfo">
                  <h1>Did you find everything you were looking for?</h1>
                  <div className="geniusInfoC">
                      <div className='geniusInfoCButton'>Yes</div>
                      <div className='geniusInfoCButton'>No</div>
                  </div>
              </div>
          </div>
          <HeaderGenius />
          <BottomAccountInfo />
          <Footer/>
    </div>
  )
}

export default GeniusAccount
