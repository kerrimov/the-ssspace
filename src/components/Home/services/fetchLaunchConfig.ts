import { fetchDefaults } from '@shared/api/constants/fetchDefaults';
import { Endpoints } from '@shared/api/constants/endpoints';
import { LocationIds, Launches } from '../constants/launches';
import type {
  FetchLaunchConfig,
  FetchLaunchConfigParams,
} from '../types/FetchLaunchConfig';

export const fetchLaunchConfig = (
  filterValue: string,
  currentPage: number,
): FetchLaunchConfig => {
  const params: FetchLaunchConfigParams = {
    limit: fetchDefaults.LIMIT,
    offset: (currentPage - 1) * fetchDefaults.LIMIT,
  };
  switch (filterValue) {
    case Launches.UPCOMING:
      return {
        url: Endpoints.UPCOMING_LAUNCH_ENDPOINT,
        params,
      };

    case Launches.PREVIOUS:
      return {
        url: Endpoints.PREVIOUS_LAUNCH_ENDPOINT,
        params,
      };

    case Launches.CREWED:
      return {
        url: Endpoints.UPCOMING_LAUNCH_ENDPOINT,
        params: { ...params, is_crewed: true },
      };

    case Launches.CALIFORNIA:
      return {
        url: Endpoints.UPCOMING_LAUNCH_ENDPOINT,
        params: { ...params, location__ids: LocationIds.CALIFORNIA },
      };

    case Launches.FLORIDA:
      return {
        url: Endpoints.UPCOMING_LAUNCH_ENDPOINT,
        params: { ...params, location__ids: LocationIds.FLORIDA },
      };

    default:
      return {};
  }
};
