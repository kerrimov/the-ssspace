import { useSelector } from 'react-redux';
import { Agency } from '../types/Agencies';
import type { StoreState } from '../../../store';

export const selectAgencies = (): { agencies: Agency[] } => {
  return useSelector<StoreState, { agencies: Agency[] }>(
    state => state.agencies,
  );
};
