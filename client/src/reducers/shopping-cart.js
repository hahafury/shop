import SHOPPING_CART_ACTIONS from '../actions/shopping-cart/actions';
import CONSTANTS from '../constants/index';

const initialState = {
    isFetching: false,
    error: null,
    message: null,
    shoppingCart: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_ADD_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                message: action.message,
                shoppingCart: action.shoppingCart
            };
        }
        case SHOPPING_CART_ACTIONS.ACTION_CLEAR_SHOPPING_CART_MESSAGE_AND_ERROR: {
            return {
                ...state,
                error: null,
                message: null
            };
        }
        case SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_GET_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                error: null,
                shoppingCart: action.shoppingCart
            };
        }
        case SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_DELETE_ITEM_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                shoppingCart: action.shoppingCart
            };
        }
        default:
            return state;
    };
};
export default userReducer;