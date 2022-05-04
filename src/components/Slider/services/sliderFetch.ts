import axios from 'axios';
import { Slides } from '../types/SliderTypes';

export const fetchData = async (url: string): Promise<Array<Slides>> => {
  const response = await axios.get(url);
  return response.data.results;
};
