import { Endpoints } from '../../../shared/api/constants/endpoints';
import { LocationIds, Launches } from '../constants/launches';
import type { FetchLaunchConfig } from '../types/FetchLaunchConfig';

export const fetchLaunchConfig = (filterValue: string): FetchLaunchConfig => {
  const params = { limit: 12 };
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
