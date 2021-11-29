import AUTH_ACTIONS from "./actions";

export const request = () => ({
    type: AUTH_ACTIONS.ACTION_AUTH_REQUEST
});

export const login = userData => ({
    type: AUTH_ACTIONS.ACTION_LOGIN,
    userData: userData
});

export const signup = userData => ({
    type: AUTH_ACTIONS.ACTION_SIGNUP,
    userData: userData
});

export const logout = () => ({
    type: AUTH_ACTIONS.ACTION_LOGOUT
});

export const authError = error => ({
    type: AUTH_ACTIONS.ACTION_AUTH_ERROR,
    error: error.response
});

export const authSuccess = () => ({
    type: AUTH_ACTIONS.ACTION_AUTH_SUCCESS
})

export const authClearError = () => ({
    type: AUTH_ACTIONS.ACTION_AUTH_CLEAR_ERROR
})