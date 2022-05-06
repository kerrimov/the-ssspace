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
  description: string;
}

export const SliderCard = ({
  name,
  image,
  date,
  id,
  description,
}: SliderCardProps) => (
  <Card className="slider-card">
    <CardMedia component="img" image={image} alt="rocket launch" />
    <CardContent className="slider-card-content">
      <SliderCardMain name={name} description={description} date={date} />
      <CountdownTimer launchDate={date} />
      <SliderCardFooter id={id} />
    </CardContent>
  </Card>
);
