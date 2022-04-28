import { useSelector } from 'react-redux';
import { StoreState } from '../';
import type { TemplateState } from '../types';

export const selectTemplate = (): TemplateState => {
  return useSelector<StoreState, TemplateState>(state => state.template);
};
