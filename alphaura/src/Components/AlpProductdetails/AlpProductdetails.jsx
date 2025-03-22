import React, { useState } from "react";
import star from "../../assets/images/stars.png";
import productright from "../../assets/images/whyusright.png";
import "./AlpProductdetails.css";
import check from '../../assets/images/productscheckfor.png'
const AlpProductdetails = () => {
  const [selectedOption, setSelectedOption] = useState("subscribe");
  const [selectedOption2, setSelectedOption2] = useState("onetime");
  const stars = Array(5).fill(star);
  const speciality = [
    { splimg: productright, splitem: "SCIENCE BACKED" },
    { splimg: productright, splitem: "ALL NATURAL INGREDIENTS" },
    { splimg: productright, splitem: "MONEY BACK GUARANTEE" },
  ];

  const options = [
    { value: "30-day", label: "30 Day Supply", newPrice: "$40" },
    {
      value: "buy-2",
      label: "Buy 2 Get 1 FREE",
      save: "$20",
      newPrice: "$199",
    },
    {
      value: "buy-3",
      label: "Buy 3 Get 3 FREE",
      save: "$25",
      newPrice: "$379",
    },
    {
      value: "buy-6",
      label: "Buy 6 Get 6 FREE",
      save: "$30",
      newPrice: "$599",
    },
  ];

  return (
    <div className="productdetails">
      <div className="product-detailswrapper">
        <div className="productdetails-ratings">
          <div className="stars">
            {stars.map((img, index) => (
              <img key={index} src={img} alt="star" />
            ))}
          </div>
          <p>
            Rated <span className="ratecount">4.8/5 </span> based on
            <span className="reviews"> +3,425 </span> reviews
          </p>
        </div>
        <h4>BLOOM HAIR GROWTH REVIVAL SERUM</h4>
        <div className="productdetails-speciality">
          {speciality.map((item, index) => (
            <div key={index} className="speciality-item">
              <img src={item.splimg} alt={item.splitem} />
              <span>{item.splitem}</span>
            </div>
          ))}
        </div>
        <div className="product-price-highlighted">
        <div class="price"><span class="old-price">$150.99</span><span class="new-price">$99.99</span><span class="save">SAVE $20</span></div>
        </div>
        
        <div className="product-details-main">
        <div className="productdetails-sub-top">
        <div className="options">
            <label
              htmlFor="onetime"
              className={`option-box ${
                selectedOption2 === "onetime" ? "selected" : ""
              }`}
            >
              <input
                id="subscribe"
                type="radio"
                value="onetime"
                checked={selectedOption === "onetime"}
                onChange={() => setSelectedOption("onetime")}
              />
              <div className="option-content">
                <div>
                <span className="option-label">Subscribe & Save 20%</span>
                </div>
                
                <div className="price">
                <span className="old-price">$150.99</span>
                <span className="new-price">$99.99</span>
                </div>
                
              </div>
            </label>
          </div>
          <div className="options">
            <label
              htmlFor="ontime"
              className={`option-box ${
                selectedOption === "ontime" ? "selected" : ""
              }`}
            >
              <input
                id="subscribe"
                type="radio"
                value="ontime"
                checked={selectedOption === "subscribe"}
                onChange={() => setSelectedOption("onetime")}
              />
               <div className="option-content">
                <div>
                <span className="option-label">One Time</span>
                </div>
                
                <div className="price">
                <span className="old-price">$150.99</span>
                <span className="new-price">$99.99</span>
                </div>
                
              </div>
            </label>
          </div>
          
        </div>
        <div className="options splsuboption">
          {options.map((option) => (
            <label
              key={option.value}
              htmlFor={option.value}
              className={`option-box ${
                selectedOption === option.value ? "selected" : ""
              }`}
            >
              <input
                id={option.value}
                type="radio"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={() => setSelectedOption(option.value)}
              />
              <div className="option-content">
                <span className="option-label">{option.label}</span>
                {option.oldPrice && (
                  <span className="old-price">{option.oldPrice}</span>
                )}
                {option.save && (
                  <span className="save">SAVE {option.save}</span>
                )}
                <span className="new-price">{option.newPrice}</span>
              </div>
            </label>
          ))}
        </div>
        <div className="checkboxes">
          {["VIP SALES", "Auto Replenish", "Easy Cancellation"].map(
            (item, index) => (
              <label key={index} className="checkbox-label">
                <div><img src={check} alt="" /></div>{item}
              </label>
            )
          )}
        </div>
        </div>
        <div className="product-details-addtocart alpshopnow-btn">
           ADD TO CART
        </div>
      </div>
    </div>
  );
};

export default AlpProductdetails;
