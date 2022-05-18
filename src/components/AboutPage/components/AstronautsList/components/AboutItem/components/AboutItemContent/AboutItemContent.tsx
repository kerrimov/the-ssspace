import React from 'react';
import { CardContent, Typography } from '@mui/material';
import './AboutItemContent.scss';

interface AboutItemContentProps {
  name: string;
  position: string;
  description: string;
}

export const AboutItemContent = ({
  name,
  position,
  description,
}: AboutItemContentProps) => (
  <CardContent className="about-item-content">
    <Typography variant="h5" component="div">
      {name}
    </Typography>
    <Typography className="about-item-content-position" variant="h6">
      {position}
    </Typography>
    <Typography variant="body2">{description}</Typography>
  </CardContent>
);
