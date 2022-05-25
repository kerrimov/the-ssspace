import { Dispatch } from '@reduxjs/toolkit';
import { fetchAgencies } from './fetchAgencies';
import {
  fetchAgenciesRequest,
  fetchAgenciesSuccess,
} from '../actions/actionCreators';
import { errorAlertToggle } from '../../../shared/components/ErrorAlert/actions/errorAlertActions';
import type { ErrorAlertToggle } from '../../../shared/components/ErrorAlert/types/errorAlertTypes';
import type { AgenciesAction, Agency } from '../types/Agencies';

export const getAgenciesData =
  () =>
  async (
    dispatch: Dispatch<AgenciesAction | ErrorAlertToggle>,
  ): Promise<void> => {
    dispatch(fetchAgenciesRequest());
    try {
      const response: Agency[] = await fetchAgencies();
      dispatch(fetchAgenciesSuccess(response));
    } catch (error) {
      dispatch(errorAlertToggle((error as Error).message));
    }
  };
