import axios from 'axios';
import { Endpoints } from '../../../../shared/api/constants/endpoints';

export const fetchEvents = async () => {
  try {
    const { data } = await axios.get(
      `${Endpoints.BASE_ENDPOINT}${Endpoints.UPCOMING_EVENTS_ENDPOINT}?limit=12`,
    );
    return data.results;
  } catch (error) {
    return error;
  }
};
