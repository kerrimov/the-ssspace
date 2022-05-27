import { takeLatest } from 'redux-saga/effects';
import { LaunchDetailsAction } from '../../types/launchDetailsTypes';
import { launchDetailsGetLaunch } from '../launchDetailsGetLaunch/launchDetailsGetLaunch';

export function* launchDetailRequestWatcher() {
  yield takeLatest(
    LaunchDetailsAction.LAUNCH_DETAILS_GET_LAUNCH_REQUEST,
    launchDetailsGetLaunch,
  );
}
