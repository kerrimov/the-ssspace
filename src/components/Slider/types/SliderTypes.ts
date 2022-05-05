import { AnyAction } from '@reduxjs/toolkit';
import { SliderActions } from '../redux/sliderActions';

export interface Slides {
  image: string;
  net: string;
  id: string;
  name: string;
}

export interface SliderInitialState<T> {
  slides: Array<T>;
  isLoading: boolean;
  error: null | string;
  activeSlideID: null | string;
}

export interface SliderGetData extends AnyAction {
  type: typeof SliderActions.GET_DATA;
}

export interface SliderGetDataSuccess extends AnyAction {
  type: typeof SliderActions.GET_DATA_SUCCESS;
  payload: Array<Slides>;
}

export interface SliderGetDataError extends AnyAction {
  type: typeof SliderActions.GET_DATA_ERROR;
  payload: null | string;
}

export interface SliderSetActiveID extends AnyAction {
  type: typeof SliderActions.SET_ACTIVE_ID;
  payload: string;
}

export type SliderAnyActions =
  | SliderGetData
  | SliderGetDataSuccess
  | SliderGetDataError
  | SliderSetActiveID;
