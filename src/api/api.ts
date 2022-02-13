import axios, { AxiosInstance } from 'axios';

const BASE_API_URL = 'http://localhost:3100/';
const REQUEST_TIMEOUT = 5000;

const createApi = (): AxiosInstance => axios.create({
  baseURL: BASE_API_URL,
  timeout: REQUEST_TIMEOUT,
});

export { createApi, BASE_API_URL, REQUEST_TIMEOUT };
