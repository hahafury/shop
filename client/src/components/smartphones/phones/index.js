import React from 'react';
import styles from './phones.module.sass';

import PhoneCard from '../phone-card';

const Phones = () => {
    return (
        <div className={styles.phonesWrapper}>
            <PhoneCard phoneData={{image: 'https://content1.rozetka.com.ua/goods/images/big/221261927.jpg'}}/>
            <PhoneCard phoneData={{ image: 'https://content2.rozetka.com.ua/goods/images/big/221290006.jpg' }}/>
            <PhoneCard phoneData={{ image: 'https://content1.rozetka.com.ua/goods/images/big/221261927.jpg' }}/>
            <PhoneCard phoneData={{ image: 'https://content1.rozetka.com.ua/goods/images/big/221261927.jpg' }}/>
            <PhoneCard phoneData={{ image: 'https://content1.rozetka.com.ua/goods/images/big/221261927.jpg' }}/>
            <PhoneCard phoneData={{ image: 'https://content1.rozetka.com.ua/goods/images/big/221261927.jpg' }}/>
        </div>
    );
};

export default Phones;