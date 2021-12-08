import React from 'react';
import CONSTANTS from '../../../constants';
import styles from './buy-container.module.sass';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

import CheckIcon from '@mui/icons-material/Check';
import Button from '../../app/form/button';

const BuyContainer = ({
    id,
    color,
    memory,
    price,
    setOverlayData,
    userData
}) => {
    const navigation = useNavigate()

    const onBuy = () => {
        if(userData) setOverlayData({ isAppOverlayOpened: true })
        else navigation('/login')
    };
    
    return (
        <div className={styles.buyContainer}>
            <div className={styles.buyContainerSection}>
                <h4>Color:</h4>
                <div className={styles.color} style={{ backgroundColor: CONSTANTS.COLORS[color] }} />
            </div>
            <div className={styles.buyContainerSection}>
                <h4>Memory: {memory}gb</h4>
            </div>
            <div className={styles.buyContainerSection}>
                <h4 className={styles.inStock}>In stock<CheckIcon sx={{ color: green }}/></h4>
            </div>
            <div className={styles.buyContainerSection}>
                <h2>{price}$</h2>
                <Button text='Buy' onClick={onBuy}/>
            </div>
        </div>
    );
};

export default BuyContainer;