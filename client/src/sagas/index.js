import { takeLeading, takeEvery, takeLatest } from 'redux-saga/effects';

import AUTH_ACTIONS from '../actions/auth/actions';
import USER_ACTIONS from '../actions/user/actions';

import {
    login,
    signup,
    refreshToken
} from './auth';

import {
    get,
} from './user';

function* rootSaga() {
    yield takeLatest(AUTH_ACTIONS.ACTION_LOGIN, login);
    yield takeLatest(AUTH_ACTIONS.ACTION_SIGNUP, signup);
    yield takeLeading(USER_ACTIONS.ACTION_GET_USER, get)
};

export default rootSaga;