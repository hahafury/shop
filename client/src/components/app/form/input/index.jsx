import React from 'react';
import styles from './input.module.sass';
import classNames from 'classnames';

const Input = ({ touched, errors,  ...props }) => {
    return (
        <input
            className={
                classNames(styles.input, {
                    [styles.notValid]: touched && errors,
                    [styles.valid]: touched && !errors,
                })
            }
            {...props}
        />
    );
};

export default Input;