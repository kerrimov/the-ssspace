import { AnyAction } from '@reduxjs/toolkit';
import { SliderActions } from '../redux/sliderActions';

export interface Slides {
  image: string;
  net: string;
  id: string;
  name: string;
  mission: {
    description: string;
  };
}

export interface SliderInitialState {
  slides: Array<Slides>;
  isLoading: boolean;
  error: null | string;
  activeSlideId: null | string;
}

export interface SliderGetData extends AnyAction {
  type: SliderActions.LOAD_SLIDER_DATA;
}

export interface SliderGetDataSuccess extends AnyAction {
  type: SliderActions.GET_SLIDER_DATA_SUCCESS;
  payload: Array<Array<Slides>>;
}

export interface SliderGetDataError extends AnyAction {
  type: SliderActions.GET_SLIDER_DATA_ERROR;
  payload: null | string;
}

export interface SliderSetActiveID extends AnyAction {
  type: SliderActions.SET_ACTIVE_SLIDE_ID;
  payload: string;
}

export type SliderAnyActions =
  | SliderGetData
  | SliderGetDataSuccess
  | SliderGetDataError
  | SliderSetActiveID;
