import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './smartphones.module.sass';

import Filter from '../../components/smartphones/filter';
import Phones from '../../components/smartphones/phones';

const SmartphonesPage = () => {
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { brand } = useParams();

    return (
        <div className={styles.smartphonesPage}>
            <Filter filter={filter} setFilter={setFilter} brand = {brand}/>
            <Phones filter={filter} brand={brand}/>
        </div>
    );
};

export default SmartphonesPage;