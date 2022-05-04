import React from 'react';
import { CardMedia } from '@mui/material';
// import { agenciesData } from '../../../../mocks/agenciesData';
import './AgenciesItemImage.scss';
import { AgenciesItemProps } from '../../../../types/Agencies';

export const AgenciesItemImage: React.FC<AgenciesItemProps> = ({ agency }) => (
  <div className="agencies-item-image-wrapper">
    <CardMedia component="img" image={agency.image} alt="astronaut"></CardMedia>
  </div>
);
