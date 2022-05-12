import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { SliderCard } from './components/SliderCard';
import { SliderArrow } from './components/SliderArrow';
import { ArrowDirection } from './constants/constants';
import { getPreviousLaunches } from './services/getPreviousLaunches';
import { getUpcomingLaunches } from './services/getUpcomingLaunches';
import { getSlides } from './redux/sliderSelectors';
import type { SliderAllActions, Slides } from './types/SliderTypes';
import type { Dispatch } from 'redux';
import 'swiper/swiper-bundle.css';
import './Slider.scss';

SwiperCore.use([Navigation, Autoplay]);

export const Slider: React.FC = () => {
  const slides: Array<Slides> = useSelector(getSlides);
  const dispatch = useDispatch<Dispatch<SliderAllActions>>();

  useEffect(() => {
    getPreviousLaunches()(dispatch);
    getUpcomingLaunches()(dispatch);
  }, []);

  const fillSlides = (launchSlides = slides) =>
    launchSlides.map(launchSlides => (
      <SwiperSlide key={launchSlides.id}>
        <SliderCard
          name={launchSlides.name}
          image={launchSlides.image}
          date={launchSlides.net}
          id={launchSlides.id}
          description={launchSlides.mission.description}
        />
      </SwiperSlide>
    ));

  return (
    <Container className="slider-container" maxWidth="xl">
      <SliderArrow direction={ArrowDirection.PREVIOUS} />
      <Swiper
        loop
        className="slider-box"
        simulateTouch={false}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          prevEl: '.slider-card-icon-previous-arrow',
          nextEl: '.slider-card-icon-next-arrow',
        }}
      >
        {fillSlides()}
      </Swiper>
      <SliderArrow direction={ArrowDirection.NEXT} />
    </Container>
  );
};
