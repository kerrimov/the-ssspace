import { Dispatch } from 'redux';
import { fetchData } from './sliderFetch';
import { Endpoints } from '../../../shared/api/constants/endpoints';
import {
  sliderGetUpcomingLaunchesError,
  sliderGetUpcomingLaunchesSuccess,
  sliderLoadData,
} from '../redux/sliderActionsCreators';
import {
  SliderGetUpcomingLaunchesError,
  SliderGetUpcomingLaunchesSuccess,
  SliderLoadData,
} from '../types/SliderTypes';

export const getUpcomingLaunches =
  (
    urlUpcomingLaunches = `${Endpoints.BASE_ENDPOINT}${Endpoints.GO_FOR_LAUNCHES_ENDPOINT}`,
  ) =>
  async (
    dispatch: Dispatch<
      | SliderLoadData
      | SliderGetUpcomingLaunchesSuccess
      | SliderGetUpcomingLaunchesError
    >,
  ): Promise<void> => {
    try {
      dispatch(sliderLoadData());
      const upcomingLaunches = await fetchData(urlUpcomingLaunches);
      dispatch(sliderGetUpcomingLaunchesSuccess(upcomingLaunches));
    } catch (error) {
      dispatch(sliderGetUpcomingLaunchesError(String(error)));
    }
  };
