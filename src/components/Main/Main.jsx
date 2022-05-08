import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, EffectCoverflow, Pagination} from 'swiper';

import 'swiper/css'; 
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import justice from './images/justice-league.jpg'
import spider from './images/spider-man.jpg'
import guardians from './images/guardians-of-the-galaxy.jpg'
import thor from './images/thor-ragnarok.jpg'

SwiperCore.use([EffectCoverflow, Pagination]);

const Main = () => {

  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)

  return (
    <div className='w-full'>
      <Swiper
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={true}
      effect="coverflow"
      style={swiperStyle}
    >
      <SwiperSlide className=''>
        <img src={justice} className="rounded-2xl object-cover" alt="justice league" />
      </SwiperSlide>
      <SwiperSlide className='w-screen'>
        <img src={thor} className="rounded-2xl" alt="thor" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={guardians} className="rounded-2xl" alt="guardians" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={spider} className="rounded-2xl" alt="spider" />
      </SwiperSlide>
      <div ref={navigationPrevRef}/>
      <div ref={navigationNextRef}/>
    </Swiper>
    </div>
  )
}

const swiperStyle = {
  margin: '4rem 0 0'
}

export default Main