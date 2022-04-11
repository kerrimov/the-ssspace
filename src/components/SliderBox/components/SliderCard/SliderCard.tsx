import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './SliderCard.scss';
import { SliderCardMain } from './components/SliderCardMain';
import { SliderCardFooter } from './components/SliderCardFooter';

interface SliderCardProps {
  name: string;
}

export const SliderCard = ({ name }: SliderCardProps) => (
  <Card className="slider-card">
    <CardMedia
      component="img"
      height="550"
      image="https://upload.wikimedia.org/wikipedia/commons/d/d1/Falcon_Heavy_Demo_Mission_%2839337245145%29.jpg"
      alt="rocket launch"
    />
    <CardContent className="slider-card-content">
      <SliderCardMain name={name} />
      <SliderCardFooter />
    </CardContent>
  </Card>
);
