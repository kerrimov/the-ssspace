import { Dispatch } from '@reduxjs/toolkit';
import { fetchAgencies } from './fetchAgencies';
import {
  fetchAgenciesRequest,
  fetchAgenciesSuccess,
  fetchAgenciesFailure,
} from '../actions/actionCreators';
import {
  errorAlertOpen,
  errorAlertSetErrorMessage,
} from '../../../shared/components/ErrorAlert/actions/errorAlertActions';
import type { ErrorAlertAllActions } from '../../../shared/components/ErrorAlert/types/errorAlertTypes';
import type { AgenciesAction, Agency } from '../types/Agencies';

export const getAgenciesData =
  () =>
  async (
    dispatch: Dispatch<AgenciesAction | ErrorAlertAllActions>,
  ): Promise<void> => {
    dispatch(fetchAgenciesRequest());
    try {
      const response: Agency[] = await fetchAgencies();
      dispatch(fetchAgenciesSuccess(response));
    } catch (error) {
      dispatch(fetchAgenciesFailure((error as Error).message));
      dispatch(errorAlertSetErrorMessage((error as Error).message));
      dispatch(errorAlertOpen());
    }
  };
