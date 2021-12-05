import React from 'react';
import logoImgBlack from './pSHOP-logos_black.png';
import logoImgWhite from './pSHOP-logos_white.png';
import styles from './logo.module.sass';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../../constants';

const Logo = ({ logoColor, ...props }) => {
    return (
        <Link to='/'>
            <div className={styles.logo} {...props}>
                <img src={logoColor === CONSTANTS.LOGO_COLOR_BLACK ? logoImgBlack : logoImgWhite} alt='logo'></img>
            </div>
        </Link>
        
    );
};

export default Logo;