import React from 'react';
import { CardContent, Typography } from '@mui/material';
import type { AstronautsName } from '../../../../../../types/Astronauts';
import './AstronautsItemContent.scss';

interface AstronautsItemContentProps {
  name: string;
  agency: AstronautsName;
}

export const AstronautsItemContent = ({
  name,
  agency,
}: AstronautsItemContentProps) => (
  <CardContent className="astronauts-item-content">
    <Typography
      className="astronauts-item-content-name"
      variant="h5"
      component="div"
    >
      {name}
    </Typography>
    <Typography className="astronauts-item-content-agency" variant="body1">
      {agency.name}
    </Typography>
  </CardContent>
);
