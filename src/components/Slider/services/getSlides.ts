import type { Dispatch } from 'redux';
import {
  sliderGetData,
  sliderGetDataError,
  sliderGetDataSuccess,
} from '../redux/sliderActionsCreators';
import { fetchData } from './sliderFetch';
import type { SliderAnyActions } from '../types/SliderTypes';
import { Endpoints } from '../../../shared/api/constants/endpoints';

export const getSlides =
  (
    upcomingLaunchesUrl = `${Endpoints.BASE_ENDPOINT}${Endpoints.GO_FOR_LAUNCHES_ENDPOINT}`,
    previousLaunchesUrl = `${Endpoints.BASE_ENDPOINT}${Endpoints.PREVIOUS_LAUNCHES_ENDPOINT}`,
  ) =>
  async (dispatch: Dispatch<SliderAnyActions>): Promise<void> => {
    try {
      dispatch(sliderGetData());
      const data = await Promise.all([
        fetchData(upcomingLaunchesUrl),
        fetchData(previousLaunchesUrl),
      ]);
      dispatch(sliderGetDataSuccess(data));
    } catch (error) {
      dispatch(sliderGetDataError(String(error)));
    }
  };
