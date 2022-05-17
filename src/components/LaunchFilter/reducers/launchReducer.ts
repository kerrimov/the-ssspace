import { AnyAction } from '@reduxjs/toolkit';
import { LaunchFilters } from '../constants/filerConstants';
import { LaunchActions } from '../types/launchActionTypes';
import type { LaunchesState } from '../types/LaunchesState';

const initialState: LaunchesState = {
  [LaunchFilters.PREVIOUS]: [],
  [LaunchFilters.CREWED]: [],
  [LaunchFilters.CALIFORNIA]: [],
  [LaunchFilters.FLORIDA]: [],
  isLoading: false,
  error: '',
};

export const launchReducer = (state = initialState, action: AnyAction) => {
  if (!action.payload) return state;
  const { type, payload } = action;
  const { filterValue, error } = payload;
  switch (type) {
    case `${filterValue}${LaunchActions.LAUNCH_REQUEST}`:
      return { ...state, isLoading: true, error: '' };

    case `${filterValue}${LaunchActions.LAUNCH_SUCCESS}`: {
      return {
        ...state,
        [filterValue]: payload[filterValue],
        isLoading: false,
      };
    }

    case `${filterValue}${LaunchActions.LAUNCH_ERROR}`: {
      return { ...state, isLoading: false, error };
    }

    default:
      return state;
  }
};
