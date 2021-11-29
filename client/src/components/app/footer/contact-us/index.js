import React from 'react';
import styles from './contact-us.module.sass';
import { useFormik } from 'formik';
import Button from '../../form/button';
import Input from '../../form/input';


const ContactUs = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            message: ''
        },
        onSubmit: () => console.log(1)
    })
    return (
        <div className={styles.contactUsFormWrapper}>
            <form onSubmit={formik.handleSubmit}>
                <Input placeholder = 'Enter your email'/>
                <Button text={'CONTACT US'}/>
           </form>
        </div>
    );
};

export default ContactUs;