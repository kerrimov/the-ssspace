import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app/reducer';
import { agenciesReducer } from '../components/AgenciesPage/reducers/agenciesReducer';
import { launchReducer } from '../components/LaunchFilter/reducers/launchReducer';

const reducer = combineReducers({
  app: appReducer,
  agencies: agenciesReducer,
  launches: launchReducer,
});

export const store = configureStore({
  reducer,
});

export type StoreState = ReturnType<typeof store.getState>;
