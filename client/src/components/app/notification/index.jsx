import React from 'react';
import styles from './notification.module.sass';

const Notification = ({ message }) => (
    <div >
        <span>{message}</span>
    </div>
);

export default Notification;