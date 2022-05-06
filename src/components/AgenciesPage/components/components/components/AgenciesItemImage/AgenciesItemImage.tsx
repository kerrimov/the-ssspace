import React from 'react';
import { CardMedia } from '@mui/material';
import type { AgenciesItemProps } from '../../../../types/Agencies';
import './AgenciesItemImage.scss';

export const AgenciesItemImage: React.FC<AgenciesItemProps> = ({ agency }) => (
  <div className="agencies-item-image-wrapper">
    <CardMedia
      component="img"
      image={agency.image_url}
      alt="astronaut"
    ></CardMedia>
  </div>
);
