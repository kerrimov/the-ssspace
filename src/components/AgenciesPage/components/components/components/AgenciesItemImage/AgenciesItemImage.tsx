import React from 'react';
import { CardMedia } from '@mui/material';
import './AgenciesItemImage.scss';

interface AgenciesItemImageProps {
  image: string;
}

export const AgenciesItemImage: React.FC<AgenciesItemImageProps> = ({
  image,
}: AgenciesItemImageProps) => {
  const img = image ? image : process.env.PUBLIC_URL + '/logo.png';

  return (
    <div className="agencies-item-image-wrapper">
      <CardMedia component="img" image={img} alt="astronaut" />
    </div>
  );
};
