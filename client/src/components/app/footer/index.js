import React from 'react';
import styles from './footer.module.sass';
import CONSTANTS from '../../../constants';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../logo';
import Catalog from '../navigation/catalog';


const Footer = () => {
    const {
        userData
    } = useSelector(state => state.userStore);
    return (
        <div className={styles.footer}>
            <div className={styles.footerLogo}>
                <Logo logoColor={CONSTANTS.COLOR_WHITE}/>
            </div>
            <div className={styles.footerNav}>
                {
                    userData && (
                        <Link to='/user'>
                            <h2>My profile</h2>
                        </Link>
                    )
                }
                <Catalog isCollapse={true}/>
            </div>
        </div>
    );
};

export default Footer;