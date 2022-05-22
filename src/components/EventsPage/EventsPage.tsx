import React from 'react';
import { Container } from '@mui/material';
import { EventsList } from './components/EventsList';
import './EventsPage.scss';

export const EventsPage = () => (
  <Container maxWidth="xl">
    <h1 className="events-header">Events</h1>
    <EventsList />
  </Container>
);
