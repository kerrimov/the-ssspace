import { Endpoints } from '../../../shared/api/constants/endpoints';
import { axiosInstance } from '../../../shared/api/services/axiosInstance';

export const fetchAgencies = async () => {
  try {
    const { data } = await axiosInstance.get(Endpoints.AGENCIES_ENDPOINT);
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
