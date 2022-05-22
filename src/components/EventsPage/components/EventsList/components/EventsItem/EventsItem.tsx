import React from 'react';
import { Card } from '@mui/material';
import { EventsItemImage } from './components/EventsItemImage';
import { EventsItemContent } from './components/EventsItemContent';
import { EventsItemActions } from './components/EventsItemActions';
import { Events } from '../../../../types/Events';
import './EventsItem.scss';

interface EventsItemProps {
  eventsItem: Events;
}

export const EventsItem: React.FC<EventsItemProps> = ({
  eventsItem,
}: EventsItemProps) => (
  <Card className="events-item">
    <EventsItemImage image={eventsItem.feature_image} />
    <EventsItemContent
      name={eventsItem.name}
      description={eventsItem.description}
      date={eventsItem.date}
    />
    <EventsItemActions video={eventsItem.video_url} />
  </Card>
);
