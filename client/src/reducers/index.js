import { combineReducers } from 'redux';
import authReducer from './auth';
import userReducer from './user';

const appReducer = combineReducers({
    userStore: userReducer,
    authStore: authReducer
});

export default appReducer;