import { axiosInstance } from './axiosInstance';
import type { AxiosResponse } from 'axios';

export const fetchData = async <T>(url: string): Promise<T> => {
  const response: AxiosResponse = await axiosInstance(url);
  return response.data.results;
};
