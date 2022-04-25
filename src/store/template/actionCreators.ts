import { TEMPLATE_TYPE_1, TEMPLATE_TYPE_2 } from './actionTypes';
import type { TemplateState } from './reducer';

export const templateAction1 = (template: TemplateState) => ({
  type: TEMPLATE_TYPE_1,
  payload: template,
});

export const templateAction2 = (template: TemplateState) => ({
  type: TEMPLATE_TYPE_2,
  payload: template,
});
