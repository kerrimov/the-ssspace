import { fetchData } from '../../../shared/api/services/fetchData';
import { Endpoints } from '../../../shared/api/constants/endpoints';
import {
  sliderGetPreviousLaunchesError,
  sliderGetPreviousLaunchesSuccess,
  sliderLoadData,
} from '../actions/sliderActions';
import {
  errorAlertOpen,
  errorAlertSetErrorMessage,
} from '../../../shared/components/ErrorAlert/actions/errorAlertActions';
import type { Dispatch } from 'redux';
import type {
  SliderGetPreviousLaunchesError,
  SliderGetPreviousLaunchesSuccess,
  SliderLoadData,
  Slides,
} from '../types/SliderTypes';
import type { ErrorAlertAllActions } from '../../../shared/components/ErrorAlert/types/errorAlertTypes';

export const getPreviousLaunches =
  () =>
  async (
    dispatch: Dispatch<
      | SliderLoadData
      | SliderGetPreviousLaunchesSuccess
      | SliderGetPreviousLaunchesError
      | ErrorAlertAllActions
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
      dispatch(errorAlertSetErrorMessage((error as Error).message));
      dispatch(errorAlertOpen());
    }
  };
