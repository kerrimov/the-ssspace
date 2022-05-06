import { Dispatch } from 'redux';
import {
  sliderGetData,
  sliderGetDataError,
  sliderGetDataSuccess,
} from '../redux/sliderActionsCreators';
import { fetchData } from './sliderFetch';
import { SliderAnyActions } from '../types/SliderTypes';

export const getSlides =
  (upcomingLaunchesUrl: string, previousLaunchesUrl: string) =>
  async (dispatch: Dispatch<SliderAnyActions>): Promise<void> => {
    try {
      dispatch(sliderGetData());
      const data = await Promise.all([
        fetchData(upcomingLaunchesUrl),
        fetchData(previousLaunchesUrl),
      ]);
      const slides = data.flatMap((launchesArray, index) =>
        index === 0 ? launchesArray.slice(0, 2) : launchesArray.slice(0, 1),
      );
      dispatch(sliderGetDataSuccess(slides));
    } catch (error) {
      dispatch(sliderGetDataError(String(error)));
    }
  };
