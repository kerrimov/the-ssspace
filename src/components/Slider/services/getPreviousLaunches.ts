import { fetchData } from '../../../shared/api/services/fetchData';
import { Endpoints } from '../../../shared/api/constants/endpoints';
import {
  sliderGetPreviousLaunchesError,
  sliderGetPreviousLaunchesSuccess,
  sliderLoadData,
} from '../actions/sliderActions';
import type { Dispatch } from 'redux';
import type {
  SliderGetPreviousLaunchesError,
  SliderGetPreviousLaunchesSuccess,
  SliderLoadData,
  Slides,
} from '../types/SliderTypes';

export const getPreviousLaunches =
  () =>
  async (
    dispatch: Dispatch<
      | SliderLoadData
      | SliderGetPreviousLaunchesSuccess
      | SliderGetPreviousLaunchesError
    >,
  ): Promise<void> => {
    try {
      dispatch(sliderLoadData());
      const upcomingLaunches = await fetchData<Array<Slides>>(
        Endpoints.PREVIOUS_LAUNCHES_ENDPOINT,
      );
      dispatch(sliderGetPreviousLaunchesSuccess(upcomingLaunches));
    } catch (error) {
      dispatch(sliderGetPreviousLaunchesError((error as Error).message));
    }
  };
