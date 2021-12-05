import React from 'react';
import styles from './button.module.sass';

const Button = ({ text, onClick, ...props }) => {
    const onButtonClick = (event) => {
        event.stopPropagation()
        onClick()
    }
    return (
        <button
            className={styles.button}
            onClick = {onClick && onButtonClick}
            {...props}
            type='submit'
        >
            {text}
        </button>
    )
};

export default Button;