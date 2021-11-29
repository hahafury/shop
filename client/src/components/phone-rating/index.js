import React from 'react';
import styles from './phone-rating.module.sass';
import Rating from '@mui/material/Rating';

const PhoneRating = ({ rating }) => {
    return (
        <div className={styles.phoneCardRating}>
            <Rating name="read-only" value={rating} readOnly />
        </div>
    );
};

export default PhoneRating;