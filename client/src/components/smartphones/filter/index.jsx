import React from 'react';
import styles from './filter.module.sass';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

import Picker from '../../app/form/picker';
import Range from '../../app/form/range';


const Filter = () => {
    const formik = useFormik({});

    const { smartphonesData } = useSelector(state => state.smartphonesStore);

    return (
        <div className={styles.filter}>
            <form className={styles.filterForm}>
                {smartphonesData && <Range rangeLabel='Price' maxRange={smartphonesData.maxPrice} minRange={smartphonesData.minPrice} />}
                <Picker pickerItems={['Black', 'Yellow']} pickerLabel='Color' />
                <Picker pickerItems={['Iphone 11', 'Iphone 13']} pickerLabel='Model' />
                <Picker pickerItems={['64 GB', '68 GB', '58 GB']} pickerLabel='Memory' />
                <Picker pickerItems={['5.8"','6.5"','6.8"']} pickerLabel='Screen diagonal'/>
           </form>
        </div>
    );
};

export default Filter;