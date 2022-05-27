import {
  takeLatest,
  StrictEffect,
  ForkEffectDescriptor,
} from 'redux-saga/effects';
import { LaunchDetailsAction } from '../../types/launchDetailesTypes';
import { launchDetailsGetLaunch } from '../launchDetailsGetLaunch/launchDetailsGetLaunch';

export function* launchDetailRequestWatcher(): Generator<
  StrictEffect<'FORK', ForkEffectDescriptor<never>>
> {
  yield takeLatest(
    LaunchDetailsAction.LAUNCH_DETAILS_GET_LAUNCH_REQUEST,
    launchDetailsGetLaunch,
  );
}
