import type { Launch } from '../../../shared/api/types/Launch';

export interface LaunchDetailsState {
  launch: Launch | null;
  isLoading: boolean;
}

export const enum LaunchDetailsAction {
  LAUNCH_DETAILS_LOADING = 'LAUNCH_DETAILS_LOADING',
  LAUNCH_DETAILS_LOADING_GET_LAUNCH_SUCCESS = 'LAUNCH_DETAILS_LOADING_GET_LAUNCH_SUCCESS',
  LAUNCH_DETAILS_LOADING_GET_LAUNCH_ERROR = 'LAUNCH_DETAILS_LOADING_GET_LAUNCH_ERROR',
  LAUNCH_DETAILS_MOUNTED = 'LAUNCH_DETAILS_MOUNTED',
}

export interface LaunchDetailsLoading {
  type: LaunchDetailsAction.LAUNCH_DETAILS_LOADING;
}

export interface LaunchDetailsTypes {
  type: LaunchDetailsAction.LAUNCH_DETAILS_LOADING_GET_LAUNCH_SUCCESS;
  payload: Launch;
}

export interface LaunchDetailsGetLaunchError {
  type: LaunchDetailsAction.LAUNCH_DETAILS_LOADING_GET_LAUNCH_ERROR;
}

export type LaunchDetailsAllActions =
  | LaunchDetailsLoading
  | LaunchDetailsTypes
  | LaunchDetailsGetLaunchError;
