import { Launches } from '../constants/launches';
import type { Launch } from '../../../shared/api/types/Launch';

export interface LaunchActionRequest {
  type: string;
  payload: {
    filterValue: Launches;
    isScrollLoading: boolean;
  };
}

export interface LaunchActionSuccess {
  type: string;
  payload: {
    filterValue: Launches;
    launches: Launch[];
    launchAmount: number;
  };
}

export interface LaunchActionError {
  type: string;
  payload: {
    filterValue: Launches;
  };
}

export type LaunchAction =
  | LaunchActionError
  | LaunchActionRequest
  | LaunchActionSuccess;
