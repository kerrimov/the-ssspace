import type { Launch } from '../../../shared/api/types/Launch';

export interface LaunchState {
  launches: Launch[];
  launchAmount: number;
  isLoading: boolean;
  isScrollLoading: boolean;
  error: string;
}
