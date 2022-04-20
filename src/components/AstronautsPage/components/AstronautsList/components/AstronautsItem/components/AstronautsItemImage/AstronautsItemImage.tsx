import React from 'react';
import { CardMedia } from '@mui/material';
import { astronautsData } from '../../../../../../mocks/astronautsData';
import './AstronautsItemImage.scss';

export const AstronautsItemImage = () => (
  <CardMedia
    className="astronauts-item-image"
    component="img"
    image={astronautsData.image}
    alt="astronaut"
  />
);
