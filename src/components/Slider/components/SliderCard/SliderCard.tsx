import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import { SliderCardMain } from './components/SliderCardMain';
import { SliderCardFooter } from './components/SliderCardFooter';
import './SliderCard.scss';

interface SliderCardProps {
  name: string;
  image: string;
}

export const SliderCard = ({ name, image }: SliderCardProps) => (
  <Card className="slider-card">
    <CardMedia component="img" image={image} alt="rocket launch" />
    <CardContent className="slider-card-content">
      <SliderCardMain name={name} />
      <SliderCardFooter />
    </CardContent>
  </Card>
);
