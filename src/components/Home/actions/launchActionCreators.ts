import { LaunchActionTypes } from '../types/launchActionTypes';
import { Launches } from '../constants/launches';
import type {
  LaunchActionError,
  LaunchActionRequest,
  LaunchActionSuccess,
} from '../types/LaunchActions';
import type { Launch } from '@shared/api/types/Launch';

export const launchRequestAction = (
  filterValue: Launches,
  isScrollLoading: boolean,
): LaunchActionRequest => ({
  type: `${filterValue}_${LaunchActionTypes.LAUNCH_REQUEST}`,
  payload: { filterValue, isScrollLoading },
});

export const launchSuccessAction = (
  filterValue: Launches,
  launches: Launch[],
  launchAmount: number,
): LaunchActionSuccess => ({
  type: `${filterValue}_${LaunchActionTypes.LAUNCH_SUCCESS}`,
  payload: { filterValue, launches, launchAmount },
});

export const launchErrorAction = (
  filterValue: Launches,
): LaunchActionError => ({
  type: `${filterValue}${LaunchActionTypes.LAUNCH_ERROR}`,
  payload: { filterValue },
});
