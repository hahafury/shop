import AUTH_ACTIONS from '../actions/auth/actions';
import CONSTANTS from '../constants';

const initialState = {
    isFetching: false,
    error: null,
    isLoggedIn: !!localStorage.getItem(CONSTANTS.TOKEN)
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.ACTION_AUTH_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case AUTH_ACTIONS.ACTION_AUTH_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true
            };
        }
        case AUTH_ACTIONS.ACTION_LOGOUT: {
            return initialState;
        }
        case AUTH_ACTIONS.ACTION_AUTH_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        }
        case AUTH_ACTIONS.ACTION_AUTH_CLEAR_ERROR: {
            return {
                ...state,
                error: null,
            };
        }
        default:
            return state;
    };
};

export default authReducer;