import axios, { AxiosResponse } from 'axios';
import { Slides } from '../types/SliderTypes';

export const fetchData = async (url: string): Promise<Array<Slides>> => {
  const response: AxiosResponse = await axios.get(url);
  return response.data.results;
};
