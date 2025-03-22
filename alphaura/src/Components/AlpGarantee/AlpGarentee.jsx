import React from 'react'
import star from "../../assets/images/stars.png";
import badge from '../../assets/images/Guaranteed.png'
import './AlpGarentee.css'
const AlpGarentee = () => {
     const stars = Array(5).fill(star);
  return (
    <div className='garentee'>
      <div className="garentee-container">
        <div className="garentee-wrapper">
            <div className='subhead'><span>Our Guarantee</span></div>
            <div><h4>100% Satisfaction Guarantee</h4></div>
            <div className='garentee-badge'><img src={badge} alt="" /></div>
            <div className='paragraph'><p>The market awareness level of women aged 45+ experiencing hair loss varies based on their familiarity with solutions and the problem itself. Here's a breakdown:
            </p></div>
            <div className='paragraph'>
                <p>If you are not 100% satisfied, or you do not see adequate results within those 30 days, simply request your money back and you will be refunded in full.</p>
            </div>
            <div className="alpshopnow-btn">SHOP NOW</div>
          
            <div className="rating">
              <div className="stars">
                {stars.map((img, index) => (
                  <img key={index} src={img} alt="star" />
                ))}
              </div>
              <div className="rating">
                <p>
                  Rated<span className="ratecount">4.8/5 </span>based on
                  <span className="reviews">+3,425 </span>reviews
                </p>
              </div>
            </div>
            </div>
        </div>
      </div>
  )
}

export default AlpGarentee
