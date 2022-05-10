import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { AgenciesItem } from './components';
import { fetchAgencies } from '../services/fetchAgencies';
import { Agency } from '../types/Agencies';

export const AgenciesList = () => {
  const [data, setData] = useState<Agency[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchAgencies();
      setData(response);
    };

    fetchData();
  }, []);

  if (!data.length) return null;

  return (
    <Grid container>
      {data.map(agency => (
        <Grid item key={agency.id} xs={12} sm={6} md={4} lg={3}>
          <AgenciesItem agency={agency} />
        </Grid>
      ))}
    </Grid>
  );
};
