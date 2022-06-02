import { fetchData } from '@shared/api/services/fetchData';
import { Endpoints } from '@shared/api/constants/endpoints';
import { errorAlertToggle } from '@shared/components/ErrorAlert/actions/errorAlertActions';
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
import type { ErrorAlertToggle } from '@shared/components/ErrorAlert/types/errorAlertTypes';

export const getPreviousLaunches =
  () =>
  async (
    dispatch: Dispatch<
      | SliderLoadData
      | SliderGetPreviousLaunchesSuccess
      | SliderGetPreviousLaunchesError
      | ErrorAlertToggle
    >,
  ): Promise<void> => {
    try {
      dispatch(sliderLoadData());
      const previousLaunches = await fetchData<Array<Slides>>(
        Endpoints.PREVIOUS_LAUNCH_ENDPOINT,
      );
      dispatch(sliderGetPreviousLaunchesSuccess(previousLaunches));
    } catch (error) {
      dispatch(sliderGetPreviousLaunchesError());
      dispatch(errorAlertToggle((error as Error).message));
    }
  };
