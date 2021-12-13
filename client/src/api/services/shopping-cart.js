import http from '../interceptor';

export const addToShoppingCart = smartphoneData => http.post('/shopping-cart', smartphoneData);
export const getShoppingCart = () => http.get('/shopping-cart');
export const deleteItem = (itemId) => http.delete(`/shopping-cart/${itemId}`);