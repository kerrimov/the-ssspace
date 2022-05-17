import { Launch } from '../../../shared/api/types/Launch';
import { LaunchFilters } from '../constants/filerConstants';

export interface FilterActionRequest {
  type: string;
  payload: {
    filterValue: LaunchFilters;
  };
}

export interface FilterActionSuccess {
  type: string;
  payload: {
    filterValue: LaunchFilters;
    [LaunchFilters.PREVIOUS]?: Launch[];
    [LaunchFilters.CREWED]?: Launch[];
    [LaunchFilters.CALIFORNIA]?: Launch[];
    [LaunchFilters.FLORIDA]?: Launch[];
  };
}

export interface FilterActionError {
  type: string;
  payload: {
    filterValue: LaunchFilters;
    error: string;
  };
}

export type FilterAction =
  | FilterActionError
  | FilterActionRequest
  | FilterActionSuccess;
