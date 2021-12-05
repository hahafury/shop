import React, { useEffect } from 'react';
import styles from './smartphones.module.sass';

import Filter from '../../components/smartphones/filter';
import Phones from '../../components/smartphones/phones';

const SmartphonesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={styles.smartphonesPage}>
            <Filter />
            <Phones />
        </div>
    );
};

export default SmartphonesPage;