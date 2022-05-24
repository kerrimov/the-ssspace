import { fetchData } from '../../../shared/api/services/fetchData';
import { Endpoints } from '../../../shared/api/constants/endpoints';
import {
  sliderGetUpcomingLaunchesError,
  sliderGetUpcomingLaunchesSuccess,
  sliderLoadData,
} from '../actions/sliderActions';
import { errorAlertSetErrorMessage } from '../../../shared/components/ErrorAlert/actions/errorAlertActions';
import type { Dispatch } from 'redux';
import type {
  SliderGetUpcomingLaunchesError,
  SliderGetUpcomingLaunchesSuccess,
  SliderLoadData,
  Slides,
} from '../types/SliderTypes';
import type { ErrorAlertAllActions } from '../../../shared/components/ErrorAlert/types/errorAlertTypes';

export const getUpcomingLaunches =
  () =>
  async (
    dispatch: Dispatch<
      | SliderLoadData
      | SliderGetUpcomingLaunchesSuccess
      | SliderGetUpcomingLaunchesError
      | ErrorAlertAllActions
    >,
  ): Promise<void> => {
    try {
      dispatch(sliderLoadData());
      const upcomingLaunches = await fetchData<Array<Slides>>(
        Endpoints.GO_FOR_LAUNCHES_ENDPOINT,
      );
      dispatch(sliderGetUpcomingLaunchesSuccess(upcomingLaunches));
    } catch (error) {
      dispatch(sliderGetUpcomingLaunchesError((error as Error).message));
      dispatch(errorAlertSetErrorMessage((error as Error).message));
    }
  };
