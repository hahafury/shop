import USER_ACTIONS from '../actions/user/actions';
import CONSTANTS from '../constants/index';

const initialState = {
    isFetching: false,
    error: null,
    userData: null,
    isLoggedIn: !!window.localStorage.getItem(CONSTANTS.TOKEN)
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ACTIONS.ACTION_USER_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        }
        case USER_ACTIONS.ACTION_GET_USER_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                userData: action.userData,
            }
        }
        case USER_ACTIONS.ACTION_USER_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error
            }
        }
        default:
            return initialState
    };
};
export default userReducer;