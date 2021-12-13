import { put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as ordersService from '../api/services/orders';
import { request, getOrdersSuccess, changeOrderStatusSuccess, confirmOrderSuccess } from '../actions/orders/action-creators';

import Notification from '../components/app/notification';
import { clearShoppingCart } from '../actions/shopping-cart/action-creators';

export function* confirmOrder(action) {
    yield put(request());
    try {
        const order = yield ordersService.confirmOrder(action.orderData);
        yield put(confirmOrderSuccess(order));
        yield put(clearShoppingCart());
    } catch (error) {
        yield toast.error(<Notification message={error.response.statusText} />);
    };
};

export function* getOrders(action) {
    yield put(request());
    try {
        const { data } = yield ordersService.getOrders(action.orderId);
        yield put(getOrdersSuccess(data));
    } catch (error) {
        yield toast.error(<Notification message={error.response.statusText} />);
    };
};

export function* changeOrderStatus(action) {
    yield put(request());
    try {
        yield ordersService.changeOrderStatus(action.id, action.status);
        yield toast.success(<Notification message={`Order ${action.status} successfully`} />)
        const { orders } = yield select(state => state.ordersStore);
        const orderIndex = orders.findIndex(order => order.id === action.id);
        orders[orderIndex].status = action.status;
        yield put(changeOrderStatusSuccess(orders));
    } catch (error) {
        yield toast.error(<Notification message={error.response.statusText} />);
    };
};