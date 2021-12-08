import React, { useEffect } from 'react';
import styles from './home.module.sass';

import NewArrivals from '../../components/new-arrivals';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className={styles.homePage}>
            <NewArrivals />
        </div>
    );
};

export default HomePage;