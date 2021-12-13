import { takeLeading, takeEvery, takeLatest } from 'redux-saga/effects';

import AUTH_ACTIONS from '../actions/auth/actions';
import USER_ACTIONS from '../actions/user/actions';
import SMARTPHONES_ACTIONS from '../actions/smartphones/actions';
import SHOPPING_CART_ACTIONS from '../actions/shopping-cart/actions';
import ORDERS_ACTIONS from '../actions/orders/actions';

import {
    login,
    signup,
    refreshToken
} from './auth';

import {
    getUser,
} from './user';

import {
    getSmartphones,
    getSmartphone,
    createSmartphone
} from './smartphones';

import {
    addToShoppingCart,
    getShoppingCart,
    deleteItem
} from './shopping-cart';

import {
    confirmOrder,
    getOrders,
    changeOrderStatus,
} from './orders';

function* rootSaga() {
    yield takeLatest(AUTH_ACTIONS.ACTION_LOGIN, login);
    yield takeLatest(AUTH_ACTIONS.ACTION_SIGNUP, signup);
    yield takeLeading(USER_ACTIONS.ACTION_GET_USER, getUser);
    yield takeEvery(SMARTPHONES_ACTIONS.ACTION_GET_SMARTPHONES, getSmartphones);
    yield takeLeading(SMARTPHONES_ACTIONS.ACTION_GET_SMARTPHONE, getSmartphone);
    yield takeEvery(SMARTPHONES_ACTIONS.ACTION_CREATE_SMARTPHONE, createSmartphone)
    yield takeLeading(SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_ADD, addToShoppingCart);
    yield takeLeading(SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_GET, getShoppingCart);
    yield takeLeading(SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_DELETE_ITEM, deleteItem);
    yield takeEvery(ORDERS_ACTIONS.ACTION_CONFIRM_ORDER, confirmOrder);
    yield takeEvery(ORDERS_ACTIONS.ACTION_GET_ORDERS, getOrders);
    yield takeEvery(ORDERS_ACTIONS.ACTION_CHANGE_ORDER_STATUS, changeOrderStatus);
};

export default rootSaga;