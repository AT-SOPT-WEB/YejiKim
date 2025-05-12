import axios from 'axios';
import { STORAGE_KEY } from '../constants/storageKey';
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const userId = localStorage.getItem(STORAGE_KEY.USER_ID);
  if (userId) {
    config.headers['userId'] = userId;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
