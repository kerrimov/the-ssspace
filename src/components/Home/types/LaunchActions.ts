import { Launches } from '../constants/launches';
import type { Launch } from '../../../shared/api/types/Launch';

export interface LaunchActionRequest {
  type: string;
  payload: {
    filterValue: Launches;
  };
}

export interface LaunchActionSuccess {
  type: string;
  payload: {
    filterValue: Launches;
    [Launches.UPCOMING]?: Launch[];
    [Launches.PREVIOUS]?: Launch[];
    [Launches.CREWED]?: Launch[];
    [Launches.CALIFORNIA]?: Launch[];
    [Launches.FLORIDA]?: Launch[];
  };
}

export interface LaunchActionError {
  type: string;
  payload: {
    filterValue: Launches;
    error: string;
  };
}

export type LaunchAction =
  | LaunchActionError
  | LaunchActionRequest
  | LaunchActionSuccess;
