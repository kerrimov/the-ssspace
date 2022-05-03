import React from 'react';
import { CardMedia } from '@mui/material';
// import { astronautsData } from '../../../../../../mocks/astronautsData';
import './AstronautsItemImage.scss';

interface AstronautsItemImage {
  image: string;
}

export const AstronautsItemImage = ({ image }: AstronautsItemImage) => (
  <CardMedia
    className="astronauts-item-image"
    component="img"
    image={image}
    alt="astronaut"
  />
);
