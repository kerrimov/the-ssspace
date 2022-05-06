import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Container } from '@mui/material';
import { SliderCard } from './components/SliderCard';
import { SliderArrow } from './components/SliderArrow';
import { ArrowDirection } from './constants/constants';
import { SliderAnyActions, Slides } from './types/SliderTypes';
import { getSlides } from './services/getSlides';
import { useSelectorTyped } from './redux/store';
import { Endpoints } from '../../shared/api/constants/endpoints';
import 'swiper/swiper-bundle.css';
import './Slider.scss';

SwiperCore.use([Navigation, Autoplay]);

export const Slider = () => {
  const { slides, error, isLoading } = useSelectorTyped(state => state.slider);
  const dispatch = useDispatch<Dispatch<SliderAnyActions>>();

  useEffect(() => {
    getSlides(
      Endpoints.BASE_ENDPOINT + Endpoints.GO_FOR_LAUNCHES_ENDPOINT,
      Endpoints.BASE_ENDPOINT + Endpoints.PREVIOUS_LAUNCHES_ENDPOINT,
    )(dispatch);
  }, []);

  return !error ? (
    isLoading ? (
      <p>Loading..</p> // there I guess we should decide spinner image
    ) : (
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
    )
  ) : (
    <p>error</p> //I guess there should be a link to 404 page with error prop
  );
};
