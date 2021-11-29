import React from 'react';
import styles from './overlay.module.sass';

const Overlay = ({ isOverlayOpened, onClosingOverlay, Component }) => {
    const hideOverlay = () => {
        onClosingOverlay(!isOverlayOpened);
    };
    
    return (
        isOverlayOpened && (
            <div
                className={styles.overlay}
                onClick={hideOverlay}
            >
                {Component && <Component />}
                dsadsadsa
            </div>
        )
    )
}

export default Overlay