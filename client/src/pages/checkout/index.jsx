import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './checkout.module.sass';

import { confirmOrder, clearSuccessMessage } from '../../actions/orders/action-creators';
import OrderConfirmed from '../../components/order-confirmed';

import Form from '../../components/app/form';
import Button from '../../components/app/form/button';
import Input from '../../components/app/form/input';
import Loading from '../../components/app/loading';
import ShoppingCartItem from '../../components/shopping-cart/shopping-cart-item';
import Select from '../../components/app/form/select';
import Schems from '../../validator';

const Checkout = () => {
    const { userData } = useSelector(state => state.userStore);
    const { shoppingCart } = useSelector(state => state.shoppingCartStore);
    const { successMessage, isFetching } = useSelector(state => state.ordersStore)

    const dispatch = useDispatch();

    const calcToPay = () => {
        const reducer = (sum, currentItem) => sum + currentItem.amount * currentItem.Smartphone.price;
        return shoppingCart.reduce(reducer, 0);
    };

    const onConfirmOrder = (values) => {
        dispatch(
            confirmOrder(
                Object.assign(values, {
                    items: shoppingCart
                })
            )
        );
    };

    useEffect(() => dispatch(clearSuccessMessage()), [])

    return (
        <div className={styles.checkoutMain}>
            {
                userData && shoppingCart && shoppingCart.length > 0 && !successMessage && (
                    <div className={styles.checkoutPage}>
                        <div className = {styles.checkoutInfo}>
                            <h2>Checkout</h2>
                            <Form
                                values={{
                                    name: userData.name,
                                    surname: userData.surname,
                                    email: userData.email,
                                    phone: userData.phone,
                                    city: userData.city,
                                    delivery: 'nova poshta',
                                    postOffice: '',
                                    price: calcToPay()
                                }}
                                onSubmitForm={onConfirmOrder}
                                formValidationSchema={Schems.ConfirmOfferSchema}
                            >
                                <h3>name</h3>
                                <Input
                                    id='name'
                                    name='name'
                                />
                                <h3>surname</h3>
                                <Input
                                    id='surname'
                                    name='surname'
                                />
                                <h3>email</h3>
                                <Input
                                    id='email'
                                    name='email'
                                />
                                <h3>phone</h3>
                                <Input
                                    id='phone'
                                    name='phone'
                                />
                                <h3>city</h3>
                                <Input
                                    id='city'
                                    name='city'
                                />
                                <h3>delivery</h3>
                                <Select
                                    id='delivery'
                                    name='delivery'
                                    options={['nova poshta', 'ukr poshta']}
                                />
                                <h3>post office</h3>
                                <Input
                                    id='postOffice'
                                    name='postOffice'
                                />
                                <Button text = 'confirm'/>
                            </Form>
                        </div>
                        <div className = {styles.checkoutBuyInfo}>
                            {
                                shoppingCart.map(item => {
                                    return <ShoppingCartItem key={item.id} {...item}/>
                                })
                            }
                            <div className={styles.finalizeToPay}>
                                To pay: {calcToPay()} $
                            </div>
                        </div>
                    </div>
                )
            }
            {successMessage && <OrderConfirmed message={successMessage} />}
            {userData && shoppingCart && !successMessage && shoppingCart.length === 0 && <h2>you have no items in your cart</h2>}
            <Loading isLoading={isFetching}/>
        </div>
    );
};

export default Checkout;