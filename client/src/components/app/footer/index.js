import React from 'react';
import styles from './footer.module.sass';
import Logo from '../logo';
import CONSTANTS from '../../../constants';
import UserProfileLink from '../navigation/user-profile-link';
import Catalog from '../navigation/catalog';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLogo}>
                <Logo logoColor={CONSTANTS.COLOR_WHITE}/>
            </div>
            <div className={styles.footerNav}>
                <UserProfileLink />
                <Catalog isCollapse={true}/>
            </div>
        </div>
    );
};

export default Footer;