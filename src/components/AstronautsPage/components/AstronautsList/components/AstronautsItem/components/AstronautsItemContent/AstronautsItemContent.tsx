import React from 'react';
import { CardContent, Typography } from '@mui/material';
// import { astronautsData } from '../../../../../../mocks/astronautsData';
import './AstronautsItemContent.scss';

interface AstronautsItemContentName {
  name: string;
}

interface AstronautsItemContent extends AstronautsItemContentName {
  agency: AstronautsItemContentName;
}

export const AstronautsItemContent = ({
  name,
  agency,
}: AstronautsItemContent) => (
  <CardContent className="astronauts-item-content">
    <Typography gutterBottom variant="h5" component="div">
      {name}
    </Typography>
    <Typography variant="body2">{agency.name}</Typography>
  </CardContent>
);
