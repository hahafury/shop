import React from 'react';
import styles from './card.module.sass';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CardIcon = () => {
    return (
        <div className={styles.cardIcon}>
          <ShoppingCartCheckoutIcon fontSize = 'large'/>
        </div>
    );
};

export default CardIcon;