import { Endpoints } from '../../../shared/api/constants/endpoints';
import { axiosInstance } from '../../../shared/api/services/axiosInstance';
import { Agency } from '../types/Agencies';

export const fetchAgencies = async (): Promise<Agency[]> => {
  const { data } = await axiosInstance.get(Endpoints.AGENCIES_ENDPOINT);
  return data.results;
};
