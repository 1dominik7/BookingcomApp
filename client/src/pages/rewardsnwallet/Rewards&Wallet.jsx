import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faCoins, faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import walletLogo from '../../img/wallet.png'
import BottomAccountInfo from '../../components/bottomAccountInfo/BottomAccountInfo'
import Footer from '../../components/footer/Footer'
import './RewardsnWallet.scss'

const RewardsnWallet = () => {
  return (
    <div className='rewardContainer'>
      <div className="rewardWrapper">
        <div className="rewardNav">
          <div className='rewardNavItem'>My dashboard</div>
          <div className='rewardNavItem'>Rewards & Wallet</div>
          <div className='rewardNavItem'>Reviews</div>
          <div className='rewardNavItem'>Settings</div>
          <div className='rewardNavItem'>List your property</div>
        </div>
        <div className="rewardWallet">
          <div className="rewardWalletDesc">
            <h1>Rewards & Wallet</h1>
            <span>Save money on your next adventure with Booking.com</span>
          </div>
          <div className="rewardWalletB">
          <div className="rewardWalletBalance">
            <div className="rewardWalletBalanceL">
              <img src={walletLogo} alt="" />
              <div className="rewardWalletBalanceLD">
                <h2>Wallet balance</h2>
                <span>Includes all spendable rewards</span>
                <h2 className='rewardWalletBalanceLDBalance'>$ 0</h2>
              </div>
          </div>
            <div className="rewardWalletBalanceR"> <span className='rewardWalletBalanceLDBlue'>View rewards activity</span>
            </div>
            </div>  
            </div>  
            <div className="rewardWalletBalanceB">
              <div className='rewardWalletBalanceBD' >Got a coupon code?  <span className='blue'>Add coupon into Wallet</span></div>
            </div> 
          <div className="rewardWalletBlueBgc"></div>
        </div>
        <div className="rewardBottomC">
          <div className="rewardBottomCLine"></div>
          <div className="rewardBottomCO">
            <div className="rewardBottomCODesc">
              <h3>What's Rewards & Wallet?</h3>
              <span>Need help? Visit FAQs</span>
            </div>
            <div className="rewardBottomCOOptions">
              <div className="rewardBottomCOOption">
              <FontAwesomeIcon icon={faAward} className='rewardBottomCOOptionIcon orange' />
                <div className="rewardBottomCOOptionD">
                  <span className='rewardBottomCOOptionDUp'>Book and earn travel rewards</span>
                  <span className='rewardBottomCOOptionDS'>Credits, vouchers, you name it! These are all spendable on your next Booking.com trip.</span>
                </div>
              </div>
              <div className="rewardBottomCOOption">
              <FontAwesomeIcon icon={faMobileScreen} className='rewardBottomCOOptionIcon blue' />
                <div className="rewardBottomCOOptionD">
                  <span className='rewardBottomCOOptionDUp'>Book and earn travel rewards</span>
                  <span className='rewardBottomCOOptionDS'>Credits, vouchers, you name it! These are all spendable on your next Booking.com trip.</span>
                </div>
              </div>
              <div className="rewardBottomCOOption">
              <FontAwesomeIcon icon={faCoins} className='rewardBottomCOOptionIcon yellow' />
                <div className="rewardBottomCOOptionD">
                  <span className='rewardBottomCOOptionDUp'>Book and earn travel rewards</span>
                  <span className='rewardBottomCOOptionDS'>Credits, vouchers, you name it! These are all spendable on your next Booking.com trip.</span>
                </div>
              </div>
            </div>
        </div>
        </div>
        <BottomAccountInfo />
        <div className="rewardFooter">
        <Footer />
        </div>  
      </div>
    </div>
  )
}

export default RewardsnWallet
