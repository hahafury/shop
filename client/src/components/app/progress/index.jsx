import React from 'react';
import styles from './progress.module.sass';

import { CircularProgress } from '@mui/material';

const Progress = ({isProgress}) => {
    return (
        isProgress && (
            <div className={styles.progress}>
                <CircularProgress />
            </div>
        )
    );
};

export default Progress;