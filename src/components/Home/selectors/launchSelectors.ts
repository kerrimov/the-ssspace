import { useSelector } from 'react-redux';
import { Launches } from '../constants/launches';
import { StoreState } from '../../../store';
import type { Launch } from '../../../shared/api/types/Launch';

export const selectLaunches = (filterValue: Launches): Launch[] =>
  useSelector<StoreState, Launch[]>(state => state.launches[filterValue]);

export const selectLaunchLoadingStatus = (): boolean =>
  useSelector<StoreState, boolean>(state => state.launches.isLoading);

export const getSlides = (): Launch[] => [
  ...selectLaunches(Launches.UPCOMING).slice(0, 2),
  ...selectLaunches(Launches.PREVIOUS).slice(0, 1),
];
