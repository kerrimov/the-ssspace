import {
  launchErrorAction,
  launchRequestAction,
  launchSuccessAction,
} from './launchActionCreators';
import { Launches } from '../constants/launches';
import { fetchLaunches } from '../services/fetchLaunches';
import { errorAlertToggle } from '../../../shared/components/ErrorAlert/actions/errorAlertActions';
import { fetchDefaults } from '../../../shared/api/constants/fetchDefaults';
import type { ErrorAlertToggle } from '../../../shared/components/ErrorAlert/types/errorAlertTypes';
import type { Dispatch } from '@reduxjs/toolkit';
import type { LaunchAction } from '../types/LaunchActions';
import type {
  LaunchResponse,
  LaunchResponseData,
} from '../types/LaunchResponse';

export const getLaunches =
  (filterValue: Launches, page: number = fetchDefaults.FIRST_PAGE) =>
  async (
    dispatch: Dispatch<LaunchAction | ErrorAlertToggle>,
  ): Promise<void> => {
    const isScrollLoading: boolean = page !== fetchDefaults.FIRST_PAGE;
    dispatch(launchRequestAction(filterValue, isScrollLoading));
    try {
      const response: LaunchResponse = await fetchLaunches(filterValue, page);
      const { results, count }: LaunchResponseData = response.data;
      dispatch(launchSuccessAction(filterValue, results, count));
    } catch (error) {
      dispatch(launchErrorAction(filterValue));
      dispatch(errorAlertToggle((error as Error).message));
    }
  };
