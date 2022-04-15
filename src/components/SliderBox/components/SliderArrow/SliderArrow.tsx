import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './SliderArrow.scss';

const enum ArrowDirection {
  Previous = 'previous',
  Next = 'next',
}

interface SliderArrowProps {
  direction: string;
}

export const SliderArrow = ({ direction }: SliderArrowProps) => (
  <>
    {ArrowDirection.Previous === direction ? (
      <ArrowBackIosIcon
        className={`slider-card-icon-${direction}-arrow`}
        color="primary"
      />
    ) : ArrowDirection.Next === direction ? (
      <ArrowForwardIosIcon
        viewBox="0 0 14 24"
        className={`slider-card-icon-${direction}-arrow`}
        color="primary"
      />
    ) : (
      ''
    )}
  </>
);
