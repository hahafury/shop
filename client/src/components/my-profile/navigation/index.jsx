import React from 'react';
import styles from './my-profile-navigation.module.sass';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CONSTANTS from '../../../constants';

const MyProfileNavigation = () => {
    const {
        userData
    } = useSelector(state => state.userStore)
    return (
        <div className={styles.myProfileNavigation}>
            <div className={styles.myProfileInfo}>
                <div className={styles.profileIcon}><AccountBoxIcon fontSize='large'/></div>
                <div className={styles.profileInfo}>
                    <div className={styles.profileName}>{userData && userData.login}</div>
                    <div className={styles.profileEmail}>{userData && userData.email}</div>
                </div>
            </div>
            <div className={styles.myProfileNav}>
                <Link className={window.location.pathname === '/my-profile/orders' ? styles.active : undefined} to='/my-profile/orders'>
                    <span>Orders</span>
                </Link>
                {userData && userData.role === CONSTANTS.ROLE_ADMIN && (
                    <Link className={window.location.pathname === '/my-profile/create' ? styles.active : undefined} to='/my-profile/create'>
                        <span>Create</span>
                    </Link>)
                }
            </div>
        </div>
    );
};

export default MyProfileNavigation;