import http from '../interceptor';

export const getSmartphones = (brand, filter) => {
    const urlWithoutFilter = `/smartphones/${brand}`
    const urlWithFilter = `/smartphones/${brand}${filter}`
    
    return http.get(filter ? urlWithFilter : urlWithoutFilter)
};
export const getSmartphone = smartphoneId => http.get(`/smartphone/${smartphoneId}`);
export const createSmartphone = smartphoneFormData => http.post('/smartphone', smartphoneFormData, {
    headers: {
        'Content-type': 'multipart/form-data'
    }
});