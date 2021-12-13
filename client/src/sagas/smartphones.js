import { put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import * as smartphonesService from '../api/services/smartphones';
import { request, getSmartphonesSuccess, getSmartphoneSuccess } from '../actions/smartphones/action-creators';
import toUppercaseFirstLetter from '../helpers/to-uppercase-first-letter';

import Notification from '../components/app/notification';

export function* getSmartphones(action) {
    yield put(request());
    try {
        const { data } = yield smartphonesService.getSmartphones(toUppercaseFirstLetter(action.brand), action.filter);
        yield put(getSmartphonesSuccess(data));
    } catch (error) {
        yield toast.error(<Notification message={error.response.statusText} />)
    };
};

export function* getSmartphone(action) {
    yield put(request());
    try {
        const { data } = yield smartphonesService.getSmartphone(action.smartphoneId);
        yield put(getSmartphoneSuccess(data));
    } catch (error) {
        yield toast.error(<Notification message={error.response.statusText} />)
    };
};

export function* createSmartphone(action) {
    yield put(request());
    try {
        const formData = new FormData();
        action.smartphoneData.images.forEach(image =>{
            formData.append('smartphoneImages[]', image);
        })
        formData.append('smartphoneData', JSON.stringify(action.smartphoneData));
        yield smartphonesService.createSmartphone(formData);
        yield toast.success(<Notification message='Smartphone added successfully' />);
    } catch (error) {
        yield toast.error(<Notification message={error.response.data.message} />);
    };
};