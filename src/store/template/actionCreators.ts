import { TemplateActionTypes } from './actionTypes';
import type { TemplateState } from '../types';

export const templateAction1 = (template: TemplateState) => ({
  type: TemplateActionTypes.TEMPLATE_TYPE_1,
  payload: template,
});
