import React, { useEffect } from 'react';
import MostPopularItems from '../../components/most-popular-items';
import NewArrivals from '../../components/new-arrivals';
import styles from './home.module.sass';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div className={styles.homePage}>
            <NewArrivals />
            <MostPopularItems />
        </div>
    );
};

export default HomePage;