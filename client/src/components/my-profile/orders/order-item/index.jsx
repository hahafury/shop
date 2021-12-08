import React, { useState } from 'react';
import styles from './order-item.module.sass';
import moment from 'moment';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import { Collapse } from '@mui/material';

import CONSTANTS from '../../../../constants';
import { changeStatus } from '../../../../actions/orders/action-creators';

import ShoppingCartItem from '../../../../components/shopping-cart/shopping-cart-item';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DoDisturbAltIcon from '@mui/icons-material/DoDisturbAlt';
import CheckIcon from '@mui/icons-material/Check';
import Button from '../../../app/form/button';
import Loading from '../../../app/loading';


const OrderItem = ({id, createdAt, Smartphones, city, name, surname, email, phone, delivery, postOffice, status, price, userRole, isFetching}) => {
    const [isOpened, setIsOpened] = useState(false);

    const openOrder = () => {
        setIsOpened(!isOpened);
    };

    const dispatch = useDispatch()

    const changeOrderStatus = (status) => {
        dispatch(changeStatus(id, status))
    };
    
    return (
        <React.Fragment>
            <div className={styles.orderItem}>
                <div className={classNames(styles.orderId, {
                    [styles.active]: !!isOpened === true
                })} onClick={openOrder}>
                    <span>№{id}</span>
                    <span className={styles.orderTime}>{moment(createdAt).format('HH:mm:ss DD-MM-YYYY')}</span>
                </div>
                <Collapse in={isOpened} className={styles.orderInfo}>
                    {
                        Smartphones.map(smartphone => {
                            return <ShoppingCartItem key={smartphone.id} Smartphone={smartphone} isOrder={true} amount={smartphone.amount} />
                        })
                    }
                    <div className={styles.orderBuyingInfo}>
                        <div className={styles.orderBuyingInfoReceiver}>
                            <h2>RECEIVER INFO</h2>
                            <span><b>NAME: </b>{name}</span>
                            <span><b>SURNAME: </b> {surname}</span>
                            <span><b>EMAIL: </b> {email}</span>
                            <span><b>PHONE: </b> {phone}</span>
                            <span><b>CITY: </b> {city}</span>
                            <span><b>DELIVERY: </b> {delivery}</span>
                            <span><b>POST OFFICE: </b> {postOffice}</span>
                        </div>
                        <div className={styles.orderBuyingInfoPrice}>
                            <h2>ORDER INFO</h2>
                            <span><b>STATUS: </b>
                                {status === CONSTANTS.ORDER_STATUS_NEW && <FiberNewIcon className={styles.newIcon} fontSize='large' />}
                                {status === CONSTANTS.ORDER_STATUS_CONFIRMED && <LocalShippingIcon className={styles.deliveryIcon} fontSize='large' />}
                                {status === CONSTANTS.ORDER_STATUS_DECLINED && <DoDisturbAltIcon className={styles.declinedIcon} fontSize='medium' />}
                                {status === CONSTANTS.ORDER_STATUS_COMPLETED && <CheckIcon className={styles.checkIcon} fontSize='large'/>}
                            </span>
                            <span><b>TO PAY: </b> {price}$</span>
                        </div>
                    </div>
                    {
                        userRole === CONSTANTS.ROLE_ADMIN && status !== 'completed' && status !== 'declined' && (
                            <div className={styles.adminActions}>
                                {
                                    status === CONSTANTS.ORDER_STATUS_NEW && (
                                        <Button
                                            className={styles.confirmOrderButton}
                                            text='confirm'
                                            onClick={() => changeOrderStatus(CONSTANTS.ORDER_STATUS_CONFIRMED)}
                                            disabled={isFetching}
                                        />
                                    )
                                }
                                {
                                    status === CONSTANTS.ORDER_STATUS_CONFIRMED && (
                                        <Button
                                            className={styles.completeOrderButton}
                                            text='complete'
                                            onClick={() => changeOrderStatus(CONSTANTS.ORDER_STATUS_COMPLETED)}
                                            disabled={isFetching}
                                        />
                                    )
                                }
                                {
                                    status !== CONSTANTS.ORDER_STATUS_DECLINED && status !== CONSTANTS.ORDER_STATUS_COMPLETED && (
                                        <Button
                                            text='decline'
                                            onClick={() => changeOrderStatus(CONSTANTS.ORDER_STATUS_DECLINED)}
                                            disabled={isFetching}
                                        />
                                    )
                                }
                            </div> 
                        )
                    }
                </Collapse>  
            </div>
        </React.Fragment>

        
    );
};

export default OrderItem;