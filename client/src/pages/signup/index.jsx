import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './signup.module.sass';
import { Link, useNavigate } from 'react-router-dom';

import Form from '../../components/app/form';
import Input from '../../components/app/form/input';
import Button from '../../components/app/form/button';
import Loading from '../../components/app/loading';

import { signup, authClearError } from '../../actions/auth/action-creators';
import validationSchemas from '../../validator';
import Error from '../../components/app/error';

const SignupPage = () => {
    const { isLoggedIn } = useSelector(state => state.authStore);
    
    const navigate = useNavigate()
    
    useEffect(() => {
        isLoggedIn ? navigate('/') : window.scrollTo(0, 0);
        return dispatch(authClearError());
    }, []);

    const {
        isFetching,
        error
    } = useSelector(state => state.authStore);

    const dispatch = useDispatch();
    
    const onSignup = (values) => {
        dispatch(signup(values));
    };

    const clearAuthErrors = () => {
        dispatch(authClearError());
    };

    return (
        <div className={styles.signupPage}>
            <Loading isLoading={isFetching} />

            <Form
                values={{
                    login: '',
                    password: '',
                    confirmPassword: '',
                    email: '',
                    confirmEmail: '',
                    phone: ''
                }}
                onSubmitForm={onSignup}
                formValidationSchema={validationSchemas.SignupSchema}
            >
                <Input
                    placeholder='Login'
                    id='login'
                    name='login'
                />
                <Input
                    placeholder='Password'
                    id='password'
                    name='password'
                    type='password'
                />
                <Input
                    placeholder='Confirm password'
                    id='confirmPassword'
                    name='confirmPassword'
                    type='password'
                />
                <Input
                    placeholder='Email'
                    id='email'
                    name='email'
                    type='email'
                />
                <Input
                    placeholder='Confirm email'
                    id='confirmEmail'
                    name='confirmEmail'
                />
                <Input
                    placeholder='Phone'
                    id='phone'
                    name='phone'
                />
                <Button text={isFetching ? 'Submitting...' : 'Signup'} />
                <Link to = '/login'>already have an account?</Link>
            </Form>
        </div>
    );
};

export default SignupPage;