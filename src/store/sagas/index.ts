import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import { launchDetailRequestWatcher } from '../../components/LaunchDetailsPage/sagas/launchDetailsRequestWatcher/launchDetailRequestWatcher';

export function* rootSaga(): Generator<AllEffect<ForkEffect>, void> {
  yield all([fork(launchDetailRequestWatcher)]);
}
