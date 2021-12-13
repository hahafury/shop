import React from 'react';
import styles from './shopping-cart-item.module.sass';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CONSTANTS from '../../../constants';

import ClearIcon from '@mui/icons-material/Clear';
import { deleteItem } from '../../../actions/shopping-cart/action-creators';

const ShoppingCartItem = ({
    Smartphone,
    id,
    amount,
    smartphoneId,
    isOrder
}) => {
    const dispatch = useDispatch();

    const onDeleteItem = () => {
        dispatch(deleteItem(id));
    };

    return (
        <div className={styles.shoppingCartItem}>
            <Link to={`/smartphone/${smartphoneId}`}>
                <div className={styles.shoppingCartItemImage}>
                    <img src={Smartphone.images && CONSTANTS.PUBLIC_URL + Smartphone.images[0]}alt = 'shoppingCartImage'/>
                </div>
                <div className={styles.shoppingCartItemInfo}>
                    <span>{Smartphone.brand}</span>
                    <span>{Smartphone.model}</span>
                    <span>{Smartphone.color}</span>
                    <span>{Smartphone.memory}gb</span>
                </div>
            </Link>

            <div className={styles.shoppingCartItemAmount}>
                <label>Amount</label>
                <span>{isOrder ? Smartphone.OrdersSmartphones.amount : amount}</span>
            </div>
            <div className={styles.shoppingCartItemPrice}>
                <label>Price</label>
                <span>{Smartphone.price}$</span>
            </div>
            <div className={styles.shoppingCartItemTotalPrice}>
                <label>Total price</label>
                <span>{isOrder ? Smartphone.OrdersSmartphones.amount * Smartphone.price : amount * Smartphone.price}$</span>
            </div>
            {
                !isOrder && (
                    <ClearIcon
                        className={styles.deleteItem}
                        onClick={onDeleteItem}
                    />
                )
            }
        </div>
    );
};

export default ShoppingCartItem;