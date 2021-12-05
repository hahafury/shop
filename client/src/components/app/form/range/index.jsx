import React, { useEffect, useRef, useState } from 'react';
import styles from './range.module.sass';
import Slider from '@mui/material/Slider';


const Range = ({ maxRange, minRange, rangeLabel }) => {
    const [price, setPrice] = useState(0);
    
    const rangeRef = useRef(null);

    const onPriceChange = () => {
        rangeRef.current.innerText && rangeRef.current.innerText !== price && setPrice(rangeRef.current.innerText);
    };

    useEffect(() => {
        setPrice(minRange);
    }, [minRange]);

    return (
        <div className={styles.rangeWrapper}>
            <h2>{rangeLabel}</h2>
            <h4>{price} $</h4>
            <div className={styles.range}>
                <Slider
                    key = {`slider-rangeLabel`}
                    ref={rangeRef}
                    max={maxRange}
                    min={minRange}
                    valueLabelDisplay="auto"
                    onMouseUp={onPriceChange}
                />
            </div>
            
        </div>
    );
};

export default Range;