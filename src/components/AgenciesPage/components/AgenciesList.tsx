import React from 'react';
import { Grid } from '@mui/material';
import { AgenciesItem } from './components';
import { agenciesData } from '../mocks/agenciesData';

export const AgenciesList = () => (
  <Grid container>
    {agenciesData.map(agency => (
      <Grid item key={agency.id} xs={12} sm={6} md={4} lg={3}>
        <AgenciesItem agency={agency} />
      </Grid>
    ))}
  </Grid>
);
