import {
  LaunchDetailsAction,
  LaunchDetailsGetLaunchError,
  LaunchDetailsTypes,
  LaunchDetailsLoading,
  LaunchDetailsGetLaunchRequest,
} from '../types/launchDetailsTypes';
import { Launch } from '../../../shared/api/types/Launch';

export const launchDetailsLoading = (): LaunchDetailsLoading => ({
  type: LaunchDetailsAction.LAUNCH_DETAILS_LOADING,
});

export const launchDetailsGetLaunchSuccess = (
  launch: Launch,
): LaunchDetailsTypes => ({
  type: LaunchDetailsAction.LAUNCH_DETAILS_LOADING_GET_LAUNCH_SUCCESS,
  payload: launch,
});

export const launchDetailsGetLaunchError = (): LaunchDetailsGetLaunchError => ({
  type: LaunchDetailsAction.LAUNCH_DETAILS_LOADING_GET_LAUNCH_ERROR,
});

export const launchDetailsGetLaunchRequest = (
  id: string | undefined,
): LaunchDetailsGetLaunchRequest => ({
  type: LaunchDetailsAction.LAUNCH_DETAILS_GET_LAUNCH_REQUEST,
  payload: id,
});
