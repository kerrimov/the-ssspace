import axios, { AxiosInstance } from 'axios';
import { Endpoints } from '../constants/endpoints';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: Endpoints.BASE_ENDPOINT,
});
