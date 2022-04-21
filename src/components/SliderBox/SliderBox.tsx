import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Container } from '@mui/material';
import { SliderCard } from './components/SliderCard';
import { SliderArrow } from './components/SliderArrow';
import { ArrowDirection, Slides } from './types/sliderTypes';
import { slides } from './mocks/slidesData';
import './SliderBox.scss';

export const SliderBox = () => (
  <Container className="slider-container" maxWidth="xl">
    <SliderArrow direction={ArrowDirection.PREVIOUS} />
    <Swiper
      loop
      className="slider-box"
      simulateTouch={false}
      spaceBetween={10}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay, Navigation]}
      navigation={{
        prevEl: '.slider-card-icon-previous-arrow',
        nextEl: '.slider-card-icon-next-arrow',
      }}
    >
      {slides.map((card: Slides, index: number) => (
        <SwiperSlide key={index}>
          <SliderCard name={card.name} image={card.imageURL} />
        </SwiperSlide>
      ))}
    </Swiper>
    <SliderArrow direction={ArrowDirection.NEXT} />
  </Container>
);
