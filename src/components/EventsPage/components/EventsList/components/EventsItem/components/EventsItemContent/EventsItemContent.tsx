import React from 'react';
import { CardContent, Typography } from '@mui/material';
import moment from 'moment';
import './EventsItemContent.scss';

interface EventsItemContentProps {
  name: string;
  description: string;
  date: string;
}

export const EventsItemContent: React.FC<EventsItemContentProps> = ({
  name,
  description,
  date,
}: EventsItemContentProps) => {
  const eventDate = moment(date).utc().format('LLLL');
  let slicedDesription = '';

  if (description.length > 145) {
    slicedDesription = description.substr(0, 145) + '...';
  } else {
    slicedDesription = description;
  }

  return (
    <CardContent className="events-item-content">
      <Typography
        className="events-item-content-name"
        variant="h5"
        component="div"
      >
        {name}
      </Typography>
      <Typography className="events-item-content-date" variant="body1">
        {eventDate}
      </Typography>
      <Typography className="events-item-content-description" variant="body1">
        {slicedDesription}
      </Typography>
    </CardContent>
  );
};
