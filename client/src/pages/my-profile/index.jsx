import React, { useEffect } from 'react';
import styles from './my-profile.module.sass';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MyProfileNavigation from '../../components/my-profile/navigation';
import Orders from '../../components/my-profile/orders';
import CreateForm from '../../components/my-profile/create';

const MyProfile = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector(state => state.authStore);
    
    useEffect(() => {
        isLoggedIn ? window.scrollTo(0, 0) : navigate('/');
    },[isLoggedIn])
    

    return (
        <div className = {styles.myProfilePage}>
            <MyProfileNavigation />
            {
                window.location.pathname === '/my-profile/create' ? (
                    <CreateForm />
                ) : (
                    <Orders />    
                )
            }
            
        </div>
    );
};

export default MyProfile;