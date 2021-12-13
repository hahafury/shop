
import SMARTPHONES_ACTIONS from "./actions";

export const request = () => ({
    type: SMARTPHONES_ACTIONS.ACTION_SMARTPHONES_REQUEST
});

export const getSmartphones = (brand, filter) => ({
    type: SMARTPHONES_ACTIONS.ACTION_GET_SMARTPHONES,
    brand: brand,
    filter: filter
});

export const getSmartphonesSuccess = smartphones => ({
    type: SMARTPHONES_ACTIONS.ACTION_GET_SMARTPHONES_SUCCESS,
    smartphones: smartphones
});

export const getSmartphone = smartphoneId => ({
    type: SMARTPHONES_ACTIONS.ACTION_GET_SMARTPHONE,
    smartphoneId: smartphoneId
});

export const getSmartphoneSuccess = smartphone => ({
    type: SMARTPHONES_ACTIONS.ACTION_GET_SMARTPHONE_SUCCESS,
    smartphone: smartphone
});

export const createSmartphone = smartphoneData => ({
    type: SMARTPHONES_ACTIONS.ACTION_CREATE_SMARTPHONE,
    smartphoneData: smartphoneData
});

export const clearSmartphone = () => ({
    type: SMARTPHONES_ACTIONS.ACTION_CLEAR_SMARTPHONE
});

export const clearSmartphones = () => ({
    type: SMARTPHONES_ACTIONS.ACTION_CLEAR_SMARTPHONES
});

