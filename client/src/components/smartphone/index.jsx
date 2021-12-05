import React, { useState } from 'react';
import styles from './smartphone.module.sass';
import { useDispatch } from 'react-redux';

import { clearShoppingCartMessageAndError } from '../../actions/shopping-cart/action-creators';

import AppOverlay from '../app/overlay';
import BuyContainer from './buy-container';
import ImagesWrapper from './images-wrapper';
import AddToCartModal from '../shopping-cart/shopping-cart-modal';

const Smartphone = ({
    id,
    brand,
    model,
    display,
    cellular,
    processor,
    camera,
    operationSystem,
    images,
    color,
    memory,
    price,
    rating,
    userData
}) => {
    const [overlayData, setOverlayData] = useState({
        isAppOverlayOpened: false
    });

    const dispatch = useDispatch();

    const onCloseOverlay = () => {
        dispatch(clearShoppingCartMessageAndError());
    };

    return (
        <div className={styles.smartphone}>
            <div className={styles.phoneHeader}>
                <h2>{brand} {model} {memory} GB {color}</h2>
            </div>
            <div className={styles.phoneMain}>
                <ImagesWrapper
                    images={images}
                />
                <BuyContainer
                    id={id}
                    color={color}
                    price={price}
                    rating={rating}
                    memory={memory}
                    setOverlayData={setOverlayData}
                    userData={userData}
                />
            </div>
            <div className={styles.phoneInfo}>
                <div className={styles.phoneBriefSpecs}>
                    <span>{display}</span>/
                    <span>{processor}</span>/
                    <span>{camera}</span>/
                    <span>{color}</span>/
                    <span>{memory}</span>/
                    <span>{cellular}</span>/
                    <span>{operationSystem}</span>/
                </div>
                <div className={styles.phoneSpecs}>
                    <div className={styles.phoneSpecsSection}>
                        <h4>Display: </h4>
                        <p>{display}</p>
                    </div>
                    <div className={styles.phoneSpecsSection}>
                        <h4>Processor: </h4>
                        <p>{processor}</p>
                    </div>
                    <div className={styles.phoneSpecsSection}>
                        <h4>Camera: </h4>
                        <p>{camera}</p>
                    </div>
                    <div className={styles.phoneSpecsSection}>
                        <h4>Memory: </h4>
                        <p>{memory} GB with built-in memory</p>
                    </div>
                    <div className={styles.phoneSpecsSection}>
                        <h4>Cellular: </h4>
                        <p>{cellular}</p>
                    </div>
                    <div className={styles.phoneSpecsSection}>
                        <h4>Operation System: </h4>
                        <p>{operationSystem}</p>
                    </div>
                </div>
            </div>
            <AppOverlay
                isAppOverlayOpened={overlayData.isAppOverlayOpened}
                Component={AddToCartModal}
                setOverlayData={setOverlayData}
                componentProps={{
                    id: id,
                    image: images[0],
                    brand: brand,
                    model: model,
                    color: color,
                    price: price,
                    memory: memory,
                }}
                onCloseOverlay={onCloseOverlay}
            />
        </div>
    )
}

export default Smartphone