import { fetchData } from './sliderFetch';
import { Endpoints } from '../../../shared/api/constants/endpoints';
import {
  sliderGetPreviousLaunchesError,
  sliderGetPreviousLaunchesSuccess,
  sliderLoadData,
} from '../redux/sliderActionsCreators';
import type { Dispatch } from 'redux';
import type {
  SliderGetPreviousLaunchesError,
  SliderGetPreviousLaunchesSuccess,
  SliderLoadData,
} from '../types/SliderTypes';

export const getPreviousLaunches =
  (
    urlPreviousLaunches = `${Endpoints.BASE_ENDPOINT}${Endpoints.PREVIOUS_LAUNCHES_ENDPOINT}`,
  ) =>
  async (
    dispatch: Dispatch<
      | SliderLoadData
      | SliderGetPreviousLaunchesSuccess
      | SliderGetPreviousLaunchesError
    >,
  ): Promise<void> => {
    try {
      dispatch(sliderLoadData());
      const upcomingLaunches = await fetchData(urlPreviousLaunches);
      dispatch(sliderGetPreviousLaunchesSuccess(upcomingLaunches));
    } catch (error) {
      dispatch(sliderGetPreviousLaunchesError((error as Error).message));
    }
  };
