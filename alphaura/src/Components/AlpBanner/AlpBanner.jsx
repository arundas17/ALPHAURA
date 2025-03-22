import React from "react";
import star from "../../assets/images/stars.png";
import right from "../../assets/images/right.png";
import bloombootle from "../../assets/images/bloombottle.png";
import banner from '../../assets/images/Banner-backround.png'
import './AlpBanner.css'
const AlpBanner = () => {
  const stars = Array(5).fill(star);
  const property = [
    {
      rightimg: right,
      content: "LOOK & FEEL YOUNG",
    },
    {
      rightimg: right,
      content: "Thick & lush hair",
    },
    {
      rightimg: right,
      content: "REGROW YOUR HAIR",
    },
  ];
  return (
    <div className="mainbanner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <div className="mainbannerwrapper">
          <div className="mainbannerContents">
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
            <div className="heading">
              <h2>GROW YOUR HAIR ONCE & FOR ALL</h2>
            </div>
            <div className="desc">
              <p>
                All Natural Science Backed Hair Blend to make you feel and look
                your best.
              </p>
            </div>
            <div className="property">
              {property.map((item, index) => (
                <div key={index} className="property-items">
                  <img src={item.rightimg} alt="" />
                  <span>{item.content}</span>
                </div>
              ))}
            </div>
            <div class="alpshopnow-btn">SHOP BLOOM NOW RISK FREE</div>
          </div>
          <div className="mainbannerimage">
            <div className="bloombottle-display">
              <img src={bloombootle} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlpBanner;
