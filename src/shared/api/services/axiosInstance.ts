import axios, { AxiosInstance } from 'axios';
import { Endpoints } from '../constants/endpoints';

export const axiosInstance: AxiosInstance = axios.create({
  method: 'GET',
  baseURL: Endpoints.BASE_ENDPOINT,
});
