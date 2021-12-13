import SHOPPING_CART_ACTIONS from './actions';

export const request = () => ({
    type: SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_REQUEST
});

export const addToShoppingCart = (smartphoneData) => ({
    type: SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_ADD,
    smartphoneData: smartphoneData
});

export const addToShoppingCartSuccess = (shoppingCart, message) => ({
    type: SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_ADD_SUCCESS,
    shoppingCart: shoppingCart,
    message: message,
});

export const getShoppingCart = () => ({
    type: SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_GET
});

export const getShoppingCartSuccess = (shoppingCart) => ({
    type: SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_GET_SUCCESS,
    shoppingCart: shoppingCart
});

export const deleteItem = itemId => ({
    type: SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_DELETE_ITEM,
    itemId: itemId
});

export const deleteItemSuccess = shoppingCart => ({
    type: SHOPPING_CART_ACTIONS.ACTION_SHOPPING_CART_DELETE_ITEM_SUCCESS,
    shoppingCart: shoppingCart
});

export const clearShoppingCart = () => ({
    type: SHOPPING_CART_ACTIONS.ACTION_CLEAR_SHOPPING_CART
})

export const clearShoppingCartMessageAndError = () => ({
    type: SHOPPING_CART_ACTIONS.ACTION_CLEAR_SHOPPING_CART_MESSAGE_AND_ERROR
});