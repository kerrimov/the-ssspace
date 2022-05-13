import { createSelector } from '@reduxjs/toolkit';
import { StoreState } from '../../../store';
import { LaunchDetails } from '../types/LaunchDetails';

export const getActiveSlideData = createSelector(
  [
    (state: StoreState) => state.slider.sliderPreviousLaunches,
    (state: StoreState) => state.slider.sliderUpcomingLaunches,
    (state: StoreState) => state.slider.activeSlideId,
  ],
  (previousLaunches, upcomingLaunches, activeSlideId): LaunchDetails =>
    [...previousLaunches, ...upcomingLaunches].find(
      (slide: LaunchDetails) => slide.id === activeSlideId,
    ),
);
