import { LaunchActions } from '../types/launchActionTypes';
import { LaunchFilters } from '../constants/filerConstants';
import type {
  FilterActionError,
  FilterActionRequest,
  FilterActionSuccess,
} from '../types/LaunchActions';
import type { Launch } from '../../../shared/api/types/Launch';

export const filterRequestAction = (
  filterValue: LaunchFilters,
): FilterActionRequest => ({
  type: `${filterValue}${LaunchActions.LAUNCH_REQUEST}`,
  payload: { filterValue },
});

export const filterSuccessAction = (
  filterValue: LaunchFilters,
  launches: Launch[],
): FilterActionSuccess => ({
  type: `${filterValue}${LaunchActions.LAUNCH_SUCCESS}`,
  payload: { filterValue, [filterValue]: launches },
});

export const filterErrorAction = (
  filterValue: LaunchFilters,
  error: string,
): FilterActionError => ({
  type: `${filterValue}${LaunchActions.LAUNCH_ERROR}`,
  payload: { filterValue, error },
});
