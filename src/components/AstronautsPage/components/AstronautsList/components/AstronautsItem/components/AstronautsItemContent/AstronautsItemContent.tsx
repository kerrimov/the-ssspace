import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { astronautsData } from '../../../../../../mocks/astronautsData';
import './AstronautsItemContent.scss';

export const AstronautsItemContent = () => (
  <CardContent className="astronauts-item-content">
    <Typography gutterBottom variant="h5" component="div">
      {astronautsData.name}
    </Typography>
    <Typography variant="body2">{astronautsData.agency.name}</Typography>
  </CardContent>
);
