import React from 'react';
import styles from './new-arrivals.module.sass';

const NewArrivals = () => {
    return (
        <div className={styles.newArrivalsWrapper} style={{
            backgroundImage: "url('https://assets-prd.ignimgs.com/2021/09/14/screenshot-343-1631642166537.png')",
        }}>
            <h1>The new line of Iphone 13 is already available</h1>
        </div>
    );
};

export default NewArrivals;