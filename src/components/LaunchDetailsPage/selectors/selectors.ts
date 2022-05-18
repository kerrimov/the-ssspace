import { useSelector } from 'react-redux';
import { Launch } from '../../../shared/api/types/Launch';
import { StoreState } from '../../../store';

export const getPreviousLaunches = (): Launch[] =>
  useSelector<StoreState, Launch[]>(
    state => state.slider.sliderPreviousLaunches,
  );

export const getUpcomingLaunches = (): Launch[] =>
  useSelector<StoreState, Launch[]>(
    state => state.slider.sliderUpcomingLaunches,
  );

const getActiveSlideId = (): string | undefined =>
  useSelector<StoreState, string | undefined>(
    state => state.slider.activeSlideId,
  );

export const getActiveSlideData = (): Launch =>
  <Launch>(
    [...getPreviousLaunches(), ...getUpcomingLaunches()].find(
      (slide: Launch) => slide.id === getActiveSlideId(),
    )
  );
