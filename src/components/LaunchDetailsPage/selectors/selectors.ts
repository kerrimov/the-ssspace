import { createSelector } from '@reduxjs/toolkit';
import { LaunchDetails } from '../types/LaunchDetails';

export const getActiveSlideData: any = createSelector(
  [
    (state: any) => state.slider.slides,
    (state: any) => state.slider.activeSlideId,
  ],
  (slidesDetails, activeSlideId) =>
    slidesDetails.find((slide: LaunchDetails) => slide.id === activeSlideId),
);
