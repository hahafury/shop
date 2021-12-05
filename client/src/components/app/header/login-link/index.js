import React from 'react';
import { Link } from 'react-router-dom';
import styles from './login-link.module.sass';

const LoginLink = () => {
    return (
        <Link className={styles.loginLink} to='/login'>
            <h2>Login</h2>
        </Link>
    );
};

export default LoginLink;