import { Dispatch } from '@reduxjs/toolkit';
import { fetchAgencies } from './fetchAgencies';
import {
  fetchAgenciesRequest,
  fetchAgenciesSuccess,
  fetchAgenciesFailure,
} from '../actions/actionCreators';
import type { AgenciesAction, Agency } from '../types/Agencies';

export const getAgenciesData =
  () =>
  async (dispatch: Dispatch<AgenciesAction>): Promise<void> => {
    dispatch(fetchAgenciesRequest());
    try {
      const response: Agency[] = await fetchAgencies();
      dispatch(fetchAgenciesSuccess(response));
    } catch (error) {
      dispatch(fetchAgenciesFailure((error as Error).message));
    }
  };
