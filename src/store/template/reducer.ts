import { AnyAction } from 'redux';

import { TEMPLATE_TYPE_1, TEMPLATE_TYPE_2 } from './actionTypes';

export interface TemplateState {
  name?: string;
  value?: number;
}

const initialState: TemplateState = {
  name: '',
  value: 0,
};

export const templateReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case TEMPLATE_TYPE_1:
      return { ...state, name: payload.name };
    case TEMPLATE_TYPE_2:
      return { ...state, value: payload.value };
    default:
      return state;
  }
};
