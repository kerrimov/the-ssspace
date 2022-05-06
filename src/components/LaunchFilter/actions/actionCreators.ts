import { AxiosError } from 'axios';
import type { Launch } from '../../../shared/api/types/Launch';
import { LaunchFilters } from '../constants/filerConstants';
import { LAUNCH_ERROR, LAUNCH_REQUEST, LAUNCH_SUCCESS } from './actionTypes';

export const requesAction = (filterValue: LaunchFilters) => ({
  type: `${filterValue}_${LAUNCH_REQUEST}`,
  payload: { filterValue },
});

export const successAction = (
  filterValue: LaunchFilters,
  launches: Launch[],
) => ({
  type: `${filterValue}_${LAUNCH_SUCCESS}`,
  payload: { filterValue: filterValue, [filterValue]: launches },
});

export const errorAction = (filterValue: LaunchFilters, error: AxiosError) => ({
  type: `${filterValue}_${LAUNCH_ERROR}`,
  payload: { filterValue: filterValue, error: error as AxiosError },
});
