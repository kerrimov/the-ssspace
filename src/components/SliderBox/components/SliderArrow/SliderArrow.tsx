import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from '@mui/system';
import './SliderArrow.scss';

interface SliderArrowProps {
  direction: string;
}

export const SliderArrow = ({ direction }: SliderArrowProps) => (
  <Box className={`slider-card-button-${direction}-arrow`}>
    {direction === 'prev' ? (
      <ArrowBackIosIcon
        className={`slider-card-icon-${direction}-arrow`}
        color="primary"
      />
    ) : (
      <ArrowForwardIosIcon
        className={`slider-card-icon-${direction}-arrow`}
        color="primary"
      />
    )}
  </Box>
);
