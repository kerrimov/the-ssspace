import { Grid } from '@mui/material';
import React from 'react';
import { AgenciesItem } from './components';
import { agenciesData } from '../mocks/agenciesData';

// const cards = [1, 2, 3, 4, 5, 6];

export const AgenciesList = () => (
  <Grid className="agencies-grid-container" container>
    {agenciesData.map(agency => (
      <Grid item key={agency.id} xs={12} sm={6} md={4} lg={3}>
        <AgenciesItem agency={agency} />
      </Grid>
    ))}
  </Grid>
);
