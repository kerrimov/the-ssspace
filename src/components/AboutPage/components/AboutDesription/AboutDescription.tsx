import React from 'react';
import { Typography } from '@mui/material';
import './AboutDescription.scss';

export const AboutDesription = () => (
  <section className="about-description">
    <h2 className="about-desription-header">What we do</h2>
    <Typography className="about-desription-text" variant="h5">
      Welcome to The ssspace! This is a web application where you can find and
      view news, events and astronauts of different space agencies. The site is
      in active development and each member of the team is trying to make all
      the components of the application more comfortable for each visitor to our
      product.
    </Typography>
  </section>
);
