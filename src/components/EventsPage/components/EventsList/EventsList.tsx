import React from 'react';
import { Grid } from '@mui/material';
import { EventsItem } from './components/EventsItem';
import { eventsData } from '../../mocks/eventsData';
import { Events } from '../../types/Events';
import './EventsList.scss';

export const EventsList = () => (
  <Grid container>
    {eventsData.map((eventsItem: Events, index: number) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <EventsItem eventsItem={eventsItem} />
      </Grid>
    ))}
  </Grid>
);
