import React from 'react';
import { CardMedia } from '@mui/material';
import './AboutItemImage.scss';

interface AboutItemImageProps {
  image: string;
}

export const AboutItemImage = ({ image }: AboutItemImageProps) => (
  <CardMedia
    className="about-item-image"
    component="img"
    image={image}
    alt="astronaut"
  />
);
