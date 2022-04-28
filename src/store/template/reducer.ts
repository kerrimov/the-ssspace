import { AnyAction } from 'redux';
import { TemplateActionTypes } from './actionTypes';
import type { TemplateState } from '../types';

const initialState: TemplateState = {
  name: '',
  value: 0,
};

export const templateReducer = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case TemplateActionTypes.TEMPLATE_TYPE_1:
      return { ...state, name: payload.name };
    default:
      return state;
  }
};
