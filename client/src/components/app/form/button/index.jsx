import React from 'react';
import styles from './button.module.sass';

import classNames from 'classnames';

const Button = ({ text, onClick, className, ...props }) => {
    const onButtonClick = (event) => {
        event.stopPropagation()
        onClick()
    }
    return (
        <button
            className={classNames(styles.button, className ? className : undefined)}
            onClick = {onClick && onButtonClick}
            {...props}
            type='submit'
        >
            {text}
        </button>
    )
};

export default Button;