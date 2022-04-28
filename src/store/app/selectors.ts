import { useSelector } from 'react-redux';
import { StoreState } from '..';
import type { AppState } from '../types';

export const selectApp = (): AppState => {
  return useSelector<StoreState, AppState>(state => state.app);
};
