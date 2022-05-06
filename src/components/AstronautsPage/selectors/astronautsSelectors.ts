import { useSelector } from 'react-redux';
import { StoreState } from '../../../store';
import { Astronauts } from '../types/Astronauts';

export const selectAstronauts = (): { astronauts: Astronauts[] } => {
  return useSelector<StoreState, { astronauts: Astronauts[] }>(
    state => state.astronauts,
  );
};
