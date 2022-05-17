import { Dispatch } from '@reduxjs/toolkit';
import {
  filterErrorAction,
  filterRequestAction,
  filterSuccessAction,
} from './actionCreators';
import { LaunchFilters } from '../constants/filerConstants';
import { fetchLaunches } from '../services/fetchLaunches';
import type { FilterAction } from '../types/LaunchActions';
import type { LaunchResponse } from '../types/LaunchResponse';

export const getFilteredLaunches =
  (filterValue: LaunchFilters) =>
  async (dispatch: Dispatch<FilterAction>): Promise<void> => {
    dispatch(filterRequestAction(filterValue));
    try {
      const response: LaunchResponse = await fetchLaunches(filterValue);
      dispatch(filterSuccessAction(filterValue, response.data.results));
    } catch (error) {
      dispatch(filterErrorAction(filterValue, (error as Error).message));
    }
  };
