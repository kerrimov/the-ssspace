import { useSelector } from 'react-redux';
import { selectLaunches } from '../../Home/selectors/launchSelectors';
import { StoreState } from '../../../store';
import { Launches } from '../../Home/constants/launches';
import type { Launch } from '../../../shared/api/types/Launch';

const selectActiveSlideId = (): string | undefined =>
  useSelector<StoreState, string | undefined>(
    state => state.slider.activeSlideId,
  );

export const getActiveSlideData = (): Launch =>
  <Launch>(
    [
      ...selectLaunches(Launches.UPCOMING),
      ...selectLaunches(Launches.PREVIOUS),
      ...selectLaunches(Launches.CREWED),
      ...selectLaunches(Launches.CALIFORNIA),
      ...selectLaunches(Launches.FLORIDA),
    ].find((slide: Launch) => slide.id === selectActiveSlideId())
  );
