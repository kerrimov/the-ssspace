import { LaunchActionTypes } from '../types/launchActionTypes';
import { Launches } from '../constants/launches';
import type {
  LaunchActionError,
  LaunchActionRequest,
  LaunchActionSuccess,
} from '../types/LaunchActions';
import type { Launch } from '../../../shared/api/types/Launch';

export const launchRequestAction = (
  filterValue: Launches,
): LaunchActionRequest => ({
  type: `${filterValue}${LaunchActionTypes.LAUNCH_REQUEST}`,
  payload: { filterValue },
});

export const launchSuccessAction = (
  filterValue: Launches,
  launches: Launch[],
): LaunchActionSuccess => ({
  type: `${filterValue}${LaunchActionTypes.LAUNCH_SUCCESS}`,
  payload: { filterValue, [filterValue]: launches },
});

export const launchErrorAction = (
  filterValue: Launches,
  error: string,
): LaunchActionError => ({
  type: `${filterValue}${LaunchActionTypes.LAUNCH_ERROR}`,
  payload: { filterValue, error },
});
