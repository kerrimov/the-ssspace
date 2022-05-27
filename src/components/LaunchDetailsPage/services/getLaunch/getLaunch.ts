import { axiosInstance } from '../../../../shared/api/services/axiosInstance';
import { Endpoints } from '../../../../shared/api/constants/endpoints';
import type { AxiosResponse } from 'axios';
import type { Launch } from '../../../../shared/api/types/Launch';

export const getLaunch = async (id: string | undefined): Promise<Launch> => {
  const response: AxiosResponse = await axiosInstance.get(
    `${Endpoints.LAUNCH_ENDPOINT}${id}/`,
  );
  return response.data;
};
