import { Dispatch } from 'redux';
import {
  sliderGetData,
  sliderGetDataError,
  sliderGetDataSuccess,
} from '../redux/sliderActionsCreators';
import { fetchData } from './sliderFetch';
import { SliderAnyActions } from '../types/SliderTypes';

export const getSlides =
  (url1: string, url2: string) =>
  async (dispatch: Dispatch<SliderAnyActions>): Promise<void> => {
    try {
      dispatch(sliderGetData());
      const data = await Promise.all([fetchData(url1), fetchData(url2)]);
      console.log(data);
      const slides = data.flatMap((array, index) =>
        index === 0 ? array.slice(0, 2) : array.slice(0, 1),
      );
      dispatch(sliderGetDataSuccess(slides));
    } catch (e) {
      dispatch(sliderGetDataError(String(e)));
    }
  };
