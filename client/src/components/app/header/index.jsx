import React, { useState, useEffect } from 'react';
import styles from './header.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { HamburgerArrow } from 'react-animated-burgers';

import { getUser } from '../../../actions/user/action-creators';
import { logout } from '../../../actions/auth/action-creators';
import { getShoppingCart } from '../../../actions/shopping-cart/action-creators';
import CONSTANTS from '../../../constants';

import Logo from '../logo';
import CartIcon from '../cart-icon';
import Navigation from '../navigation';

const Header = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    
    const navigation = useNavigate();

    const dispatch = useDispatch();

    const { isLoggedIn } = useSelector(state => state.authStore);
    const { userData } = useSelector(state => state.userStore);
    const { shoppingCart } = useSelector(state => state.shoppingCartStore);

    const onLogout = () => {
        window.localStorage.clear();
        dispatch(logout());
        navigation(0);
    };

    useEffect(() => {
        !userData && isLoggedIn && dispatch(getUser());
        isLoggedIn && dispatch(getShoppingCart());
    }, [isLoggedIn]); 

    return (
        <div className={styles.header}>
            <HamburgerArrow
                isActive={isMenuActive}
                className={styles.hamburgerMenu}
                toggleButton={() => setIsMenuActive(!isMenuActive)}
            />
            <Logo logoColor={CONSTANTS.LOGO_COLOR_BLACK}/>
                <div className={styles.headerUserActions}>
                    {
                        userData ? (
                            <React.Fragment>
                                <Link to = '/shopping-cart'>
                                    <CartIcon />
                                </Link>
                                {/* <div className={styles.logoutLink} onClick={onLogout}>
                                    <h2 >Logout</h2>
                                </div> */}
                            </React.Fragment>
                        ) : (
                            <Link className={styles.loginLink} to='/login'>
                                <h2>Login</h2>
                            </Link>    
                        )
                    }
                    
                </div>
            <Navigation
                isMenuActive={isMenuActive}
                onOpeningNavigation = {setIsMenuActive}
            />
        </div>
    );
};

export default Header;