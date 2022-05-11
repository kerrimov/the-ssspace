import { useSelector } from 'react-redux';
import { Agency } from '../types/Agencies';
import type { StoreState } from '../../../store';

export const selectAgencies = (): Agency[] => {
  return useSelector<StoreState, Agency[]>(state => state.agencies.agencies);
};
