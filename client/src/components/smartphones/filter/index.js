import { useFormik } from 'formik';
import React from 'react';
import styles from './filter.module.sass';

import Picker from '../../app/form/picker';
import Range from '../../app/form/range';

const Filter = () => {
    const formik = useFormik({});
    
    return (
        <div className={styles.filter}>
            <form className={styles.filterForm}>
                <Range rangeLabel='Price' maxRange={400} minRange={245}/>
                <Picker pickerItems={['Black', 'Yellow']} pickerLabel='Color' />
                <Picker pickerItems={['Iphone 11', 'Iphone 13']} pickerLabel='Model' />
                <Picker pickerItems={['64 GB', '68 GB', '58 GB']} pickerLabel='Memory' />
                <Picker pickerItems={['5.8"','6.5"','6.8"']} pickerLabel='Screen diagonal'/>
           </form>
        </div>
    );
};

export default Filter;