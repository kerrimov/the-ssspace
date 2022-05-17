import { LaunchFilters } from '../constants/filerConstants';
import type { Launch } from '../../../shared/api/types/Launch';

export interface LaunchesState {
  [LaunchFilters.PREVIOUS]: Launch[];
  [LaunchFilters.CREWED]: Launch[];
  [LaunchFilters.CALIFORNIA]: Launch[];
  [LaunchFilters.FLORIDA]: Launch[];
  isLoading: boolean;
  error: string;
}
