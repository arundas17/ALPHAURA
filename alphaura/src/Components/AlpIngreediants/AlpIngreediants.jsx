import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import avacado from '../../assets/images/ingreediants-avacadooil.png';
import check from '../../assets/images/ingreediants-check.png';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './AlpIngreediants.css'
const AlpIngreediants = () => {
    const ingreediants=[
        {
            ingimage:avacado,
            ingitemhead:"Avocado Oil",
            chek:check,
            desc1:"A Chinese herb that has been used traditionally, ",
            desc2:"It may help in reducing sleep latency (meaning you sleep quicker) ",
            desc3:"It may help in reducing sleep latency "
        },
        {
            ingimage:avacado,
            ingitemhead:"Avocado Oil",
            chek:check,
            desc1:"A Chinese herb that has been used traditionally, ",
            desc2:"It may help in reducing sleep latency (meaning you sleep quicker) ",
            desc3:"It may help in reducing sleep latency "
        },
        {
            ingimage:avacado,
            ingitemhead:"Avocado Oil",
            chek:check,
            desc1:"A Chinese herb that has been used traditionally, ",
            desc2:"It may help in reducing sleep latency (meaning you sleep quicker) ",
            desc3:"It may help in reducing sleep latency "
        },
        {
            ingimage:avacado,
            ingitemhead:"Avocado Oil",
            chek:check,
            desc1:"A Chinese herb that has been used traditionally, ",
            desc2:"It may help in reducing sleep latency (meaning you sleep quicker) ",
            desc3:"It may help in reducing sleep latency "
        },
        {
            ingimage:avacado,
            ingitemhead:"Avocado Oil",
            chek:check,
            desc1:"A Chinese herb that has been used traditionally, ",
            desc2:"It may help in reducing sleep latency (meaning you sleep quicker) ",
            desc3:"It may help in reducing sleep latency "
        },
        {
            ingimage:avacado,
            ingitemhead:"Avocado Oil",
            chek:check,
            desc1:"A Chinese herb that has been used traditionally, ",
            desc2:"It may help in reducing sleep latency (meaning you sleep quicker) ",
            desc3:"It may help in reducing sleep latency "
        },
        {
            ingimage:avacado,
            ingitemhead:"Avocado Oil",
            chek:check,
            desc1:"A Chinese herb that has been used traditionally, ",
            desc2:"It may help in reducing sleep latency (meaning you sleep quicker) ",
            desc3:"It may help in reducing sleep latency "
        },
        {
            ingimage:avacado,
            ingitemhead:"Avocado Oil",
            chek:check,
            desc1:"A Chinese herb that has been used traditionally, ",
            desc2:"It may help in reducing sleep latency (meaning you sleep quicker) ",
            desc3:"It may help in reducing sleep latency "
        },
        {
            ingimage:avacado,
            ingitemhead:"Avocado Oil",
            chek:check,
            desc1:"A Chinese herb that has been used traditionally, ",
            desc2:"It may help in reducing sleep latency (meaning you sleep quicker) ",
            desc3:"It may help in reducing sleep latency "
        },
        {
            ingimage:avacado,
            ingitemhead:"Avocado Oil",
            chek:check,
            desc1:"A Chinese herb that has been used traditionally, ",
            desc2:"It may help in reducing sleep latency (meaning you sleep quicker) ",
            desc3:"It may help in reducing sleep latency "
        }
    ]
  return (
    <div className='alp-ingreediants'>
      <div className="alp-ingreediants-container">
        <div className="alp-ingreediants-head">
        All natural Ingredients
        </div>
          <p className='alp-ingreediants-subhead'>
          Potent blends of healing botanicals & all natural ingredients to make your hair look amazing.
          </p>
         <div className="alp-ingreediants-itemwrapper">
         <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
            {ingreediants.map((item,index)=>(
                  <SwiperSlide key={index}>
                    <div className="ingreediants-card">
                    <div className='ingreediants-card-imagesec'>
                        <img src={avacado}alt="" />
                    </div>
                    <div className='ingreediants-card-details'>
                        <h4>{item.ingitemhead}</h4>
                        <div className='desc'><span><img src={check} alt="" /></span><p>{item.desc1}</p></div>
                        <div className='desc'><span><img src={check} alt="" /></span><p>{item.desc2}</p></div>
                        <div className='desc'><span><img src={check} alt="" /></span><p>{item.desc3}</p></div>
                    </div>
                </div>
                  </SwiperSlide>
                
            ))}
            </Swiper>
         </div>
      </div>
    </div>
  )
}

export default AlpIngreediants
