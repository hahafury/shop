import { combineReducers } from 'redux';
import authReducer from './auth';
import userReducer from './user';
import smartphonesReducer from './smartphones';
import shoppingCartReducer from './shopping-cart';

const appReducer = combineReducers({
    userStore: userReducer,
    authStore: authReducer,
    smartphonesStore: smartphonesReducer,
    shoppingCartStore: shoppingCartReducer
});

export default appReducer;