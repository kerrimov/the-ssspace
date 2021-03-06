import { fetchData } from '@shared/api/services/fetchData';
import { Endpoints } from '@shared/api/constants/endpoints';
import { errorAlertToggle } from '@shared/components/ErrorAlert/actions/errorAlertActions';
import {
  sliderGetUpcomingLaunchesError,
  sliderGetUpcomingLaunchesSuccess,
  sliderLoadData,
} from '../actions/sliderActions';
import type { Dispatch } from 'redux';
import type {
  SliderGetUpcomingLaunchesError,
  SliderGetUpcomingLaunchesSuccess,
  SliderLoadData,
  Slides,
} from '../types/SliderTypes';
import type { ErrorAlertToggle } from '@shared/components/ErrorAlert/types/errorAlertTypes';

export const getUpcomingLaunches =
  () =>
  async (
    dispatch: Dispatch<
      | SliderLoadData
      | SliderGetUpcomingLaunchesSuccess
      | SliderGetUpcomingLaunchesError
      | ErrorAlertToggle
    >,
  ): Promise<void> => {
    try {
      dispatch(sliderLoadData());
      const upcomingLaunches = await fetchData<Array<Slides>>(
        Endpoints.GO_FOR_LAUNCHES_ENDPOINT,
      );
      dispatch(sliderGetUpcomingLaunchesSuccess(upcomingLaunches));
    } catch (error) {
      dispatch(sliderGetUpcomingLaunchesError());
      dispatch(errorAlertToggle((error as Error).message));
    }
  };
