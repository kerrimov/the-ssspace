import { Endpoints } from '../../../shared/api/constants/endpoints';
import type { FetchLaunchConfig } from '../types/FetchLaunchConfig';
import {
  CA_LOCATION,
  FL_LOCATION,
  LaunchFilters,
} from '../constants/filerConstants';

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
    case LaunchFilters.CA_LOCATION:
      return {
        url: Endpoints.UPCOMING_LAUNCH_ENDPOINT,
        params: { location__ids: CA_LOCATION },
      };
    case LaunchFilters.FL_LOCATION:
      return {
        url: Endpoints.UPCOMING_LAUNCH_ENDPOINT,
        params: { location__ids: FL_LOCATION },
      };
    default:
      return {};
  }
};
