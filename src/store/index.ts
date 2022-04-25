import { configureStore } from '@reduxjs/toolkit';

import { templateReducer } from './template/reducer';

export const store = configureStore({
  reducer: {
    template: templateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
