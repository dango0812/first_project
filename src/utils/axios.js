import axios from 'axios';
import { API_URL, API_KEY } from '../config';

const axiosInstance = axios.create({
    baseURL: API_URL,
    params: {
        KEY: API_KEY,
        Type: 'json',
    }
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
