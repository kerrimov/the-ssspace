import React from 'react';
import './SliderBox.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';
import SliderCard from './components/SliderCard';
import { Container } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from '@mui/system';

const SliderBox = () => {
  return (
    <Container className="slider-container">
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
        {slidesArray.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <SliderCard name={card.name} date={card.date} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Box className="slider-card-button-prev-arrow">
        <ArrowBackIosIcon className="slider-card-icon-prev-arrow" />
      </Box>
      <Box className="slider-card-button-next-arrow">
        <ArrowBackIosIcon className="slider-card-icon-next-arrow" />
      </Box>
    </Container>
  );
};

export default SliderBox;
