import { useSelector } from 'react-redux';
import { selectLaunches } from '../../Home/selectors/launchSelectors';
import type { StoreState } from '../../../store';
import type { Launch } from '../../../shared/api/types/Launch';

const selectActiveSlideId = (): string | undefined =>
  useSelector<StoreState, string | undefined>(
    state => state.slider.activeSlideId,
  );

export const selectLaunchDetails = (): Launch => {
  const { launches }: { launches: Launch[] } = selectLaunches();
  return <Launch>(
    launches.find((slide: Launch) => slide.id === selectActiveSlideId())
  );
};
