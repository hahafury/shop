import React from 'react';
import styles from './loading.module.sass';

import { CircularProgress } from '@mui/material';

const Loading = ({ isLoading }) => {
    return isLoading && (
        <div className={styles.loading}>
            <CircularProgress />
        </div>
    )

};

export default Loading;