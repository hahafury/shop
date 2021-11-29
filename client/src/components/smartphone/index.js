import React from 'react';
import BuyContainer from '../buy-container';
import ImagesWrapper from '../images-wrapper';
import styles from './smartphone.module.sass';

const Smartphone = () => {
    return (
        <div className={styles.smartphone}>
            <div className={styles.phoneHeader}>
                <h2>Apple iPhone 13 mini 256 GB Pink</h2>
            </div>
            <div className={styles.phoneMain}>
                <ImagesWrapper
                    images={
                        [
                            'https://content.rozetka.com.ua/goods/images/big/221271704.jpg',
                            'https://content1.rozetka.com.ua/goods/images/big/221271749.jpg',
                            'https://content.rozetka.com.ua/goods/images/big/221271737.jpg',
                            'https://content2.rozetka.com.ua/goods/images/big/221271711.jpg',
                            'https://content1.rozetka.com.ua/goods/images/big/221271753.jpg',
                        ]
                    }
                />
                <BuyContainer />
            </div>
            <div className={styles.phoneInfo}>
                <div className={styles.phoneBriefSpecs}>Screen (6.7 ", OLED (Super Retina XDR), 2778x1284) / Apple A15 Bionic / internal main camera: 12 Mp + 12 Mp + 12 Mp, front camera: 12 Mp / 128 GB with built-in memory / 3G / LTE / 5G / GPS / Nano-SIM / iOS 15</div>
                <div className={styles.phoneSpecs}>
                    <div className={styles.phoneSpecsSection}>
                        <h4>Display: </h4>
                        <p>6.7 ", OLED (Super Retina XDR), 2778x1284</p>
                    </div>
                    <div className={styles.phoneSpecsSection}>
                        <h4>Processor: </h4>
                        <p>Apple A15 Bionic</p>
                    </div>
                    <div className={styles.phoneSpecsSection}>
                        <h4>Camera: </h4>
                        <p> triple main camera: 12 MP + 12 MP + 12 MP, front camera: 12 MP</p>
                    </div>
                    <div className={styles.phoneSpecsSection}>
                        <h4>Memory: </h4>
                        <p>128 GB with built-in memory</p>
                    </div>
                    <div className={styles.phoneSpecsSection}>
                        <h4>Cellular: </h4>
                        <p>3G / LTE / 5G / GPS / Nano-SIM</p>
                    </div>
                    <div className={styles.phoneSpecsSection}>
                        <h4>Operation System: </h4>
                        <p>iOS 15</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Smartphone