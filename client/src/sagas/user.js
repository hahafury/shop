import { put, select } from 'redux-saga/effects';

import * as userService from '../api/services/user';
import {
    request,
    getUserSuccess,
    userError
} from '../actions/user/action-creators';

export function* getUser() {
    yield put(request());
    try {
        const { data } = yield userService.getRequest();
        yield put(getUserSuccess(data));
    } catch (error) {
        yield put(userError(error))
    };
};