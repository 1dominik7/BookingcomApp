import React from 'react'
import './PopularCarHire.scss'

const PopularCarHire = () => {
  return (
    <div className='popularCarHireContainer'>
          <div className='popularCarHire'>
              <img src="https://images.pexels.com/photos/14621/Warsaw-at-night-free-license-CC0.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='popularCarHirePhoto'/>
              <div className="popularCarHire">
                  <h2>Warsaw</h2>
                  <span>3 car hire locations</span>
                  <span>Average price of 50$ per day</span>
              </div>
      </div>
      <div className='popularCarHire'>
      <img src="https://images.pexels.com/photos/3722818/pexels-photo-3722818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='popularCarHirePhoto'/>
              <div className="popularCarHire">
                  <h2>Madrid</h2>
                  <span>4 car hire locations</span>
                  <span>Average price of 50$ per day</span>
              </div>
      </div>
          <div className='popularCarHire'>
          <img src="https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='popularCarHirePhoto'/>
              <div className="popularCarHire">
                  <h2>London</h2>
                  <span>5 car hire locations</span>
                  <span>Average price of 50$ per day</span>
              </div>
      </div>
    </div>
  )
}

export default PopularCarHire
