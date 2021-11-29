import React, {useState} from 'react';
import styles from './catalog.module.sass';
import { Link } from 'react-router-dom';
import { Collapse } from '@mui/material';

const Catalog = ({ items, isCollapse, onClickNavigationLink }) => {
    const [isCatalogCollapsed, setIsCatalogCollapsed] = useState(false);

    const onCollapseCatalog = () => {
        setIsCatalogCollapsed(!isCatalogCollapsed);
    };

    return (
        <React.Fragment>
            <div
                onClick={onCollapseCatalog}
                className={styles.navSection}
            >
                <h2>Catalog</h2>
            </div>
            <Collapse in={isCollapse ? isCollapse : isCatalogCollapsed} onClick={() => setIsCatalogCollapsed(!isCatalogCollapsed)}>
                <div
                    className={styles.catalog}
                > 
                    <Link
                        to='/smartphones/apple'
                        onClick={onClickNavigationLink}
                    >
                        <span>Apple</span>
                    </Link>
                    <Link to = '/'><span>OnePlus</span></Link>
                    <Link to = '/'><span>Oppo</span></Link>
                    <Link to = '/'><span>Poco</span></Link>
                    <Link to = '/'><span>Realme</span></Link>
                    <Link to = '/'><span>Samsung</span></Link>
                    <Link to='/'><span>Xiaomi</span></Link>
                    <Link to='/'><span>Vivo</span></Link>

                </div>
            </Collapse>
        </React.Fragment>

    );
};

export default Catalog;