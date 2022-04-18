import React from 'react';
import { CardMedia } from '@mui/material';
import { astronautsData } from '../../../../../../mocks/astronautsData';

export const AstronautsItemImage = () => {
  return (
    <CardMedia
      component="img"
      height="240"
      image={astronautsData.image}
      alt="astronaut"
    />
  );
};
