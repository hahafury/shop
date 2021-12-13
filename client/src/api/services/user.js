import http from '../interceptor';

export const getRequest = () => http.get('/user');