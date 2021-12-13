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
            .required('required'),
        name: yup.string()
            .required('required'),
        surname: yup.string()
            .required('required'),
        city: yup.string()
            .required('required'),
    }),
    CreateSmartphoneSchema: yup.object().shape({
        brand: yup.string().required('required'),
        model: yup.string().required('required'),
        display: yup.string().required('required'),
        cellular: yup.string().required('required'),
        processor: yup.string().required('required'),
        camera: yup.string().required('required'),
        operationSystem: yup.string().required('required'),
        color: yup.string().required('required'),
        memory: yup.string().required('required'),
        price: yup.string().required('required'),
        images: yup.array().length(5).required('required')
    }),
    ConfirmOfferSchema: yup.object().shape({
        name: yup.string().required('required'),
        surname: yup.string().required('required'),
        email: yup.string().required('required'),
        phone: yup.string().required('required'),
        city: yup.string().required('required'),
        delivery: yup.string().required('required'),
        postOffice: yup.string().required('required'),
        price: yup.string().required('required')
    })
};

export default validationSchemas;