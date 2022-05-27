import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { agenciesReducer } from '../components/AgenciesPage/reducers/agenciesReducer';
import { launchReducer } from '../components/Home/reducers/launchReducer';
import { astronautsReducer } from '../components/AstronautsPage/reducers/astronautsReducer';
import { sliderReducer } from '../components/Slider/reducers/sliderReducer';
import { errorAlertReducer } from '../shared/components/ErrorAlert/reducers/errorAlert';
import { eventsReducer } from '../components/EventsPage/reducers/eventsReducer';
import { launchDetailsReducer } from '../components/LaunchDetailsPage/reducers/launchDetailsReducer';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  agencies: agenciesReducer,
  launches: launchReducer,
  astronauts: astronautsReducer,
  slider: sliderReducer,
  errorAlert: errorAlertReducer,
  events: eventsReducer,
  launchDetails: launchDetailsReducer,
});

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type StoreState = ReturnType<typeof store.getState>;
