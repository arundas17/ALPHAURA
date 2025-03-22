import React from 'react'
import ulbn1 from '../../assets/images/ulbn1.png'
import ulbn2 from '../../assets/images/ulbn2.png'
import ulbn3 from '../../assets/images/ulbn3.png'
import ulbn4 from '../../assets/images/ulbn4.png'
import './AlpBennefits.css'

const AlpBennefits = () => {
    const ulbennefits=[
        {
          benneitimg:ulbn1,
          benntitle:'Lorem Ipsum',
          benndesc:"Lorem Ipsum Dolor Es. Lorem Ipsum Dolor Es. Lorem Ipsum Dolor Es."
        },
        {
          benneitimg:ulbn3,
          benntitle:'Lorem Ipsum',
          benndesc:"Backed by science for effective stress relief and focus."
        },
        {
            benneitimg:ulbn2,
            benntitle:'Lorem Ipsum',
             benndesc:"Lorem Ipsum Dolor Es. Lorem Ipsum Dolor Es. Lorem Ipsum Dolor Es."
        },
        {
            benneitimg:ulbn4,
            benntitle:'Lorem Ipsum',
             benndesc:"Precise amounts of adaptogens and nutrients for optimal daily wellness."
        }
    ]
  return (
    <div className='unlimitedbenefits'>
        <div className="header">
                 <h3>Unlimited <br /> Benefits</h3>
            </div>
        <div className="unlimitedbennefits-wrapper">
            
            <div className="bennefit-items">
                {ulbennefits.map((item,index)=>(
                    <div className='bennefit-items-wrapper' key={index} >
                            <div>
                                <img src={item.benneitimg} alt="" />
                                
                            </div>
                            <div className=''>
                                <h4>{item.benntitle}</h4>
                                <p>{item.benndesc}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AlpBennefits
