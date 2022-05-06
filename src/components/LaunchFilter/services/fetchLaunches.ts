import { axiosInstance } from '../../../shared/api/services/axiosInstance';
import { fetchLaunchConfig } from './fetchLaunchConfig';

export const fetchLaunches = async (launchFilter: string) =>
  await axiosInstance(fetchLaunchConfig(launchFilter));
