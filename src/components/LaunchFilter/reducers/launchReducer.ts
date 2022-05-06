import { AnyAction } from '@reduxjs/toolkit';
import {
  LAUNCH_REQUEST,
  LAUNCH_SUCCESS,
  LAUNCH_ERROR,
} from '../actions/actionTypes';
import { InitialState } from '../constants/initialState';

export const launchReducer = (
  state = InitialState,
  { type, payload }: AnyAction,
) => {
  if (!payload) return state;
  switch (type) {
    case `${payload.filterValue}_${LAUNCH_REQUEST}`:
      return { ...state, isLoading: true, error: null };

    case `${payload.filterValue}_${LAUNCH_SUCCESS}`:
      return {
        ...state,
        [payload.filterValue]: payload[payload.filterValue],
        isLoading: false,
      };

    case `${payload.filterValue}_${LAUNCH_ERROR}`:
      return { ...state, isLoading: false, error: payload.error };

    default:
      return state;
  }
};
