import React from "react";
import brand from "../../assets/images/brand.png";
import cart from "../../assets/images/cartimage.png";
import hamberg from '../../assets/images/banner-hamberg.png'
import './AlpNavbar.css'
const AlpNavbar = () => {
  return (
    <div className="Alp-Navbar">
      <div className="container">
        <div className="Alp-navbar-container">
          <div className="navlinks">
            <ul className="navlinks-container">
              <li className="navlinks active">Shop</li>
              <li className="navlinks">FAQ</li>
              <li className="navlinks">Contact</li>
            </ul>
             <div className="hamberg"><img src={hamberg} alt="" /></div>
          </div>
          <div className="brand">
            <img src={brand} alt="" />
          </div>
          
          <div className="cart">
            <img src={cart} alt="" />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AlpNavbar;
