import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import type { LaunchResponse } from '../types/LaunchResponse';
import { LaunchFilters } from '../constants/filerConstants';
import { fetchLaunches } from '../services/fetchLaunches';
import { errorAction, requesAction, successAction } from './actionCreators';

export const getFilteredLaunches =
  (filterValue: LaunchFilters) =>
  async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    dispatch(requesAction(filterValue));
    try {
      const response: LaunchResponse = await fetchLaunches(filterValue);
      dispatch(successAction(filterValue, response.data.results));
    } catch (error) {
      dispatch(errorAction(filterValue, error as AxiosError));
    }
  };
