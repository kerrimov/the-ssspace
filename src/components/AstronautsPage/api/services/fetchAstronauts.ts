import axios from 'axios';
import { Endpoints } from '../../../../shared/api/constants/endpoints';

export const fetchAstronauts = async () => {
  const { data } = await axios.get(
    `${Endpoints.BASE_ENDPOINT}${Endpoints.ASTRONAUTS_ENDPOINT}`,
  );
  return data.results;
};
