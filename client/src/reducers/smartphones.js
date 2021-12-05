import SMARTPHONES_ACTIONS from '../actions/smartphones/actions';

const initialState = {
    isFetching: false,
    error: null,
    smartphonesData: null,
    smartphone: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SMARTPHONES_ACTIONS.ACTION_SMARTPHONES_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case SMARTPHONES_ACTIONS.ACTION_GET_SMARTPHONES_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                smartphonesData: action.smartphones
            };
        }
        case SMARTPHONES_ACTIONS.ACTION_GET_SMARTPHONE_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                smartphone: action.smartphone
            };
        }
        case SMARTPHONES_ACTIONS.ACTION_CLEAR_SMARTPHONE: {
            return {
                ...state,
                smartphone: null
            };
        }
        case SMARTPHONES_ACTIONS.ACTION_GET_SMARTPHONES: {
            return {
                ...state,
                smartphonesData: null
            };
        }
        default:
            return state;
    };
};

export default authReducer;