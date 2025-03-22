import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimage from '../../assets/images/testinomialtestimage.png'
import rating from '../../assets/images/testinomailgroupstars.png'
import badge from '../../assets/images/testinomialbadge.png'
import attach1 from '../../assets/images/testinomialsattach1.png'
import attach2 from '../../assets/images/testinomialsattach2.png'
import './AlpTestinomials.css'
const AlpTestinomials = () => {
    const testinomials=[
        {
            testimage:testimage,
            rating:rating,
            highligt:"Super Convenient",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget null",
            clientname:"Andrew C",
            badge:badge,
            verification:"VERIFIED CUSTOMER"
        },
        {
            testimage:testimage,
            rating:rating,
            highligt:"Super Convenient",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget null",
            clientname:"Andrew C",
            badge:badge,
            verification:"VERIFIED CUSTOMER"
        },
        {
            testimage:testimage,
            rating:rating,
            highligt:"Super Convenient",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget null",
            clientname:"Andrew C",
            badge:badge,
            verification:"VERIFIED CUSTOMER"
        },
        {
            testimage:testimage,
            rating:rating,
            highligt:"Super Convenient",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget null",
            clientname:"Andrew C",
            badge:badge,
            verification:"VERIFIED CUSTOMER"
        }
        ,
        {
            testimage:testimage,
            rating:rating,
            highligt:"Super Convenient",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget null",
            clientname:"Andrew C",
            badge:badge,
            verification:"VERIFIED CUSTOMER"
        },
        {
            testimage:testimage,
            rating:rating,
            highligt:"Super Convenient",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget null",
            clientname:"Andrew C",
            badge:badge,
            verification:"VERIFIED CUSTOMER"
        },
        {
            testimage:testimage,
            rating:rating,
            highligt:"Super Convenient",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget null",
            clientname:"Andrew C",
            badge:badge,
            verification:"VERIFIED CUSTOMER"
        },
        {
            testimage:testimage,
            rating:rating,
            highligt:"Super Convenient",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam quisque. Vel fringilla est ullamcorper eget null",
            clientname:"Andrew C",
            badge:badge,
            verification:"VERIFIED CUSTOMER"
        }
    ]
  return (
    <div className='tetinomials'>
      <div className="testinomials-conrtainer">
        <h3>Loved By Thousands</h3>
        <div className="tetinomials-cardouter">
        <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
      >
            {
                testinomials.map((item,index)=>(
                    <SwiperSlide key={index}>
                         <div className="tetinomials-carditems" key={index}>
                      <img src={item.testimage} alt="" className='mainimage'/>
                      <img src={item.rating} alt="" className='starts'/>
                      <h5>{item.highligt}</h5>
                      <div className="desc">{item.desc}</div>
                      <div className="client-details">
                        <div className='name'>
                          {item.clientname}
                        </div>
                        <div className='verification'>
                           <img src={item.badge} alt="" />
                           <div className="verificationtext">{item.verification}</div>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                   
                ))
            }
            </Swiper>
        </div>
        <div class="alpshopnow-btn">SHOP NOW</div>
        <div className='testinomial-attach'>
          <div><img src={attach1} alt="" /><span>30 Day Risk-Free</span></div>
          <div><img src={attach2} alt="" /><span>Fast Worldwide Shipping</span></div>
        </div>
      </div>
    </div>
  )
}

export default AlpTestinomials
