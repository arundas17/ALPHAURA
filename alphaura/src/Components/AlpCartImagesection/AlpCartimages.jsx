import React from 'react'
import mainimage from '../../assets/images/Cartimagemain.png';
import thumbnail from '../../assets/images/CartImageThumnail.png';
import './AlpCartImages.css'
const AlpCartimages = () => {
  return (
    <div className='cartimageSection'>
      <div className="cartimageSection-container">
        <img src={mainimage} alt="" className='mainimage'/>
        <div className='cartSectionThumbnal'>
            <img src={thumbnail} alt="" />
            <img src={thumbnail} alt="" />
            <img src={thumbnail} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AlpCartimages
