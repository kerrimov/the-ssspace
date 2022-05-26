import { Launches } from '../constants/launches';
import type { Launch } from '../../../shared/api/types/Launch';

export interface LaunchState {
  [Launches.UPCOMING]: Launch[];
  [Launches.PREVIOUS]: Launch[];
  [Launches.CREWED]: Launch[];
  [Launches.CALIFORNIA]: Launch[];
  [Launches.FLORIDA]: Launch[];
  isLoading: boolean;
}
