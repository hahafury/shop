import http from '../interceptor';

export const confirmOrder = orderData => http.post('/orders', orderData);
export const getOrders = orderId => http.get(`/orders?id=${orderId}`);
export const changeOrderStatus = (orderId, orderStatus) => http.patch(`/orders/${orderId}`, { status: orderStatus });