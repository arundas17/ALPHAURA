import React from 'react'
import reason1 from '../../assets/images/breason1.png';
import reason2 from '../../assets/images/breason2.png';
import reason3 from '../../assets/images/breason3.png';
import reason4 from '../../assets/images/breason4.png';
import reason5 from '../../assets/images/breason5.png';
import reason6 from '../../assets/images/breason6.png';
import blosomhand from '../../assets/images/alpbloosom.png'
import blosoomcheck from '../../assets/images/bloosomchek.png'
import './AlpBloosomserum.css'
const AlpBloosomserum = () => {
    const bloosmcontentleft=[
        {  reasonimage:reason1,
           reason:"Reduce Frizziness & Moisturize Hair"
        },
        {
           reasonimage:reason2,
           reason:"Reduce Frizziness & Moisturize Hair"
        },
        {
          reasonimage:reason3,
           reason:"Reduce Frizziness & Moisturize Hair"
        },
        
    ]
    const bloosmcontentright=[
        {  reasonimage:reason4,
           reason:"Improved Hair Growth & Blood Flow"
        },
        {
           reasonimage:reason5,
           reason:"Reduce Frizziness & Moisturize Hair"
        },
        {
          reasonimage:reason6,
           reason:"Nourish your Scalp &  Follicles"
        },
        
    ]
  return (
    <>
     <div className='alpbloosomattach'>
        <div><img src={blosoomcheck} alt="" /><span>Science Backed</span></div>
        <div><img src={blosoomcheck} alt="" /><span>All Natural Ingredients</span></div>
        <div><img src={blosoomcheck} alt="" /><span>Money Back Guarantee</span></div>
       </div>
    <div className='alpbloosom'>
       
      <div className="main-wrapper">
       <div className="alpbloosom-wrapper">
       <div className="alpbloosomhead">
           <h2>6 Reasons you need <br />
         <span>Bloom Serum</span>  </h2>
        </div>
        <div className="alpbloosomreasonbox">
        <div className="alpbloosomreasonboxleft">
          {
            bloosmcontentleft.map((item,index)=>(
                <div className='alpbloosomreasonbox-item' key={index}>
                    <img src={item.reasonimage} alt="" />
                    <span>{item.reason}</span>
                </div>
            ))
          }
         </div>
           <div className="blosomhand"><img src={blosomhand} alt="" /></div>
         <div className="alpbloosomreasonboxright">
           {
            bloosmcontentright.map((item,index)=>(
                <div className='alpbloosomreasonbox-item' key={index}>
                     <img src={item.reasonimage} alt="" />
                     <span>{item.reason}</span>
                </div>
            ))
           }
         </div>
        </div>
       </div>
      </div>
    </div>
    </>
   
  )
}

export default AlpBloosomserum
