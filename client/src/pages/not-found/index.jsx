import React from 'react';
import { Link } from 'react-router-dom';
import styles from './not-found-page.module.sass';

const NotFoundPage = () => {
    return (
        <div className={styles.notFoundPage}>
            <h1>404</h1>
            <h2>SORRY, PAGE WAS NOT FOUND</h2>
            <Link to = '/'><h3>HOME</h3></Link>
        </div>
    );
};

export default NotFoundPage;