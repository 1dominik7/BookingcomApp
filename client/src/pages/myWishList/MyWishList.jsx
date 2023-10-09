import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faChevronCircleUp, faHeart, faPencil, faXmark } from '@fortawesome/free-solid-svg-icons'
import Footer from '../../components/footer/Footer'
import './MyWishLish.scss'
import MailList from '../../components/mailList/MailList'
import BottomAccountInfo from '../../components/bottomAccountInfo/BottomAccountInfo'

const MyWishList = () => {

    const [openPanel, setOpenPanel] = useState({})
    let path = window.location.href

    const toggle = (id) => {
        setOpenPanel((prevState) => ({
         [id]: ( !prevState[id])
        }))
     }

  return (
      <div className='mwlC'>
          <div className="mwlW">
              <div className="mwlTop">
                  <span>Saved</span>
                  <div className="mwlTopBoxF"> 
                    <div className="mwlTopBoxFO" onClick={()=>toggle(1)}>
                      <span className='blue'>My next trip</span>
                      <div className="mwlTopBoxFCh">
                        <FontAwesomeIcon icon={faChevronCircleUp} className='mwlChover' />
                        <FontAwesomeIcon icon={faChevronCircleDown} className='mwlChover' />
                      </div>
                    </div>
                      {openPanel[`1`] &&
                          <div className='mwlTripPanel'>
                          <div className="mwlTripPanelL">
                              <span>My next trip</span>
                              <div className="mwlTripPanelLN">
                                  0
                              </div>
                          </div>
                          <FontAwesomeIcon icon={faPencil} className='mwlPencil' />
                      </div>}
                  </div>
                  <div className="mwlTopBoxO">
                    <div className="mwlTopBoxOC" onClick={()=>toggle(2)}>
                      Share the list 
                    </div>
                      {openPanel[`2`] &&
                        <div className="mwlTopBoxOPanel">
                              <h4>Copy the link to share this list:</h4>
                              <input type="text" defaultValue={path} />
                          </div>}
                  </div>
                  <div className="mwlTopBoxO" >
                    <div className="mwlTopBoxOC" onClick={()=>toggle(3)}>
                          Create a list
                      </div>
                      {openPanel[`3`] &&
                          <div className="mwlTopBoxOPanelList">
                            <div className="mwlTopBoxOPanelListC">
                                <span>Create a list </span>
                                <FontAwesomeIcon icon={faXmark} className='mwlTopBoxOPanelListCIcon' onClick={()=>toggle(3)}/> 
                            </div>
                              <input type="text" placeholder='Name your new list'/>
                              <div className='mwlTopBoxOPanelListB'>Create</div>
                        </div>}
                  </div>
              </div>
              <div className="mwlWLine"></div>
              <div className="mwlWMid">
                  <FontAwesomeIcon icon={faHeart} className='mwlHeart' />
                  <h2>Here are 3 simple steps to help you begin:</h2>
                  <div className="mwlWMidD">
                      <span>1. Search for a place to stay</span>
                      <span>2. Tap the heart icon when you find a property you like</span>
                      <span>3. You 'll find all you've saved here</span>
                  </div>
                  <div className="mwlWMidButton">
                      Start searching
                  </div>
              </div>
              <MailList />
              <BottomAccountInfo />
              <div className="mwlFooter">
                  <Footer />
              </div>    
          </div>
    </div>
  )
}

export default MyWishList
