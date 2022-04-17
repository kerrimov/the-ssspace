import React from 'react';
import { Container, Typography } from '@mui/material';
import { AstronautCard } from './components/AstronautCard';

export const Astronauts = () => {
  return (
    <Container>
      <Typography
        className="astronauts_header"
        gutterBottom
        variant="h2"
        component="div"
        sx={{ color: 'primary.dark' }}
      >
        Astronauts
      </Typography>
      <AstronautCard />
    </Container>
  );
};
