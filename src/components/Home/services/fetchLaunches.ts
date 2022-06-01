import { axiosInstance } from '@shared/api/services/axiosInstance';
import { fetchLaunchConfig } from './fetchLaunchConfig';
import { LaunchResponse } from '../types/LaunchResponse';

export const fetchLaunches = async (
  launchFilter: string,
  currentPage: number,
): Promise<LaunchResponse> =>
  await axiosInstance(fetchLaunchConfig(launchFilter, currentPage));
