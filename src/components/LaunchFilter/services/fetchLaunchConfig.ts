import { Endpoints } from '../../../shared/api/constants/endpoints';
import { LocationIds, LaunchFilters } from '../constants/filerConstants';
import type { FetchLaunchConfig } from '../types/FetchLaunchConfig';

export const fetchLaunchConfig = (filterValue: string): FetchLaunchConfig => {
  switch (filterValue) {
    case LaunchFilters.PREVIOUS:
      return {
        url: Endpoints.PREVIOUS_LAUNCH_ENDPOINT,
      };

    case LaunchFilters.CREWED:
      return {
        url: Endpoints.UPCOMING_LAUNCH_ENDPOINT,
        params: { is__crewed: true },
      };

    case LaunchFilters.CALIFORNIA:
      return {
        url: Endpoints.UPCOMING_LAUNCH_ENDPOINT,
        params: { location__ids: LocationIds.CALIFORNIA },
      };

    case LaunchFilters.FLORIDA:
      return {
        url: Endpoints.UPCOMING_LAUNCH_ENDPOINT,
        params: { location__ids: LocationIds.FLORIDA },
      };

    default:
      return {};
  }
};
