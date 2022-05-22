import React from 'react';
import { CardMedia } from '@mui/material';
import './EventsItemImage.scss';

interface EventsItemImageProps {
  image: string;
}

export const EventsItemImage: React.FC<EventsItemImageProps> = ({
  image,
}: EventsItemImageProps) => (
  <CardMedia
    className="events-item-image"
    component="img"
    image={image}
    alt="event"
  />
);
