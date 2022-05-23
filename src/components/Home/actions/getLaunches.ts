import {
  launchErrorAction,
  launchRequestAction,
  launchSuccessAction,
} from './launchActionCreators';
import { Launches } from '../constants/launches';
import { fetchLaunches } from '../services/fetchLaunches';
import type { Dispatch } from '@reduxjs/toolkit';
import type { LaunchAction } from '../types/LaunchActions';
import type { LaunchResponse } from '../types/LaunchResponse';

export const getLaunches =
  (filterValue: Launches) =>
  async (dispatch: Dispatch<LaunchAction>): Promise<void> => {
    dispatch(launchRequestAction(filterValue));
    try {
      const response: LaunchResponse = await fetchLaunches(filterValue);
      dispatch(launchSuccessAction(filterValue, response.data.results));
    } catch (error) {
      dispatch(launchErrorAction(filterValue, (error as Error).message));
    }
  };
