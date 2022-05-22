import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import { getEventsData } from './api/services/getEventsData';
import { EventsList } from './components/EventsList';
import { FetchEventsActions } from './types/Events';
import type { Dispatch } from 'redux';
import './EventsPage.scss';

export const EventsPage = () => {
  const dispatch = useDispatch<Dispatch<FetchEventsActions>>();

  useEffect(() => {
    getEventsData()(dispatch);
  }, []);

  return (
    <Container maxWidth="xl">
      <h1 className="events-header">Events</h1>
      <EventsList />
    </Container>
  );
};
