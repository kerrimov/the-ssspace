import { Dispatch } from '@reduxjs/toolkit';
import { fetchAgencies } from './fetchAgencies';
import {
  fetchAgenciesRequest,
  fetchAgenciesSuccess,
  fetchAgenciesFailure,
} from '../actions/actionCreators';
import { AgenciesAction } from '../reducers/agenciesReducer';
import type { Agency } from '../types/Agencies';

export const getAgenciesData =
  () => async (dispatch: Dispatch<AgenciesAction>) => {
    dispatch(fetchAgenciesRequest());
    try {
      const response: Agency[] = await fetchAgencies();
      dispatch(fetchAgenciesSuccess(response));
    } catch (error) {
      dispatch(fetchAgenciesFailure((error as Error).message));
    }
  };
