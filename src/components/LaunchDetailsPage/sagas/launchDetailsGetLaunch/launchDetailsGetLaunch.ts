import { call, put } from 'redux-saga/effects';
import { getLaunch } from '../../services/getLaunch/getLaunch';
import {
  launchDetailsGetLaunchError,
  launchDetailsGetLaunchSuccess,
  launchDetailsLoading,
} from '../../actions/launchDetailsAction';
import type { LaunchDetailsGetLaunchRequest } from '../../types/launchDetailsTypes';
import type { Launch } from '../../../../shared/api/types/Launch';

export function* launchDetailsGetLaunch(action: LaunchDetailsGetLaunchRequest) {
  try {
    yield put(launchDetailsLoading());
    const data: Launch = yield call(getLaunch, action.payload);
    yield put(launchDetailsGetLaunchSuccess(data));
  } catch {
    yield put(launchDetailsGetLaunchError());
  }
}
