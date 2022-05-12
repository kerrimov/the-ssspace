import { Dispatch } from 'redux';
import { fetchData } from './sliderFetch';
import { Endpoints } from '../../../shared/api/constants/endpoints';
import {
  sliderGetPreviousLaunchesError,
  sliderGetPreviousLaunchesSuccess,
  sliderLoadData,
} from '../redux/sliderActionsCreators';
import {
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
  ) => {
    try {
      dispatch(sliderLoadData());
      const upcomingLaunches = await fetchData(urlPreviousLaunches);
      dispatch(sliderGetPreviousLaunchesSuccess(upcomingLaunches));
    } catch (error) {
      dispatch(sliderGetPreviousLaunchesError(String(error)));
    }
  };
