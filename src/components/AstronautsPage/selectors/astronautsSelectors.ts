import { useSelector } from 'react-redux';
import { StoreState } from '../../../store';
import { AstronautsState } from '../types/Astronauts';

export const selectAstronauts = (): AstronautsState => {
  return useSelector<StoreState, AstronautsState>(state => state.astronauts);
};
