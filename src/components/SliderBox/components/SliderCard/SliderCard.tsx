import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import { SliderCardMain } from './components/SliderCardMain';
import { SliderCardFooter } from './components/SliderCardFooter';
import { imageSliderUrl } from '../../mocks/slidesData';
import './SliderCard.scss';

interface SliderCardProps {
  name: string;
}

export const SliderCard = ({ name }: SliderCardProps) => (
  <Card className="slider-card">
    <CardMedia
      component="img"
      height="550"
      image={imageSliderUrl}
      alt="rocket launch"
    />
    <CardContent className="slider-card-content">
      <SliderCardMain name={name} />
      <SliderCardFooter />
    </CardContent>
  </Card>
);
