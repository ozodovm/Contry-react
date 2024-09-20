import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CaruselSwiper({ Allcountries }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="carousel-container">
      <Swiper
        spaceBetween={10}
        slidesPerView={3} // Bir nechta flagni birga ko'rsatish uchun
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="custom-swiper"
      >
        {Allcountries.map((item) => (
          <SwiperSlide key={item.id} className="slide-item">
            <img src={item.flag} alt={item.name} className="country-flag" />
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle} className="progress-circle">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent} className="progress-content"></span>
        </div>
      </Swiper>
    </div>
  );
}
