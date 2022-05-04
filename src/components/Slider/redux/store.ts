import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { SliderInitialState, Slides } from '../types/SliderTypes';
import { sliderReducer } from './sliderReducer';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
  },
});

export const useSelectorTyped: TypedUseSelectorHook<
  SliderInitialState<Slides>
> = useSelector;
