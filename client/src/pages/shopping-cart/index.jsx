import React, { useState } from 'react';
import styles from './shopping-cart.module.sass';
import { useSelector } from 'react-redux';


import ShoppingCartItem from '../../components/shopping-cart/shopping-cart-item';
import Button from '../../components/app/form/button';
import Loading from '../../components/app/loading';

const ShoppingCart = () => {
    const { shoppingCart, isFetching } = useSelector(state => state.shoppingCartStore);

    const calcToPay = () => { 
        const reducer = (sum, currentItem) => sum + currentItem.amount * currentItem.Smartphone.price
        return shoppingCart.reduce(reducer, 0)
    }

    return (
        <div className={styles.shoppingCartPage}>
            {
                shoppingCart && shoppingCart.length ? (
                    <div className={styles.shoppingCartPageItems}>
                        {
                            shoppingCart.map(item => {
                                return <ShoppingCartItem key={item.smartphone_id} {...item} />
                            })
                        }
                    </div>
                ) : null
            }
            
            {
                !isFetching && shoppingCart && !shoppingCart.length && <h2>Items not found</h2>
            }
            {
                shoppingCart && shoppingCart.length ? (
                    <div className={styles.shoppingCartPageInfo}>
                        <div className={styles.toPay}>
                            To pay: {shoppingCart && shoppingCart.length > 0 && calcToPay()}$
                        </div>
                        <div className={styles.confirmOffer}>
                            <Button text='Make an order' />
                        </div>
                    </div>
                ) : null
            }
            <Loading isLoading={isFetching}/>
        </div>
    );
};

export default ShoppingCart;