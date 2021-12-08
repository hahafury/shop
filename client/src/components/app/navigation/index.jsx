import React from 'react';
import styles from './navigation.module.sass';
import { Link } from 'react-router-dom';

import Catalog from './catalog';
import Overlay from './overlay';
import { useSelector } from 'react-redux';

const Navigation = ({ isMenuActive, onOpeningNavigation }) => {
    const onClickNavigationLink = () => {
        onOpeningNavigation(!isMenuActive);
    };

    const { userData } = useSelector(state => state.userStore);
    
    return (
        <nav
            style={{
                transform: `translateX(${isMenuActive ? 0 : -100}%)`
            }}
            className={styles.navigation}
        >   
            <Link to='/' onClick={onClickNavigationLink}>
                <h2>Home</h2>
            </Link>
            {
                userData && (
                    <Link to='/my-profile/orders' onClick={onClickNavigationLink}>
                        <h2>My profile</h2>
                    </Link>
                )
            }
            <Catalog onClickNavigationLink={onClickNavigationLink} />
            <Overlay
                isOverlayOpened={isMenuActive}
                onClosingOverlay={onOpeningNavigation}
            />
        </nav>
    );
};

export default Navigation;