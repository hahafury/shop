import { put } from 'redux-saga/effects';

import * as smartphonesService from '../api/services/smartphones';
import { request, getSmartphonesSuccess, getSmartphoneSuccess } from '../actions/smartphones/action-creators';
import toUppercaseFirstLetter from '../helpers/to-uppercase-first-letter';

export function* getSmartphones(action) {
    yield put(request());
    try {
        console.log(action)
        const { data } = yield smartphonesService.getSmartphones(toUppercaseFirstLetter(action.brand), action.filter);
        yield put(getSmartphonesSuccess(data));
    } catch (error) {
        console.log(error)
    };
};

export function* getSmartphone(action) {
    yield put(request());
    try {
        const { data } = yield smartphonesService.getSmartphone(action.smartphoneId);
        yield put(getSmartphoneSuccess(data));
    } catch (error) {
        console.log(error)
    };
};
