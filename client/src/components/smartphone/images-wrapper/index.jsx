import React, { useState } from 'react';
import styles from './images-wrapper.module.sass';

const ImagesWrapper = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(images ? images[0] : null);

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
                            src={image}
                            alt='phone'
                            onMouseOver={() => onMouseOverImage(image)}
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