import React, { useEffect } from 'react';
import styles from './phones.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { clearSmartphones, getSmartphones } from '../../../actions/smartphones/action-creators';

import PhoneCard from '../phone-card';
import Loading from '../../app/loading';

const Phones = ({filter, brand}) => {
    const dispatch = useDispatch();

    const {
        smartphonesData, isFetching
    } = useSelector(state => state.smartphonesStore);

    useEffect(() => {
        dispatch(getSmartphones(brand, filter));
        return dispatch(clearSmartphones());
    }, [brand, filter]);

    return (
        <div className={styles.phonesWrapper}>
            {
                smartphonesData && smartphonesData.length > 0 && (
                    smartphonesData.map(smartphone => {
                        return <PhoneCard key={smartphone.id} {...smartphone}/>
                    })
                )
            }
            {
                <Loading isLoading={isFetching && !smartphonesData ? true : false}/>
            }
            {
                !isFetching && smartphonesData && smartphonesData.length === 0 && <h2>oops, not found</h2>
            }
        </div>
    );
};

export default Phones;