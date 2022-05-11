import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app/reducer';
import { agenciesReducer } from '../components/AgenciesPage/reducers/agenciesReducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    agencies: agenciesReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
