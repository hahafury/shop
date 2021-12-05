import http from '../interceptor';

export const getSmartphones = (brand, params) => http.get(`/smartphones/${brand}`);
export const getSmartphone = (smartphoneId) => http.get(`/smartphone/${smartphoneId}`);