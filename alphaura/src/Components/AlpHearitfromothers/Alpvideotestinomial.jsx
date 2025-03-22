import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import video1 from "../../assets/images/videotestinomial1.png";
import video2 from "../../assets/images/videotestinomial2.png";
import video3 from "../../assets/images/videotestinomial3.png";
import star from "../../assets/images/stars.png";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Alpvideotestinomial.css'
const Alpvideotestinomial = () => {
  const stars = Array(5).fill(star);
  const testinomials = [
    {
      videothumb: video1,
    },
    {
      videothumb: video2,
    },
    {
      videothumb: video3,
    },
    {
      videothumb: video1,
    },
    {
      videothumb: video2,
    },
    {
      videothumb: video3,
    },
    {
      videothumb: video1,
    },
    {
      videothumb: video2,
    },
    {
      videothumb: video3,
    },
    {
        videothumb: video2,
      },
      {
        videothumb: video3,
      },
      {
        videothumb: video1,
      },
      {
        videothumb: video2,
      },
      {
        videothumb: video3,
      },
  ];
  return (
    <div className="videotestinomial">
      <div className="videotestinomial-rating">

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
      <div className="videotestinomials-head">HEAR IT FROM OTHERS</div>
      <div className="videotestinomialwrapper">
         <Swiper
                modules={[Navigation,Autoplay]}
                spaceBetween={6}
                slidesPerView={7}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                  1024: { slidesPerView: 7 },
                }}
              >
                 {testinomials.map((item,index)=>(
                    <SwiperSlide key={index}>
                         <div key={index} className="videotestinomial-item">
               <div className="videotestinomial-image">
                <img src={item.videothumb} alt="" className="mob-video-alignmer" />
               </div>
            </div>
                    </SwiperSlide>
           
        ))}
              </Swiper>
              <div className="alpshopnow-btn">SHOP NOW</div>
      </div>
    </div>
  );
};

export default Alpvideotestinomial;
