import React from 'react';
import { Grid } from '@mui/material';
import { EventsItem } from './components/EventsItem';
import { selectEvents } from '../../selectors/eventsSelectors';
import { Events } from '../../types/Events';
import { Loader } from '../../../../shared/components/Loader';
import './EventsList.scss';

export const EventsList = () => {
  const { events, isLoading } = selectEvents();

  if (isLoading) return <Loader />;

  if (!events.length)
    return <h2 className="event-list-empty">No events for now. Try later.</h2>;

  return (
    <Grid container>
      {events.map((eventsItem: Events, index: number) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <EventsItem eventsItem={eventsItem} />
        </Grid>
      ))}
    </Grid>
  );
};
