import React from 'react'
import AlpCartimages from '../AlpCartImagesection/AlpCartimages'
import './AlpCart.css'
import AlpofferCard from '../AlpofferCard/alpofferCard'
import AlpProductdetails from '../AlpProductdetails/AlpProductdetails'
import Alpproductfaq from '../Alpproductfaq/Alpproductfaq'


const AlpCart = () => {
  return (
    <div className='Alp-cart'>
      <div className="Alp-cart-wrapper">
        <div className='carthub'>
        <AlpCartimages/>
        <AlpofferCard/>
        <AlpProductdetails/>
        <Alpproductfaq/>
        </div>
      
       
      </div>
    </div>
  )
}

export default AlpCart
