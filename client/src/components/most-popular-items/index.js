import React from 'react';
import styles from './most-popular-items.module.sass';

import PhoneCard from '../smartphones/phone-card';

const MostPopularItems = () => {
    return (
        <div className={styles.mostPopularItemsWrapper}>
            <h1>Most popular</h1>
            <div className={styles.mostPopularItem}>
                <PhoneCard phoneData={{ image: 'https://content1.rozetka.com.ua/goods/images/big/221261927.jpg' }}/>
                <PhoneCard phoneData={{ image: 'https://content1.rozetka.com.ua/goods/images/big/221261927.jpg' }}/>
                <PhoneCard phoneData={{ image: 'https://content1.rozetka.com.ua/goods/images/big/221261927.jpg' }}/>
            </div>
        </div>
    );
};

export default MostPopularItems;