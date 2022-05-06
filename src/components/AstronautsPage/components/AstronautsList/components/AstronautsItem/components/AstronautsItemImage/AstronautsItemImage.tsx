import React from 'react';
import { CardMedia } from '@mui/material';
import './AstronautsItemImage.scss';

interface AstronautsItemImageProps {
  image: string;
}

export const AstronautsItemImage = ({ image }: AstronautsItemImageProps) => (
  <CardMedia
    className="astronauts-item-image"
    component="img"
    image={image}
    alt="astronaut"
  />
);
