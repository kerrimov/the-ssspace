import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Container } from '@mui/material';
import { SliderCard } from './components/SliderCard';
import { SliderArrow } from './components/SliderArrow';
import type { Slides } from './types/SliderTypes';
import { slides } from './mocks/slidesData';
import { ArrowDirection } from './constants/constants';
// import 'swiper/swiper-bundle.css';
import './Slider.scss';

SwiperCore.use([Navigation, Autoplay]);

export const Slider = () => (
  <Container className="slider-container" maxWidth="xl">
    <SliderArrow direction={ArrowDirection.PREVIOUS} />
    <Swiper
      loop
      className="slider-box"
      simulateTouch={false}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation={{
        prevEl: '.slider-card-icon-previous-arrow',
        nextEl: '.slider-card-icon-next-arrow',
      }}
    >
      {slides.map((card: Slides, index: number) => (
        <SwiperSlide key={index}>
          <SliderCard name={card.name} image={card.imageURL} date={card.date} />
        </SwiperSlide>
      ))}
    </Swiper>
    <SliderArrow direction={ArrowDirection.NEXT} />
  </Container>
);
