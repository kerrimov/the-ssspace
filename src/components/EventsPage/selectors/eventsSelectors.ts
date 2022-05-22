import { useSelector } from 'react-redux';
import { StoreState } from '../../../store';
import { EventsState } from '../types/Events';

export const selectEvents = (): EventsState => {
  return useSelector<StoreState, EventsState>(state => state.events);
};
