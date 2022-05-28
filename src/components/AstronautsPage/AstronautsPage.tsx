import React from 'react';
import { Container } from '@mui/material';
import { AstronautsList } from './components/AstronautsList';
import './AstronautsPage.scss';

export const AstronautsPage = () => {
  return (
    <Container maxWidth="xl">
      <h1 className="astronauts-header">Astronauts</h1>
      <AstronautsList />
    </Container>
  );
};
