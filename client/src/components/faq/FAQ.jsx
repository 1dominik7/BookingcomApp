import React from 'react'
import './FAQ.scss'

const FAQ = () => {
  return (
      <div className='faqContainer'>
          <h1>Frequently asked questions</h1>
          <div className='faqItems'>
              <div className='faqItem'>
                  <h2>How do I find the cheapest flights on Booking.com?</h2>
                  <p>You can sort flights by price to see them from cheapest to most expensive. To find the cheapest flights, you also need to consider factors such as when you are booking and when you want to travel.</p>
              </div>
              <div className='faqItem'>
                  <h2>Do flights get cheaper closer to departure?</h2>
                  <p>Generally, flight prices are more likely to increase the closer you get to your flight date.</p>
              </div>
              <div className='faqItem'>
                  <h2>Can I book one way flight tickets on Booking.com?</h2>
                  <p>Yes, you can book one way, round trip and multi city flights on our site.</p>
              </div>
              <div className='faqItem'>
                  <h2>What is a flexible ticket?</h2>
                  <p>A flexible ticket allows you to change your flight with the same airline company by only paying the fare and tax difference. It can only be used for one confirmed change. You are able to add the flexible ticket when booking your flight.</p>
              </div>
              <div className='faqItem'>
                  <h2>How far in advance can I book a flight?</h2>
                  <p>You can book a flight up to one year before your departure date.</p>
              </div>
              <div className='faqItem'>
                  <h2>Does Booking.com charge credit card fees?</h2>
                  <p>No, we don't charge any credit card fees. You can always see exactly what you're paying for in the price breakdown when you review your booking.</p>
              </div>
          </div>
      
    </div>
  )
}

export default FAQ
