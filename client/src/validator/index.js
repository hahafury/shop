import * as yup from 'yup';
import CONSTANTS from '../constants';
import isValidEmail from '../helpers/is-valid-email';
import isValidPhone from '../helpers/is-valid-number';

const validationSchemas = {
    LoginSchema: yup.object().shape({
        login: yup.string()
            .min(CONSTANTS.MIN_LOGIN_LENGTH)
            .required('required'),
        password: yup.string()
            .min(CONSTANTS.MIN_PASSWORD_LENGTH)
            .required('required')
    }),
    SignupSchema: yup.object().shape({
        login: yup.string()
            .min(CONSTANTS.MIN_LOGIN_LENGTH)
            .required('required'),
        password: yup.string()
            .min(CONSTANTS.MIN_PASSWORD_LENGTH)
            .required('required'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'passwords must match')
            .required('required'),
        email: yup.string()
            .required('required'),
        confirmEmail: yup.string()
            .oneOf([yup.ref('email'), null], 'emails must match')
            .required('required'),
        phone: yup.string()
            .test('check-password', 'invalid phone number', value => value && isValidPhone(value))
            .required('required') 
    })
};

export default validationSchemas;