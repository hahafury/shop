import React from 'react';
import styles from './footer.module.sass';
import CONSTANTS from '../../../constants';

import Logo from '../logo';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLogo}>
                <Logo logoColor={CONSTANTS.COLOR_WHITE}/>
            </div>
        </div>
    );
};

export default Footer;