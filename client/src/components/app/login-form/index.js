import React from 'react';
import { useFormik } from 'formik';
import styles from './login-form.module.sass';
import { Link } from 'react-router-dom';

import Input from '../form/input';
import Button from '../form/button';
import Form from '../form';

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        onSubmit: values => console.log(values)
            
    });

    return (
        // <form className={styles.loginForm} onSubmit = {formik.handleSubmit}>
        //     <Input
        //         placeholder='Login'
        //         id='login'
        //         name='login'
        //         value={formik.values.login}
        //         onChange={formik.handleChange}
        //     />
        //     <Input
        //         placeholder='Password'
        //         name='password'
        //         id='password'
        //         type='password'
        //         onChange={formik.handleChange}
        //         value={formik.values.password}
        //     />
        //     <Button text={'Login'} />
        //     <Link to = '/signup'>don't have an account?</Link>
        // </form>
        <Form values={{
            login: '',
            password: ''
        }}
        >
            <Input
                placeholder='Login'
                id='login'
                name='login'
                value={formik.values.login}
                onChange={formik.handleChange}
            />
            <Input
                placeholder='Password'
                name='password'
                id='password'
                type='password'
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <Button text={'Login'} />
            <Link to = '/signup'>don't have an account?</Link>
        </Form>
    );
};

export default LoginForm;