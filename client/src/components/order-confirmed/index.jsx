import React from 'react';
import styles from './order-confirmed.module.sass';

import OrderConfirmedIcon from './success-icon.png';

const OrderConfirmed = ({ message }) => {
    return (
        <div className={styles.orderConfirmed}>
            <img src={OrderConfirmedIcon} alt = 'icon'/>
            <h2>Order №{message.data.id} was accepted</h2>
        </div>
    );
};

export default OrderConfirmed;