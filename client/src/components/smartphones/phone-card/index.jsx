import React from 'react';
import styles from './phone-card.module.sass';
import { Link } from 'react-router-dom';

const PhoneCard = ({ id, images, brand, model, price }) => {
    return (
        <div className={styles.phoneCard}>
            <Link to={`/smartphone/${id}`}>
                <div className={styles.phoneCardImage}>
                    <img src = {images && images[0]} alt = 'phone'></img>
                </div>
                <div className={styles.phoneCardInfo}>
                    <div className={styles.phoneCardInfoName}>
                        {`${brand} ${model}`}
                    </div>
                    <div className={styles.phoneCardInStock}>
                        in stock
                    </div>
                    <div className={styles.phoneCardPrice}>
                        {price}$
                    </div>
                </div>
            </Link>
        </div>
       
       
    );
};

export default PhoneCard;