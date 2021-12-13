import React, { useEffect } from 'react';
import styles from './orders.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../../actions/orders/action-creators';

import OrderItem from './order-item';
import CONSTANTS from '../../../constants';
import Input from '../../app/form/input';
import Button from '../../app/form/button';
import Form from '../../app/form';


const Profile = () => {
    const dispatch = useDispatch();

    const { orders, isFetching } = useSelector(state => state.ordersStore);
    const { userData } = useSelector(state => state.userStore);

    useEffect(() => {
        dispatch(getOrders(''));
    }, [dispatch]);

    const searchOrder = values => {
        dispatch(getOrders(values.search))
    };

    return (
        <div className={styles.orders}>
            {
                userData && userData.role === CONSTANTS.ROLE_ADMIN && (
                    <Form
                        values={{
                            search: ''
                        }}
                        onSubmitForm={searchOrder}
                    >
                        <Input
                            name='search'
                            id='search'
                            placeholder='enter the order number'
                        />
                        <Button text='search'/>
                    </Form>
                )
            }
            {
                orders && userData && orders.length ? orders.map(order => (
                    <OrderItem
                        key={order.id}
                        {...order}
                        userRole={userData.role}
                        isFetching={isFetching}
                    />
                )) : (
                    <h2>You dont have any orders</h2>
                )
            }
        </div>
    );
};

export default Profile;