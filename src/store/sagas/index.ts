import { all, fork } from 'redux-saga/effects';
import { launchDetailRequestWatcher } from '../../components/LaunchDetailsPage/sagas/launchDetailsRequestWatcher/launchDetailRequestWatcher';

export function* rootSaga() {
  yield all([fork(launchDetailRequestWatcher)]);
}
