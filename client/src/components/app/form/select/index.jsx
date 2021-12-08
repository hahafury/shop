import React from 'react';
import styles from './select.module.sass';

const Select = ({ options, ...props }) => {
    return (
        <select {...props}>
            {options && options.map(option => {
                return <option value={option} label={option}/>
            })}
        </select>
    );
};

export default Select;