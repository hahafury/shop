import React, { useState }from 'react';
import styles from './add-to-cart-modal.module.sass';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../app/form/button';
import Input from '../../app/form/input';
import Progress from '../../app/progress';
import { addToShoppingCart } from '../../../actions/shopping-cart/action-creators';
import { Alert } from '@mui/material';

const AddToCartModal = ({ id, image, model, brand, color, memory, price }) => {
    const [amount, setAmount] = useState(1);
    const [totalCost, setTotalCost] = useState(price * amount);

    const dispatch = useDispatch();

    const {
        isFetching,
        message,
    } = useSelector(state => state.shoppingCartStore);

    const incrementAmount = () => {
        setAmount(amount + 1);
    };

    const decrementAmount = () => {
        amount - 1 > 0 && setAmount(amount - 1);
    };

    const onConfirmAdd = () => {
        dispatch(
            addToShoppingCart({
                id: id,
                amount: amount,
                price: price
            })
        );
    };

    return (
        <div className={styles.addToCartModal} onClick={target => target.stopPropagation()}>
            <Progress isProgress={isFetching} successMessage={message} />
            {
                message ? <Alert className={styles.successMessage}severity='success'>{message}</Alert> : (
                    <React.Fragment>
                        <div className={styles.cartModalItem}>
                            <div className={styles.cartModalItemImage}>
                                <img src = {image} alt = 'smartphone_img'></img>
                            </div>
                            <div className={styles.cartModalItemInfo}>
                                <div className={styles.cartModalItemInfoSpecs}>
                                    <span>{model}</span>
                                    <span>{brand}</span>
                                    <span>{color}</span>
                                    <span>{memory}gb</span>
                                </div>
                            </div>
                            <div className={styles.cartModalItemPrice}>
                                <label>price</label>
                                <span>{totalCost}$</span>
                            </div>
                            <div className={styles.cartModalItemAmount}>
                                <label>amount</label>
                                {amount}
                            </div>
                        </div>
                        <div className={styles.cartModalActions}>
                            <div className={styles.cartModalAmountItem}>
                                <Button text = '+' onClick={incrementAmount}/>
                                <Input value={amount} readOnly={true}/>
                                <Button text = '-' onClick={decrementAmount}/>
                            </div>
                            <div className={styles.cartModalTotalCost}>
                                total price: {amount * price}$
                            </div>
                            <div className = {styles.cartModalConfirmOrder}>
                                <Button text = 'add to cart' onClick={onConfirmAdd}/>
                            </div>
                        </div> 
                    </React.Fragment>
                )
            }
        </div>
    );
};

export default AddToCartModal;