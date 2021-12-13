import ORDERS_ACTIONS from '../actions/orders/actions';

const initialState = {
    isFetching: false,
    error: null,
    orders: null,
    successMessage: null
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDERS_ACTIONS.ACTION_ORDERS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null
            };
        }
        case ORDERS_ACTIONS.ACTION_GET_ORDERS_SUCCESS: {
            return {
                isFetching: false,
                error: null,
                orders: action.orders
            };
        }
        case ORDERS_ACTIONS.ACTION_CLEAR_SUCCESS_MESSAGE: {
            return {
                ...state,
                successMessage: null
            };
        }
        case ORDERS_ACTIONS.ACTION_CONFIRM_ORDER_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                successMessage: action.successMessage
            };
        }
        case ORDERS_ACTIONS.ACTION_CHANGE_ORDER_STATUS_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                orders: action.orders,
            };
        }
        default:
            return state;
    };
};

export default ordersReducer;