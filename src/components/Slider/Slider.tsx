import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Container } from '@mui/material';
import { SliderCard } from './components/SliderCard';
import { SliderArrow } from './components/SliderArrow';
import { ArrowDirection } from './constants/constants';
import { Slides } from './types/SliderTypes';
import 'swiper/swiper-bundle.css';
import './Slider.scss';
import { useSelectorTyped } from './redux/store';
import { useDispatch } from 'react-redux';
import { Endpoints } from '../../shared/api/constants/endpoints';
import { Slides } from './types/SliderTypes';
import { getSlides } from './services/getSlides';

SwiperCore.use([Navigation, Autoplay]);

export const Slider = () => {
  const { slides, error, isLoading } = useSelectorTyped(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getSlides(
        Endpoints.GO_FOR_LAUNCHES_ENDPOINT,
        Endpoints.PREVIOUS_LAUNCHES_ENDPOINT,
      ),
    );
  }, []);

  return (
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
        {slides.map((slides: Slides, index: number) => (
          <SwiperSlide key={index}>
            <SliderCard
              name={slides.name}
              image={slides.image}
              date={slides.net}
              id={slides.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderArrow direction={ArrowDirection.NEXT} />
    </Container>
  );
};
