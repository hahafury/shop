import React from 'react';
import styles from './cart.module.sass';

import CartIconImg from './bag.png';
import { useSelector } from 'react-redux';

const CartIcon = () => {
    const { shoppingCart } = useSelector(state => state.shoppingCartStore);

    const countItemsInCart = () => {
        const reducer = (sum, currentItem) => sum + currentItem.amount
        return shoppingCart.reduce(reducer, 0)
    }
    return (
          <div className={styles.cartIcon}>
            <img className={styles.cartIconImg}src = {CartIconImg} alt='cart'/>
              <div className={styles.amountInCart}>{shoppingCart && shoppingCart.length > 0 && countItemsInCart()}</div>
          </div>
    );
};

export default CartIcon;