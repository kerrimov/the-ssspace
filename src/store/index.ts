import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app/reducer';
import { agenciesReducer } from '../components/AgenciesPage/reducers/agenciesReducer';
import { launchReducer } from '../components/Home/reducers/launchReducer';
import { astronautsReducer } from '../components/AstronautsPage/reducers/astronautsReducer';
import { sliderReducer } from '../components/Slider/reducers/sliderReducer';
import { eventsReducer } from '../components/EventsPage/reducers/eventsReducer';

const reducer = combineReducers({
  app: appReducer,
  agencies: agenciesReducer,
  launches: launchReducer,
  astronauts: astronautsReducer,
  slider: sliderReducer,
  events: eventsReducer,
});

export const store = configureStore({
  reducer,
});

export type StoreState = ReturnType<typeof store.getState>;
