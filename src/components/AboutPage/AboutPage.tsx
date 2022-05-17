import React from 'react';
import { Container } from '@mui/material';
import { AboutList } from './components/AstronautsList';
import './AboutPage.scss';

export const AboutPage = () => (
  <Container maxWidth="xl">
    <h1 className="about-header">About Us</h1>
    <Container maxWidth="xl">
      <AboutList />
    </Container>
  </Container>
);
