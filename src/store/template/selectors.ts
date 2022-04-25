import { useSelector } from 'react-redux';

import { RootState } from '..';
import { TemplateState } from './reducer';

export const selectTemplate = (): TemplateState => {
  return useSelector<RootState, TemplateState>(state => state.template);
};
