import type { Launch } from '../../../shared/api/types/Launch';

export interface LaunchResponse {
  data: {
    results: Launch[];
    count: number;
  };
}
