import {
  launchErrorAction,
  launchRequestAction,
  launchSuccessAction,
} from './launchActionCreators';
import { Launches } from '../constants/launches';
import { fetchLaunches } from '../services/fetchLaunches';
import { fetchDefaults } from '../../../shared/api/constants/fetchDefaults';
import type { Dispatch } from '@reduxjs/toolkit';
import type { LaunchAction } from '../types/LaunchActions';
import type { LaunchResponse } from '../types/LaunchResponse';

export const getLaunches =
  (filterValue: Launches, page: number = fetchDefaults.FIRST_PAGE) =>
  async (dispatch: Dispatch<LaunchAction>): Promise<void> => {
    const isScrollLoading: boolean = page !== 1;
    dispatch(launchRequestAction(filterValue, isScrollLoading));
    try {
      const response: LaunchResponse = await fetchLaunches(filterValue, page);
      const { results, count }: LaunchResponse['data'] = response.data;
      dispatch(launchSuccessAction(filterValue, results, count));
    } catch (error) {
      dispatch(launchErrorAction(filterValue, (error as Error).message));
    }
  };
