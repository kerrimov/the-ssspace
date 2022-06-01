import type { Launch } from '@shared/api/types/Launch';

export interface LaunchResponseData {
  results: Launch[];
  count: number;
}

export interface LaunchResponse {
  data: LaunchResponseData;
}
