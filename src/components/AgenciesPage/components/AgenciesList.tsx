import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { Loader } from '@shared/components/Loader';
import { fetchDefaults } from '@shared/api/constants/fetchDefaults';
import { useInfiniteScroll } from '@shared/api/services/useInfiniteScroll';
import { AgenciesItem } from './components';
import { selectAgencies } from '../selectors/selectors';
import { getAgenciesData } from '../services/getAgenciesData';
import { AgenciesAction } from '../types/Agencies';
import type { InfiniteScrollValues } from '@shared/api/services/useInfiniteScroll';
import type { ErrorAlertToggle } from '@shared/components/ErrorAlert/types/errorAlertTypes';
import './AgenciesList.scss';

export const AgenciesList = () => {
  const dispatch = useDispatch<Dispatch<AgenciesAction | ErrorAlertToggle>>();
  const { agencies, agenciesAmount, isLoading } = selectAgencies();

  const { loadMoreRef, nextPage, setNextPage }: InfiniteScrollValues =
    useInfiniteScroll();
  const agenciesListIsEmpty = !agencies.length;
  const isLastPage: boolean = agencies.length >= agenciesAmount;

  useEffect(() => {
    setNextPage(fetchDefaults.FIRST_PAGE);
    getAgenciesData(fetchDefaults.FIRST_PAGE)(dispatch);
  }, []);

  useEffect(() => {
    if (!agenciesListIsEmpty && !isLastPage && nextPage !== 1) {
      getAgenciesData(nextPage)(dispatch);
    }
  }, [nextPage]);

  if (isLoading && agenciesListIsEmpty) return <Loader />;

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
      {!isLoading && <div ref={loadMoreRef}></div>}
      {isLoading && <Loader isLarge={false} />}
    </Grid>
  );
};
