import React from 'react'
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner4.jpg'
import banner5 from '../../assets/banner5.jpg'
import banner6 from '../../assets/banner6.jpg'
import banner7 from '../../assets/banner7.jpg'
import banner8 from '../../assets/banner8.jpg'
import banner9 from '../../assets/banner9.jpg'
import banner10 from '../../assets/banner10.jpg'
import banner11 from '../../assets/banner11.jpg'
import banner12 from '../../assets/banner12.jpg'
import banner13 from '../../assets/banner13.png'
import bannercard from '../../assets/bannercard.png'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import './Banner.css'

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-swiper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <img className="banner-img" src={banner1} alt="Banner 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner-img" src={banner2} alt="Banner 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner-img" src={banner3} alt="Banner 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner-img" src={banner4} alt="Banner 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner-img" src={banner5} alt="Banner 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner-img" src={banner6} alt="Banner 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner-img" src={banner7} alt="Banner 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner-img" src={banner8} alt="Banner 8" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner-img" src={banner9} alt="Banner 9" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner-img" src={banner10} alt="Banner 10" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner-img" src={banner11} alt="Banner 11" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner-img" src={banner12} alt="Banner 12" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="banner-img" src={banner13} alt="Banner 13" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="banner-card">
        <div className="banner-card-wrap">
          <h3>Kun mahsuloti</h3>
          <div className="banner-card-img">
          <img src={bannercard} alt="" />
          </div>
        </div>

        <div className="banner-card-text">
        <div className="banner-card-name">
        <p>Radar detektori Inspektor Star Air</p>
        </div>
        <div className="banner-card-price">
          <del id='hide1'>1 960 000 so'm</del>
          <h3 id='price'>1 560 000 so'm</h3>
          <del id='hide2'>1 960 000 so'm</del>
        </div>

        <div className="banner-card-month">
          <p>520 000 so'm x 3 oy</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

