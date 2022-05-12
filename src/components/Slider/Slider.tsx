import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { SliderCard } from './components/SliderCard';
import { SliderArrow } from './components/SliderArrow';
import { ArrowDirection } from './constants/constants';
import { SliderGetSlides, SliderState, Slides } from './types/SliderTypes';
import { getPreviousLaunches } from './services/getPreviousLaunches';
import { getUpcomingLaunches } from './services/getUpcomingLaunches';
import { getSlides } from './redux/sliderSelectors';
import { StoreState } from '../../store';
import 'swiper/swiper-bundle.css';
import './Slider.scss';

SwiperCore.use([Navigation, Autoplay]);

export const Slider: React.FC = () => {
  const slides: Array<Slides> = useSelector(getSlides);

  const dispatch = useDispatch<Dispatch<SliderGetSlides>>();

  useEffect(() => {
    getPreviousLaunches()(dispatch);
    getUpcomingLaunches()(dispatch);
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
              description={slides.mission.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderArrow direction={ArrowDirection.NEXT} />
    </Container>
  );
};
