import React from 'react';
import { CardMedia } from '@mui/material';
import { agenciesData } from '../../../../mocks/agenciesData';
import './AgenciesItemImage.scss';

export const AgenciesItemImage = () => (
  <div className="agencies-item-image-wrapper">
    <CardMedia
      // className="agencies-item-image"
      component="img"
      image={agenciesData.image}
      alt="astronaut"
    ></CardMedia>
  </div>
);
