import React from "react";
import insta from "../../assets/images/footerInsta.png"
import telegram from '../../assets/images/footerTelegram.png'
import alphurafooter from '../../assets/images/footerAlHUARAbarand.png'
import './AlpFooter.css'
const AlpFooter = () => {
    const website=[
        {
            sitenavigator:"Home"
        },
        {
            sitenavigator:"About Us"
        },
        {
            sitenavigator:"Services"
        },
        {
            sitenavigator:"Contact Us"
        },
        {
            sitenavigator:"Privacy Policy"
        },
        {
            sitenavigator:"Terms of Use"
        }
    ]
    const shop=[
        {
        shopitems:"Products"
        },
        {
        shopitems:"All in one Bundle"
        }
    ]
  return (
    <div className="alp-footer">
      <div className="alp-footercontainer">
        <div className="alp-footer-community">
          <img src={alphurafooter} alt="" />
          <div className="community-head">
            <h5>Join Our Community</h5>
          </div>
          <div className="community-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            justo ante, malesuada ut porta quis,
          </div>
          <div className="community-form" onSubmit={()=>submitData()}>
            <input type="text" required="true" placeholder="Email Address"/>
            <button type="submit">Submit</button>
          </div>
          <div className="social-media-links">
            <span><img src={telegram} alt="" /></span>
            <span><img src={insta} alt="" /></span>
          </div>
        </div>
        <div className="wbshop">
        <div className="alp-footer-website">
           <div className="alp-footer-website-head">Website</div>
            {website.map((item,index)=>(
                 <ul index>
                    <li>{item.sitenavigator}</li>
                 </ul>
            ))}
        </div>
        <div className="alp-footer-shop">
        <div className="alp-footer-shop-head">Shop</div>
        {shop.map((item,index)=>(
                 <ul index>
                    <li>{item.shopitems}</li>
                 </ul>
            ))}
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default AlpFooter;
