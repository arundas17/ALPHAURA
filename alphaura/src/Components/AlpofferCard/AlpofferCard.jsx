import React from "react";
import parsel from "../../assets/images/offercard-parsel.png";
import lock from "../../assets/images/offercardlock.png";
import './AlpofferCard.css'
const AlpofferCard = () => {
  return (
    <div className="alpoffercards">
      <div className="offercardscontainer">
        <h4>
          <span>EXCLUSIVE SALE!</span> EFREE GIFTS WITH YOUR ORDER!
        </h4>
        <div className="display-offer">
          <div className="offeritems">
            <div className="card primary-active">
                <div></div>
            </div>
            <p>FREE LASH SERUM</p>
          </div>
          <div className="offeritems">
            <div className="card parsel primary-active">
                <div><img src={parsel} alt="" /></div>
              
            </div>
            <p>FREE SHIPPING</p>
          </div>
          <div className="offeritems">
            <div className="card lock dashed">
                <div> <img src={lock} alt="" /></div>
            
            </div>
            <p>FREE $50 GIFT CARD</p>
          </div>
          <div className="offeritems">
            <div className="card lock dashed">
                <div>
                <img src={lock} alt="" />
                </div>
            </div>
            <p>FREE $100 GIFT CARD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlpofferCard;
