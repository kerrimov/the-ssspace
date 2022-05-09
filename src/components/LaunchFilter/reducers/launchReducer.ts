import { AnyAction } from '@reduxjs/toolkit';
import { LaunchActions } from '../actions/actionTypes';
import { InitialState } from '../constants/initialState';

export const launchReducer = (
  state = InitialState,
  { type, payload }: AnyAction,
) => {
  if (!payload) return state;
  switch (type) {
    case `${payload.filterValue}_${LaunchActions.LAUNCH_REQUEST}`:
      return { ...state, isLoading: true, error: null };

    case `${payload.filterValue}_${LaunchActions.LAUNCH_SUCCESS}`:
      return {
        ...state,
        [payload.filterValue]: payload[payload.filterValue],
        isLoading: false,
      };

    case `${payload.filterValue}_${LaunchActions.LAUNCH_ERROR}`:
      return { ...state, isLoading: false, error: payload.error };

    default:
      return state;
  }
};
