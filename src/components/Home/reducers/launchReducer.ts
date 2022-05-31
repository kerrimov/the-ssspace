import { Launches } from '../constants/launches';
import { LaunchActionTypes } from '../types/launchActionTypes';
import {
  LaunchAction,
  LaunchActionPayloadRequest,
  LaunchActionPayloadSuccess,
} from '../types/LaunchActions';
import type { Launch } from '../../../shared/api/types/Launch';
import type { LaunchState } from '../types/LaunchState';

const initState: LaunchState = {
  launches: [],
  launchAmount: 0,
  isLoading: false,
  isScrollLoading: false,
};

export const launchReducer = (
  state = initState,
  action: LaunchAction,
): LaunchState => {
  if (!action.payload) return state;
  const filterValue: Launches = action.payload.filterValue;

  const checkPage = (launches: Launch[]): Launch[] => {
    if (!state.isScrollLoading) return launches;
    else return [...state.launches, ...launches];
  };

  switch (action.type) {
    case `${filterValue}_${LaunchActionTypes.LAUNCH_REQUEST}`: {
      const { isScrollLoading } = action.payload as LaunchActionPayloadRequest;
      return { ...state, isLoading: true, isScrollLoading };
    }

    case `${filterValue}_${LaunchActionTypes.LAUNCH_SUCCESS}`: {
      const { launches, launchAmount } =
        action.payload as LaunchActionPayloadSuccess;
      return {
        ...state,
        launches: checkPage(launches),
        launchAmount,
        isLoading: false,
      };
    }

    case `${filterValue}_${LaunchActionTypes.LAUNCH_ERROR}`:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
