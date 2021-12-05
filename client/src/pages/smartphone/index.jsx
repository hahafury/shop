import React, { useEffect } from 'react';
import styles from './smartphone.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getSmartphone, clearSmartphone } from '../../actions/smartphones/action-creators';

import Smartphone from '../../components/smartphone';

const SmartphonePage = () => {
    const { smartphoneId } = useParams();

    const dispatch = useDispatch();

    const {
        smartphone
    } = useSelector(state => state.smartphonesStore);

    const {
        userData
    } = useSelector(state => state.userStore);

    useEffect(() => {
        dispatch(getSmartphone(smartphoneId));
        window.scrollTo(0, 0);
        return dispatch(clearSmartphone());
    }, []);
    
    return (
        <div className={styles.smartphonePage}>
            {smartphone && <Smartphone userData={userData} {...smartphone}/>}
        </div>
    );
};

export default SmartphonePage;