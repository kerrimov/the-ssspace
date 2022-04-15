import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { SliderCardMain } from './components/SliderCardMain';
import { SliderCardFooter } from './components/SliderCardFooter';
// import rocketImage from './../../mocks/images/rocket-lauch.jpg;
import './SliderCard.scss';

interface SliderCardProps {
  name: string;
}

export const SliderCard = ({ name }: SliderCardProps) => (
  <Card className="slider-card">
    <CardMedia
      component="img"
      height="550"
      // image={rocketImage}
      alt="rocket launch"
    />
    <CardContent className="slider-card-content">
      <SliderCardMain name={name} />
      <SliderCardFooter />
    </CardContent>
  </Card>
);
