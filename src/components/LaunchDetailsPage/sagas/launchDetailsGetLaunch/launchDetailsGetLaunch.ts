import { call, put, PutEffect, CallEffect } from 'redux-saga/effects';
import { getLaunch } from '../../services/getLaunch/getLaunch';
import {
  launchDetailsGetLaunchError,
  launchDetailsGetLaunchSuccess,
  launchDetailsLoading,
} from '../../actions/launchDetailsAction';
import { errorAlertToggle } from '../../../../shared/components/ErrorAlert/actions/errorAlertActions';
import type { ErrorAlertToggle } from '../../../../shared/components/ErrorAlert/types/errorAlertTypes';
import type {
  LaunchDetailsGetDataSuccess,
  LaunchDetailsGetLaunchError,
  LaunchDetailsGetLaunchRequest,
  LaunchDetailsLoading,
} from '../../types/launchDetailesTypes';
import type { Launch } from '../../../../shared/api/types/Launch';

export function* launchDetailsGetLaunch(
  action: LaunchDetailsGetLaunchRequest,
): Generator<
  | PutEffect<LaunchDetailsLoading>
  | CallEffect<Launch>
  | PutEffect<LaunchDetailsGetDataSuccess>
  | PutEffect<LaunchDetailsGetLaunchError>
  | PutEffect<ErrorAlertToggle>,
  void,
  Launch
> {
  try {
    yield put(launchDetailsLoading());
    const data: Launch = yield call(getLaunch, action.payload);
    yield put(launchDetailsGetLaunchSuccess(data));
  } catch (error) {
    yield put(launchDetailsGetLaunchError());
    yield put(errorAlertToggle((error as Error).message));
  }
}
