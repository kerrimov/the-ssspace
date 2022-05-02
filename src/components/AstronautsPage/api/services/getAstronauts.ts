import axios from 'axios';
import { Endpoints } from '../../../../shared/api/constants/endpoints';

export const fetchAstronauts = async () => {
  try {
    const { data } = await axios.get(`${Endpoints.BASE_ENDPOINT}/astronaut/1`);
    return data;
  } catch (error) {
    return error;
  }
};