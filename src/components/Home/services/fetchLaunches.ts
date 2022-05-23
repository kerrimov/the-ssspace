import { fetchLaunchConfig } from './fetchLaunchConfig';
import { axiosInstance } from '../../../shared/api/services/axiosInstance';

export const fetchLaunches = async (launchFilter: string) =>
  await axiosInstance(fetchLaunchConfig(launchFilter));
