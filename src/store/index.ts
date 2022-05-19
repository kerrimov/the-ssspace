import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { agenciesReducer } from '../components/AgenciesPage/reducers/agenciesReducer';
import { launchReducer } from '../components/Home/reducers/launchReducer';
import { astronautsReducer } from '../components/AstronautsPage/reducers/astronautsReducer';
import { sliderReducer } from '../components/Slider/reducers/sliderReducer';
import { errorAlertReducer } from '../shared/components/ErrorAlert/reducers/errorAlert';
import { eventsReducer } from '../components/EventsPage/reducers/eventsReducer';

const reducer = combineReducers({
  agencies: agenciesReducer,
  launches: launchReducer,
  astronauts: astronautsReducer,
  slider: sliderReducer,
  errorAlert: errorAlertReducer,
  events: eventsReducer,
});

export const store = configureStore({
  reducer,
});

export type StoreState = ReturnType<typeof store.getState>;
