import ORDERS_ACTIONS from './actions';

export const request = () => ({
    type: ORDERS_ACTIONS.ACTION_ORDERS_REQUEST
});

export const confirmOrder = (orderData) => ({
    type: ORDERS_ACTIONS.ACTION_CONFIRM_ORDER,
    orderData: orderData
});

export const getOrders = (orderId) => ({
    type: ORDERS_ACTIONS.ACTION_GET_ORDERS,
    orderId: orderId
});

export const getOrdersSuccess = (orders) => ({
    type: ORDERS_ACTIONS.ACTION_GET_ORDERS_SUCCESS,
    orders: orders
});

export const changeStatus = (id, status) => ({
    type: ORDERS_ACTIONS.ACTION_CHANGE_ORDER_STATUS,
    id: id,
    status: status
});

export const changeOrderStatusSuccess = (orders) => ({
    type: ORDERS_ACTIONS.ACTION_CHANGE_ORDER_STATUS_SUCCESS,
    orders: orders
});