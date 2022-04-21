import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './SliderArrow.scss';
import { ArrowDirection } from '../../types/sliderTypes';

interface SliderArrowProps {
  direction: string;
}

export const SliderArrow = ({ direction }: SliderArrowProps) => (
  <>
    {ArrowDirection.PREVIOUS === direction ? (
      <ArrowBackIosIcon
        className={`slider-card-icon-${direction}-arrow`}
        color="primary"
      />
    ) : (
      <ArrowForwardIosIcon
        viewBox="0 0 14 24"
        className={`slider-card-icon-${direction}-arrow`}
        color="primary"
      />
    )}
  </>
);
