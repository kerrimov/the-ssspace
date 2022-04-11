import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Container } from '@mui/material';
import { SliderCard } from './components/SliderCard';
import { slidesArray } from './slidesData';
import './SliderBox.scss';
import { SliderArrow } from './components/SliderArrow';

export const SliderBox = () => (
  <Container className="slider-container" maxWidth="xl">
    <Swiper
      loop
      className="slider-box"
      simulateTouch={false}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay, Navigation]}
      navigation={{
        prevEl: '.slider-card-button-prev-arrow',
        nextEl: '.slider-card-button-next-arrow',
      }}
    >
      {slidesArray.map((card, index) => (
        <SwiperSlide key={index}>
          <SliderCard name={card.name} />
        </SwiperSlide>
      ))}
    </Swiper>
    <SliderArrow direction="prev" />
    <SliderArrow direction="next" />
  </Container>
);
