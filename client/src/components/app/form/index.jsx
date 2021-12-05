import React from 'react';
import { isFunction, useFormik } from 'formik';
import styles from './form.module.sass';

import CONSTANTS from '../../../constants';

const Form = ({children, values, onSubmitForm, formValidationSchema}) => {
    const formik = useFormik({
        initialValues: values,
        onSubmit: onSubmitForm,
        validationSchema: formValidationSchema
    });
    return (
        <form className={styles.form} onSubmit={formik.handleSubmit} onClick={event => event.stopPropagation()}>
            {
                children && children.map((child, index) => {
                    return (
                        <React.Fragment key = {index}>
                            {
                                isFunction(child.type) && child.type(child).type === CONSTANTS.COMPONENT_TYPE_INPUT ? (
                                    {
                                        ...child,
                                        props: {
                                            ...child.props,
                                            value: formik.values[child.props],
                                            onChange: formik.handleChange,
                                            touched: formik.touched[child.props.name],
                                            errors: formik.errors[child.props.name]
                                        }
                                    }
                                ) : (
                                    child
                                )      
                            }
                            {
                                formik.touched[child.props.name] && formik.errors[child.props.name] && <h3>{formik.errors[child.props.name]}</h3>
                            }
                        </React.Fragment>
                    )
                })
            }
        </form>
    );
};

export default Form;