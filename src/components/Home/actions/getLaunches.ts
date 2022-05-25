import {
  launchRequestAction,
  launchSuccessAction,
} from './launchActionCreators';
import { Launches } from '../constants/launches';
import { fetchLaunches } from '../services/fetchLaunches';
import { errorAlertToggle } from '../../../shared/components/ErrorAlert/actions/errorAlertActions';
import type { ErrorAlertToggle } from '../../../shared/components/ErrorAlert/types/errorAlertTypes';
import type { Dispatch } from '@reduxjs/toolkit';
import type { LaunchAction } from '../types/LaunchActions';
import type { LaunchResponse } from '../types/LaunchResponse';

export const getLaunches =
  (filterValue: Launches) =>
  async (
    dispatch: Dispatch<LaunchAction | ErrorAlertToggle>,
  ): Promise<void> => {
    dispatch(launchRequestAction(filterValue));
    try {
      const response: LaunchResponse = await fetchLaunches(filterValue);
      dispatch(launchSuccessAction(filterValue, response.data.results));
    } catch (error) {
      dispatch(errorAlertToggle((error as Error).message));
    }
  };
