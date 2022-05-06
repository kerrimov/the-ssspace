import axios from 'axios';
import { Endpoints } from '../../../../shared/api/constants/endpoints';

export const fetchAstronauts = async () => {
  try {
    const { data } = await axios.get(
      `${Endpoints.BASE_ENDPOINT}${Endpoints.ASTRONAUTS_ENDPOINT}`,
    );
    return data.results;
  } catch (error) {
    return error;
  }
};
