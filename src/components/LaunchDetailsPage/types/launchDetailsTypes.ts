import type { Launch } from '../../../shared/api/types/Launch';

export interface LaunchDetailsState {
  launch: Launch | null;
  isLoading: boolean;
}

export const enum LaunchDetailsAction {
  LAUNCH_DETAILS_LOADING = 'LAUNCH_DETAILS_LOADING',
  LAUNCH_DETAILS_LOADING_GET_LAUNCH_SUCCESS = 'LAUNCH_DETAILS_LOADING_GET_LAUNCH_SUCCESS',
  LAUNCH_DETAILS_LOADING_GET_LAUNCH_ERROR = 'LAUNCH_DETAILS_LOADING_GET_LAUNCH_ERROR',
  LAUNCH_DETAILS_GET_LAUNCH_REQUEST = 'LAUNCH_DETAILS_GET_LAUNCH_REQUEST',
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

export interface LaunchDetailsGetLaunchRequest {
  type: LaunchDetailsAction.LAUNCH_DETAILS_GET_LAUNCH_REQUEST;
  payload: string | undefined;
}

export type LaunchDetailsAllActions =
  | LaunchDetailsLoading
  | LaunchDetailsTypes
  | LaunchDetailsGetLaunchError
  | LaunchDetailsGetLaunchRequest;

export type LaunchDetailsPageUrlParams = {
  id: string;
};
