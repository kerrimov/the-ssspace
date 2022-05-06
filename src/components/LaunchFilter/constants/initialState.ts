import { LaunchFilters } from './filerConstants';

export const InitialState = {
  [LaunchFilters.PREVIOUS]: [],
  [LaunchFilters.CREWED]: [],
  [LaunchFilters.CA_LOCATION]: [],
  [LaunchFilters.FL_LOCATION]: [],
  isLoading: false,
  error: null,
};
