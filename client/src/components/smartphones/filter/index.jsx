import React, { useEffect } from 'react';
import styles from './filter.module.sass';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

import CONSTANTS from '../../../constants/';

import Picker from '../../app/form/picker';
import Range from '../../app/form/range';


const Filter = ({filter, setFilter, brand}) => {
    const formik = useFormik({
        initialValues: {
            color: '',
            price: '',
            model: '',
            memory: '',
            screen: ''
        }
    });

    useEffect(() => {
        setFilter(`?color=${formik.values.color}&price=${formik.values.price}&model=${formik.values.model}&memory=${formik.values.memory}`);
    }, [formik.values]);
    
    return (
        <div className={styles.filter}>
            {
                    <form className={styles.filterForm} onChange={formik.handleChange}>
                        <Picker
                            pickerItems={CONSTANTS.FILTER.COLORS[brand]}
                            pickerLabel='Color'
                            id='color'
                            name='color'
                        />
                        <Picker
                            pickerItems={CONSTANTS.FILTER.MODELS[brand]}
                            pickerLabel='Model'
                            name='model'
                            id='model'
                        />
                        <Picker
                            pickerItems={CONSTANTS.FILTER.MEMORY[brand]}
                            pickerLabel='Memory'
                            name='memory'
                            id='memory'
                        />
                    </form>
            }
        </div>
    );
};

export default Filter;