import React from 'react';
import styles from './profile.module.sass';
import { useSelector } from 'react-redux';

const Profile = () => {
    const { userData } = useSelector(state => state.userStore);
    return (
        <div className={styles.profile}>
            <section>
                <span>login: {userData.login}</span>
                <span>email: {userData.email}</span>
            </section>
            <section>
                <span>city: {userData.city ? userData.city : 'not found'}</span>
                <span>phone: {userData.phone}</span>
            </section>
        </div>
    );
};

export default Profile;