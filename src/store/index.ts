import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app/reducer';
import { agenciesReducer } from '../components/AgenciesPage/reducers/agenciesReducer';
import { launchReducer } from '../components/LaunchFilter/reducers/launchReducer';
import { astronautsReducer } from '../components/AstronautsPage/reducers/astronautsReducer';

const reducer = combineReducers({
  app: appReducer,
  agencies: agenciesReducer,
  launches: launchReducer,
  astronauts: astronautsReducer,
});

export const store = configureStore({
  reducer,
});

export type StoreState = ReturnType<typeof store.getState>;
