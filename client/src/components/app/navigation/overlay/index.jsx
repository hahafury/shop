import React from 'react';
import styles from './overlay.module.sass';

const Overlay = ({ isOverlayOpened, onClosingOverlay }) => {
    const hideOverlay = () => {
        onClosingOverlay(!isOverlayOpened);
    };
    
    return (
        isOverlayOpened ? (
            <div
                className={styles.overlay}
                onClick={hideOverlay}
            >
            </div>
        ) : null
    );
}

export default Overlay