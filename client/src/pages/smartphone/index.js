import React, { useEffect } from 'react';
import styles from './smartphone.module.sass';

import Smartphone from '../../components/smartphone';

const SmartphonePage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <div className={styles.smartphonePage}>
            <Smartphone/>
        </div>
    );
};

export default SmartphonePage;