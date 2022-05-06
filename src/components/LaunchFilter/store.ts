import { configureStore } from '@reduxjs/toolkit';
import { launchReducer } from './reducers/launchReducer';

export const store = configureStore({
  reducer: launchReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
