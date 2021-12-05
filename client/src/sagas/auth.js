import { put } from 'redux-saga/effects';

import * as authService from '../api/services/auth';
import setToken from '../helpers/set-token';
import { request, authError, authSuccess } from '../actions/auth/action-creators';

export function* login(action) {
    yield put(request());
    try {
        const { data } = yield authService.loginRequest(action.userData);
        setToken(data);
        yield put(authSuccess());
    } catch (error) {
        yield put(authError(error));
    };
};

export function* signup(action) {
    yield put(request());
    try {
        const { data } = yield authService.signUpRequest(action.userData);
        setToken(data);
        yield put(authSuccess());
    } catch (error) {
        yield put(authError(error));
    };
};

export function* refreshToken(action) {
    yield put(request());
    try {
        const { data } = yield authService.refreshToken(action.data);
        setToken(data);
    } catch (error) {
        yield put(authError(error));
    };
};