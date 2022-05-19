import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { AgenciesItem } from './components';
import { selectAgencies } from '../selectors/selectors';
import { getAgenciesData } from '../services/getAgenciesData';
import { AgenciesAction } from '../types/Agencies';
import { Loader } from '../../../shared/components/Loader';
import type { ErrorAlertAllActions } from '../../../shared/components/ErrorAlert/types/errorAlertTypes';
import './AgenciesList.scss';

export const AgenciesList = () => {
  const dispatch =
    useDispatch<Dispatch<AgenciesAction | ErrorAlertAllActions>>();
  const { agencies, isLoading } = selectAgencies();

  useEffect(() => {
    getAgenciesData()(dispatch);
  }, []);

  if (isLoading) return <Loader />;

  if (!agencies.length)
    return (
      <h2 className="agencies-list-empty">No agencies for now. Try later.</h2>
    );

  return (
    <Grid container>
      {agencies.map(agency => (
        <Grid item key={agency.id} xs={12} sm={6} md={4} lg={3}>
          <AgenciesItem agency={agency} />
        </Grid>
      ))}
    </Grid>
  );
};
