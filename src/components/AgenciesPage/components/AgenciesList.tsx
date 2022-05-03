import { Grid } from '@mui/material';
import React from 'react';
import { AgenciesItem } from './components';

const cards = [1, 2, 3, 4, 5, 6];
export const AgenciesList = () => (
  <Grid className="agencies-grid-container" container>
    {cards.map(card => (
      <Grid item key={card} xs={12} sm={6} md={4} lg={3}>
        <AgenciesItem />
      </Grid>
    ))}
  </Grid>
);
