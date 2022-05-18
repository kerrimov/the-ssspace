import { Selector } from '@reduxjs/toolkit';
import { LaunchFilters } from '../../../components/LaunchFilter/constants/filerConstants';
import { StoreState } from '../../../store';
import type { Launch } from '../types/Launch';

export const getPreviousLaunches: Selector<StoreState, Launch[]> = (
  state: StoreState,
) => state.launches[LaunchFilters.PREVIOUS];

export const getUpcomingLaunches: Selector<StoreState, Launch[]> = (
  state: StoreState,
) => state.launches[LaunchFilters.CREWED];
