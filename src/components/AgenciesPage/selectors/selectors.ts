import { useSelector } from 'react-redux';
import { AgenciesState } from '../types/Agencies';
import type { StoreState } from '../../../store';

export const selectAgencies = (): AgenciesState => {
  return useSelector<StoreState, AgenciesState>(state => state.agencies);
};
