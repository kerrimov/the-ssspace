import React from 'react';
import { CardMedia } from '@mui/material';
import './AgenciesItemImage.scss';

interface AgenciesItemImageProps {
  image: string;
}

export const AgenciesItemImage: React.FC<AgenciesItemImageProps> = ({
  image,
}: AgenciesItemImageProps) => (
  <div className="agencies-item-image-wrapper">
    <CardMedia component="img" image={image} alt="astronaut"></CardMedia>
  </div>
);
