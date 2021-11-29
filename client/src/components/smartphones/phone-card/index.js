import React from 'react';
import styles from './phone-card.module.sass';
import { Link } from 'react-router-dom';

import Button from '../../app/form/button';
import PhoneRating from '../../phone-rating';

const PhoneCard = ({phoneData}) => {
    return (
        
        <div className={styles.phoneCard}>
            <Link to='/smartphone/213'>
                <div className={styles.phoneCardImage}>
                    <img src = {phoneData.image} alt = 'phone'></img>
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
                        <PhoneRating rating={4}/>
                    </div>
                </div>
            </Link>
                <Button
                    text={'Buy'}
                    onClick={() => console.log(`1`)}
                />
        </div>
       
       
    );
};

export default PhoneCard;