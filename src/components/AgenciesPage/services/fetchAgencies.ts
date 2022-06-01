import { AxiosResponse } from 'axios';
import { Endpoints } from '../../../shared/api/constants/endpoints';
import { fetchDefaults } from '../../../shared/api/constants/fetchDefaults';
import { axiosInstance } from '../../../shared/api/services/axiosInstance';
import { AgenciesResponse, Agency } from '../types/Agencies';

export const fetchAgencies = async (
  page: number,
): Promise<AgenciesResponse> => {
  const fetchAgenciesConfig = {
    params: {
      limit: fetchDefaults.LIMIT,
      offset: (page - 1) * fetchDefaults.LIMIT,
      ordering: '-featured, name',
    },
  };

  const agenciesResponse: AxiosResponse = await axiosInstance.get(
    Endpoints.AGENCIES_ENDPOINT,
    fetchAgenciesConfig,
  );

  const { results }: { results: Agency[] } = agenciesResponse.data;

  const agenciesDetailsResponse: AxiosResponse[] = await Promise.all(
    results.map((agency: Agency) =>
      axiosInstance.get(`${Endpoints.AGENCIES_ENDPOINT}${agency.id}`),
    ),
  );

  const updatedResults: Agency[] = agenciesResponse.data.results.map(
    (agency: Agency, index: number) => ({
      ...agency,
      logo_url: agenciesDetailsResponse[index].data.logo_url,
    }),
  );

  return {
    ...agenciesResponse,
    data: { ...agenciesResponse.data, results: updatedResults },
  };
};
