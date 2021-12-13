import ORDERS_ACTIONS from './actions';

export const request = () => ({
    type: ORDERS_ACTIONS.ACTION_ORDERS_REQUEST
});

export const confirmOrder = orderData => ({
    type: ORDERS_ACTIONS.ACTION_CONFIRM_ORDER,
    orderData: orderData
});

export const confirmOrderSuccess = successMessage => ({
    type: ORDERS_ACTIONS.ACTION_CONFIRM_ORDER_SUCCESS,
    successMessage: successMessage
});

export const clearSuccessMessage = () => ({
    type: ORDERS_ACTIONS.ACTION_CLEAR_SUCCESS_MESSAGE
});

export const getOrders = orderId => ({
    type: ORDERS_ACTIONS.ACTION_GET_ORDERS,
    orderId: orderId
});

export const getOrdersSuccess = orders => ({
    type: ORDERS_ACTIONS.ACTION_GET_ORDERS_SUCCESS,
    orders: orders
});

export const changeStatus = (id, status) => ({
    type: ORDERS_ACTIONS.ACTION_CHANGE_ORDER_STATUS,
    id: id,
    status: status
});

export const changeOrderStatusSuccess = orders => ({
    type: ORDERS_ACTIONS.ACTION_CHANGE_ORDER_STATUS_SUCCESS,
    orders: orders
});