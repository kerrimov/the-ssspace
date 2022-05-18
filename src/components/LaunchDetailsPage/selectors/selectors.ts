import { createSelector, Selector } from '@reduxjs/toolkit';
import { StoreState } from '../../../store';
import {
  getPreviousLaunches,
  getUpcomingLaunches,
} from '../../../shared/api/selectors/launchSelectors';
import type { Launch } from '../../../shared/api/types/Launch';

const getActiveSlideId: Selector<StoreState, string> = (state: StoreState) =>
  state.launches.error;

export const getActiveSlideData: Selector<StoreState, Launch> = createSelector(
  [getPreviousLaunches, getUpcomingLaunches, getActiveSlideId],
  (previousLaunches, upcomingLaunches, activeSlideId) =>
    <Launch>(
      [...previousLaunches, ...upcomingLaunches].find(
        (slide: Launch) => slide.id === activeSlideId,
      )
    ),
);
