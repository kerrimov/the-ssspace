import React from 'react';
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material';
import { ArrowDirection } from '../../constants/constants';
import './SliderArrow.scss';

interface SliderArrowProps {
  direction: string;
}

export const SliderArrow = ({ direction }: SliderArrowProps) =>
  ArrowDirection.PREVIOUS === direction ? (
    <ArrowBackIos
      className={`slider-card-icon-${direction}-arrow`}
      color="primary"
    />
  ) : (
    <ArrowForwardIos
      viewBox="0 0 14 24"
      className={`slider-card-icon-${direction}-arrow`}
      color="primary"
    />
  );
