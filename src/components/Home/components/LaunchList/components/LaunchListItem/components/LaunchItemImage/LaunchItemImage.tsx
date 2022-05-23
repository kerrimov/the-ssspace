import React from 'react';
import { CardMedia } from '@mui/material';
import { Launch } from '../../../../../../../../shared/api/types/Launch';
import './LaunchItemImage.scss';

interface LaunchItemImageProps {
  launch: Launch;
}

export const LaunchItemImage = ({ launch }: LaunchItemImageProps) => (
  <div className="launch-item-image-wrapper">
    <CardMedia
      className={`launch-item-image ${launch.image || 'default'}`}
      component="img"
      image={launch.image || process.env.PUBLIC_URL + '/logo.png'}
      alt={launch.name}
    />
  </div>
);
