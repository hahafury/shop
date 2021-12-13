import React, { useState } from 'react';
import styles from './images-wrapper.module.sass';

import CONSTANTS from '../../../constants';

const ImagesWrapper = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(images ? CONSTANTS.PUBLIC_URL + images[0] : null);

    const onMouseOverImage = (image) => {
        currentImage !== image && setCurrentImage(image);
    };

    return (
        <div className={styles.imagesWrapper}>
            <div className={styles.imagePreviews}>
                {
                    images.map(image => {
                        return <img
                            key={image}
                            src={CONSTANTS.PUBLIC_URL + image}
                            alt='phone'
                            onMouseOver={() => onMouseOverImage(CONSTANTS.PUBLIC_URL + image)}
                        />
                    })
                }
            </div>
            <div className={styles.currentImage}>
                <img src={currentImage} alt='current' />
            </div>
            
        </div>
    );
};
export default ImagesWrapper;