import React from 'react';
import styles from './my-profile.module.sass';

import MyProfileNavigation from '../../components/my-profile/navigation';
import Profile from '../../components/my-profile/profile';

const MyProfile = () => {
    return (
        <div className = {styles.myProfilePage}>
            <MyProfileNavigation />
            {
                window.location.pathname === '/my-profile/profile' && <Profile />
            }
        </div>
    );
};

export default MyProfile;