import React, { useRef, useState } from 'react';
import styles from './range.module.sass';
import Slider from '@mui/material/Slider';


const Range = ({ minRange, maxRange, rangeLabel }) => {
    const [price, setPrice] = useState(minRange);
    
    const rangeRef = useRef(null);

    const onPriceChange = () => {
        rangeRef.current.innerText && rangeRef.current.innerText !== price && setPrice(rangeRef.current.innerText);
    };

    return (
        <div className={styles.rangeWrapper}>
            <h2>{rangeLabel}</h2>
            <h4>{price} $</h4>
            <div className={styles.range}>
                <Slider
                    ref={rangeRef}
                    getAriaLabel={() => 'Temperature range'}
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