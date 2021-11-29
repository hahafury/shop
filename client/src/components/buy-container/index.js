import React from 'react';
import CONSTANTS from '../../constants';
import styles from './buy-container.module.sass';

import CheckIcon from '@mui/icons-material/Check';
import Button from '../app/form/button';
import PhoneRating from '../phone-rating';
import { green } from '@mui/material/colors';


const BuyContainer = () => {
    return (
        <div className={styles.buyContainer}>
            <div className={styles.buyContainerSection}>
                <h4>Color:</h4>
                <div className={styles.color} style={{ backgroundColor: CONSTANTS.COLOR_PINK }} />
            </div>
            <div className={styles.buyContainerSection}>
                <h4>Memory: 128gb</h4>
            </div>
            <div className={styles.buyContainerSection}>
                <h4 className={styles.inStock}>In stock<CheckIcon sx={{ color: green }}/></h4>
            </div>
            <div className={styles.buyContainerSection}>
                <PhoneRating rating={4} />
            </div>
            
            <div className={styles.buyContainerSection}>
                <h2>29 999$</h2>
                <Button text='Buy' />
            </div>
        </div>
    );
};

export default BuyContainer;