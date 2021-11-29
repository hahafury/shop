import React from 'react';
import logoImgBlack from './pSHOP-logos_black.png';
import logoImgWhite from './pSHOP-logos_white.png';
import styles from './logo.module.sass';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../../constants';

const Logo = ({ logoColor, ...props }) => {
    const renderLogo = () => {
        switch (logoColor) {
            case CONSTANTS.COLOR_WHITE:
                return <img src={logoImgWhite} alt='logo'></img>;
            default:
                return <img src={logoImgBlack} alt='logo'></img>;
        };
    };

    return (
        <Link to='/'>
            <div className={styles.logo} {...props}>
                {renderLogo()}
            </div>
        </Link>
        
    );
};

export default Logo;