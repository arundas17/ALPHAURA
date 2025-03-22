import React from 'react'
import whyusimg from '../../assets/images/whyusimg.png';
import whyusright from '../../assets/images/whyusright.png'
import './AlpWhyus.css'
const AlpWhyus = () => {
    const crediblepoints=[
        { pointimage:whyusright,
          point:"Science Backed"
        },
        { pointimage:whyusright,
          point:"All Natural Ingredients"
        },
        {
        pointimage:whyusright,   
         point:"Money Back Guarantee"
        },
        {
        pointimage:whyusright,    
        point:"Money Back Guarantee"
        }
    ]
  return (
    <div className='why-us'>
      <div className="why-uscontainer">
        <div className="product-image">
            <img src={whyusimg} alt="" />
        </div>
        <div className="why-us-details">
           <h4>WHY BLOOM IS THE BEST SERUM</h4>
           <p>Potent blends of healing botanicals & all natural ingredients to make your hair look amazing:</p>
           {
            crediblepoints.map((item,index)=>(
                <div key={index} className='why-us-details-points'>
                  <img src={item.pointimage} alt="" />
                  <span>{item.point}</span>
                </div>
            ))
           }
            <div className="alpshopnow-btn">SHOP NOW</div>
        </div>
       
      </div>
    </div>
  )
}

export default AlpWhyus
