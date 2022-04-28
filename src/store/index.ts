import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app/reducer';
import { templateReducer } from './template/reducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
    template: templateReducer /* for example, will be changed*/,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
