import { useSelector } from 'react-redux';
import type { StoreState } from '../../../store';
import type { LaunchState } from '../types/LaunchState';

export const selectLaunches = (): LaunchState =>
  useSelector<StoreState, LaunchState>(state => state.launches);
