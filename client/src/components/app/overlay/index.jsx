import React, {useEffect}  from 'react';
import styles from './overlay.module.sass';

const AppOverlay = ({isAppOverlayOpened, setOverlayData, Component, componentProps, onCloseOverlay}) => {
    const hideOverlay = () => {
        setOverlayData({
            isAppOverlayOpened: !isAppOverlayOpened
        });
    };
    useEffect(() => {
        if (isAppOverlayOpened) {
            document.body.style.overflowY = 'hidden';
            document.body.style.marginRight = 'calc(-1 * (100vw - 100%))';
        } else {
            document.body.style.overflowY = 'auto';
        }
        return onCloseOverlay();
    }, [isAppOverlayOpened, onCloseOverlay])
    
    return (
        isAppOverlayOpened ? (
            <div
                className={styles.appOverlay}
                onClick={hideOverlay}
            >
                {Component && <Component {...componentProps}/>}
            </div>
        ) : null
    );
};

export default AppOverlay;