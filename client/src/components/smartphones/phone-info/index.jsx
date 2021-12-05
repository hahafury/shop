import React from 'react';
import styles from './phone-info.module.sass';

import Rating from '@mui/material/Rating';
import Button from '../../app/form/button';

const PhoneInfo = () => {
    const onHoverCard = () => {
        
    };
    return (
        <div className={styles.phoneCard}>
            <div className={styles.phoneCardImage}>
                <img src = 'https://assets.swappie.com/swappie-product-iphone-13-pro-max-sierra-blue.png' alt = 'phone'></img>
            </div>
            <div className={styles.phoneCardInfo}>
                <div className={styles.phoneCardInfoName}>
                    Apple iPhone 12 Mini 64GB Blue (MGE13)
                </div>
                <div className={styles.phoneCardInStock}>
                    in stock
                </div>
                <div className={styles.phoneCardPrice}>
                    649$
                </div>
                <div className={styles.phoneCardRating}>
                    <Rating name="read-only" value={3} readOnly />
                </div>
            </div>
            <Button
                text={'Buy'}
                onClick={() => console.log(`1`)}
            />
        </div>
    );
};

export default PhoneInfo;