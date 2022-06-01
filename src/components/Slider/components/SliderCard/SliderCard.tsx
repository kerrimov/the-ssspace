import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import { CountdownTimer } from '@shared/components/CountdownTimer';
import { SliderCardMain } from './components/SliderCardMain';
import { SliderCardFooterMemoized } from './components/SliderCardFooter';
import './SliderCard.scss';

interface SliderCardProps {
  name: string;
  image: string;
  date: string;
  id: string;
  description: string;
}

export const SliderCard: React.FC<SliderCardProps> = (
  props: SliderCardProps,
) => {
  const { name, image, date, id, description } = props;
  return (
    <Card className="slider-card">
      <CardMedia component="img" image={image} alt="rocket launch" />
      <CardContent className="slider-card-content">
        <SliderCardMain name={name} description={description} date={date} />
        <CountdownTimer launchDate={date} />
        <SliderCardFooterMemoized id={id} />
      </CardContent>
    </Card>
  );
};
