import React from 'react';
import styles from './picker.module.sass';

import Checkbox from '@mui/material/Checkbox';
import { FormGroup, FormControlLabel } from '@mui/material';


const Picker = ({pickerItems, pickerLabel}) => {
    return (
        <div className={styles.picker}>
            <h2>{pickerLabel}</h2>
            <FormGroup>
                {
                    pickerItems.map((item, index) => { 
                        return <FormControlLabel key={index} control={<Checkbox defaultChecked />} label={item} />
                    })
                }
            </FormGroup>
        </div>
    );
};

export default Picker;