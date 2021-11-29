import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './login.module.sass';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Form from '../../components/app/form';
import Input from '../../components/app/form/input';
import Button from '../../components/app/form/button';
import Loading from '../../components/app/loading';

import { login, authClearError } from '../../actions/auth/action-creators';
import validationSchemas from '../../validator';
import Error from '../../components/app/error';

const LoginPage = () => {
    const navigate = useNavigate();

    const {
        isFetching,
        error
    } = useSelector(state => state.authStore);

    const { isLoggedIn } = useSelector(state => state.authStore);

    const dispatch = useDispatch();
    
    const onLogin = (values) => {
        dispatch(login(values));
    };

    const clearAuthErrors = () => {
        dispatch(authClearError());
    };

    useEffect(() => {
        isLoggedIn ? navigate('/') : window.scrollTo(0, 0);
        return dispatch(authClearError())
    }, [isLoggedIn]);

    return (
        <div className={styles.loginPage}>
            <Loading isLoading={isFetching} />
            {error && (
                <Error
                    data={error.data}
                    status={error.status}
                    clearError={clearAuthErrors}
                />
            )}
            <Form
                values={{
                    login: '',
                    password: ''
                }}
                onSubmitForm={onLogin}
                formValidationSchema={validationSchemas.LoginSchema}
            >
                <Input
                    placeholder='Login'
                    id='login'
                    name='login'
                />
                <Input
                    placeholder='Password'
                    name='password'
                    id='password'
                    type='password'
                />
                <Button text={isFetching ? 'Logging' : 'Login'} />
                <Link to = '/signup'>don't have an account?</Link>
            </Form>
        </div>
    );
};

export default LoginPage;