import React from 'react';
import { Container } from '@mui/material';
import { AboutList } from './components/AboutList';
import { AboutDesription } from './components/AboutDesription';
import './AboutPage.scss';

export const AboutPage = () => (
  <Container maxWidth="xl">
    <h1 className="about-header">About Us</h1>
    <AboutList />
    <AboutDesription />
  </Container>
);
