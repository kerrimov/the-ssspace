import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Container } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '@shared/components/Loader';
import { SliderCard } from './components/SliderCard';
import { SliderArrow } from './components/SliderArrow';
import { ArrowDirection } from './constants/constants';
import { getPreviousLaunches } from './services/getPreviousLaunches';
import { getUpcomingLaunches } from './services/getUpcomingLaunches';
import { getSlides } from './selectors/sliderSelector';
import type {
  SliderAllActions,
  SliderState,
  Slides,
} from './types/SliderTypes';
import type { Dispatch } from 'redux';
import type { StoreState } from '../../store';
import type { ErrorAlertToggle } from '@shared/components/ErrorAlert/types/errorAlertTypes';
import 'swiper/swiper-bundle.css';
import './Slider.scss';

SwiperCore.use([Navigation, Autoplay]);

export const Slider: React.FC = () => {
  const slides: Array<Slides> = useSelector(getSlides);
  const dispatch = useDispatch<Dispatch<SliderAllActions | ErrorAlertToggle>>();
  const { isLoading } = useSelector<StoreState, SliderState>(
    state => state.slider,
  );

  useEffect(() => {
    getPreviousLaunches()(dispatch);
    getUpcomingLaunches()(dispatch);
  }, []);

  const fillSlides = () =>
    slides.map(slide => (
      <SwiperSlide key={slide.id}>
        <SliderCard
          name={slide.name}
          image={slide.image}
          date={slide.net}
          id={slide.id}
          description={slide.mission.description}
        />
      </SwiperSlide>
    ));

  return isLoading ? (
    <Loader />
  ) : (
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
