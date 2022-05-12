import { createSelector } from '@reduxjs/toolkit';
import { StoreState } from '../../../store';
import { Slides } from '../types/SliderTypes';

export const getSlides = createSelector(
  [
    (state: StoreState) => state.slider.sliderUpcomingLaunches,
    (state: StoreState) => state.slider.sliderPreviousLaunches,
  ],

  (sliderUpcomingLaunches, sliderPreviousLaunches): Array<Slides> =>
    sliderUpcomingLaunches
      .slice(0, 2)
      .concat(sliderPreviousLaunches.slice(0, 1)),
);
