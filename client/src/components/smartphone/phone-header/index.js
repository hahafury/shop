import React from 'react';
import styles from './phone-header.module.sass';

const PhoneHeader = ({phoneName}) => {
    return (
        <div className={styles.phoneHeader}>
            <h2>{phoneName}</h2>
        </div>
    )
}

export default PhoneHeader