import { errorAlertToggle } from '@shared/components/ErrorAlert/actions/errorAlertActions';
import { fetchAgencies } from './fetchAgencies';
import {
  fetchAgenciesFailure,
  fetchAgenciesRequest,
  fetchAgenciesSuccess,
} from '../actions/actionCreators';
import type { Dispatch } from '@reduxjs/toolkit';
import type { AgenciesAction, AgenciesResponse } from '../types/Agencies';
import type { ErrorAlertToggle } from '@shared/components/ErrorAlert/types/errorAlertTypes';

export const getAgenciesData =
  (page: number) =>
  async (
    dispatch: Dispatch<AgenciesAction | ErrorAlertToggle>,
  ): Promise<void> => {
    const isScrollLoading: boolean = page !== 1;
    dispatch(fetchAgenciesRequest(isScrollLoading));
    try {
      const response: AgenciesResponse = await fetchAgencies(page);
      const { results, count } = response.data;
      dispatch(fetchAgenciesSuccess(results, count));
    } catch (error) {
      dispatch(fetchAgenciesFailure());
      dispatch(errorAlertToggle((error as Error).message));
    }
  };
