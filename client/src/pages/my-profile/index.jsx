import React from 'react';
import styles from './my-profile.module.sass';

import MyProfileNavigation from '../../components/my-profile/navigation';
import Orders from '../../components/my-profile/orders';
import CreateForm from '../../components/my-profile/create';

const MyProfile = () => {
    return (
        <div className = {styles.myProfilePage}>
            <MyProfileNavigation />
            {
                window.location.pathname === '/my-profile/create' ? (
                    <CreateForm/>
                ) : (
                    <Orders />    
                )
            }
            
        </div>
    );
};

export default MyProfile;