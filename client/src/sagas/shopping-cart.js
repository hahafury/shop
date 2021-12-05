import { put, select } from 'redux-saga/effects';

import * as shoppingCartService from '../api/services/shopping-cart';
import { request, addToShoppingCartSuccess, getShoppingCartSuccess, deleteItemSuccess } from '../actions/shopping-cart/action-creators';

export function* addToShoppingCart(action) {
    yield put(request());
    try {
        const { data } = yield shoppingCartService.addToShoppingCart(action.smartphoneData);
        const {
            shoppingCart
        } = yield select(state => state.shoppingCartStore);
        data.price = action.smartphoneData.price
        const [...shoppingCartItems] = shoppingCart;
        const index = shoppingCartItems.findIndex(element => element.id === data.id);
        index > -1 ? shoppingCartItems[index].amount += action.smartphoneData.amount : shoppingCartItems.push(data)
        yield put(addToShoppingCartSuccess(shoppingCartItems, 'product has been successfully added to the cart'));
    } catch (error) {
        console.log(error)
    };
};

export function* getShoppingCart() {
    yield put(request());
    try {
        const { data } = yield shoppingCartService.getShoppingCart();
        yield put(getShoppingCartSuccess(data));
    } catch (error) {
        console.log(error)
    };
};

export function* deleteItem(action) {
    yield put(request());
    try {
        yield shoppingCartService.deleteItem(action.itemId);
        const {
            shoppingCart
        } = yield select(state => state.shoppingCartStore);
        
        const [...shoppingCartItems] = shoppingCart;
        const index = shoppingCartItems.findIndex(element => element.id === action.itemId);
        shoppingCartItems.splice(index, 1);

        yield put(deleteItemSuccess(shoppingCartItems));
    } catch (error) {
        console.log(error)
    };
};