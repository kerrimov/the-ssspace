import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import { SliderCardMain } from './components/SliderCardMain';
import { SliderCardFooter } from './components/SliderCardFooter';
import { CountdownTimer } from '../../../../shared/components/CountdownTimer';
import './SliderCard.scss';

interface SliderCardProps {
  name: string;
  image: string;
  date: string;
  id: string;
}

export const SliderCard = ({ name, image, date, id }: SliderCardProps) => (
  <Card className="slider-card">
    <CardMedia component="img" image={image} alt="rocket launch" />
    <CardContent className="slider-card-content">
      <SliderCardMain name={name} />
      <CountdownTimer launchDate={date} />
      <SliderCardFooter id={id} />
    </CardContent>
  </Card>
);
