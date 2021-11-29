import axios from 'axios';
import CONSTANTS from '../constants'

const instance = axios.create({
  baseURL: CONSTANTS.BASE_URL,
});

instance.interceptors.request.use((config) => {
    const token = window.localStorage.getItem(CONSTANTS.TOKEN)
    if (token) {
        config.headers = { ...config.headers, Authorization: token }
    };
    return config;
}, (err) => Promise.reject(err));

export default instance;