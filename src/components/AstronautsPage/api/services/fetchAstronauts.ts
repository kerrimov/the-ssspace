import axios from 'axios';
import { Endpoints } from '../../../../shared/api/constants/endpoints';

export const fetchAstronauts = async (limit: number, page: number) => {
  const offset = (page - 1) * limit;
  const { data } = await axios.get(
    `${Endpoints.BASE_ENDPOINT}${Endpoints.ASTRONAUTS_ENDPOINT}?limit=${limit}&offset=${offset}`,
  );
  return data;
};
