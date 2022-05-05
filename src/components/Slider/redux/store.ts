import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { sliderReducer } from './sliderReducer';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});

type sliderState = ReturnType<typeof store.getState>;

export const useSelectorTyped: TypedUseSelectorHook<sliderState> = useSelector;
