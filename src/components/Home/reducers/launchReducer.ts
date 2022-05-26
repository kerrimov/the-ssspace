import { AnyAction } from '@reduxjs/toolkit';
import { Launches } from '../constants/launches';
import { LaunchActionTypes } from '../types/launchActionTypes';
import type { LaunchState } from '../types/LaunchState';

const initialState: LaunchState = {
  [Launches.UPCOMING]: [],
  [Launches.PREVIOUS]: [],
  [Launches.CREWED]: [],
  [Launches.CALIFORNIA]: [],
  [Launches.FLORIDA]: [],
  isLoading: false,
};

export const launchReducer = (state = initialState, action: AnyAction) => {
  if (!action.payload) return state;
  const { type, payload } = action;
  const { filterValue } = payload;
  switch (type) {
    case `${filterValue}${LaunchActionTypes.LAUNCH_REQUEST}`:
      return { ...state, isLoading: true, error: '' };

    case `${filterValue}${LaunchActionTypes.LAUNCH_SUCCESS}`: {
      return {
        ...state,
        [filterValue]: payload[filterValue],
        isLoading: false,
      };
    }

    case `${filterValue}${LaunchActionTypes.LAUNCH_ERROR}`: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};
