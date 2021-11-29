import USER_ACTIONS from './actions'

export const request = () => ({
    type: USER_ACTIONS.ACTION_USER_REQUEST
});

export const getUser = () => ({
    type: USER_ACTIONS.ACTION_GET_USER,
});

export const getUserSuccess = userData => ({
    type: USER_ACTIONS.ACTION_GET_USER_SUCCESS,
    userData: userData
});

export const userError = error => ({
    type: USER_ACTIONS.ACTION_USER_ERROR,
    error: error.response
});