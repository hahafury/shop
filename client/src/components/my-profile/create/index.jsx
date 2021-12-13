import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './create.module.sass';
import Schemas from '../../../validator';

import CONSTANTS from '../../../constants';
import Input from '../../app/form/input';
import Button from '../../app/form/button';
import { createSmartphone } from '../../../actions/smartphones/action-creators';

const CreateForm = () => {
    const { userData } = useSelector(state => state.userStore);
    const dispatch = useDispatch()

    const navigate = useNavigate();
    
    userData && userData.role === CONSTANTS.ROLE_USER && navigate('/not-found');

    const onSubmitForm = values => {
        dispatch(createSmartphone(values));
    };

    const formik = useFormik({
        initialValues: {
            brand: '',
            model: '',
            display: '',
            processor: '',
            camera: '',
            operationSystem: '',
            color: '',
            memory: '',
            cellular: '',
            price: '',
            images: []
        },
        onSubmit: onSubmitForm,
        validationSchema: Schemas.CreateSmartphoneSchema
    })

    const onAddImages = (image, target) => {
        const reader = new FileReader();
        const newPreview = document.createElement('img');
        reader.onload = () => {
            newPreview.className = styles.imagePreview;
            newPreview.src = reader.result;
        }
        formik.values.images.push(image);
        newPreview.addEventListener('click', () => {
            newPreview.remove();
            formik.values.images.splice(formik.values.images.indexOf(image), 1);
        })
        reader.readAsDataURL(image);
        target.parentNode.insertBefore(newPreview, target.parentNode.lastChild);
    };

    return (
        <div className={styles.myProfileCreate}>
            <form className={styles.createForm} onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
                <h3>Brand</h3>
                <Input
                    name='brand'
                    placeholder='enter smartphone brand'
                    touched={formik.touched.brand}
                    errors={formik.errors.brand}
                />
                <h3>Model</h3>
                <Input
                    name='model'
                    placeholder='enter smartphone brand'
                    touched={formik.touched.model}
                    errors={formik.errors.model}
                />
                <h3>Display</h3>
                <Input
                    name='display'
                    placeholder='enter smartphone brand'
                    touched={formik.touched.display}
                    errors={formik.errors.display}
                />
                <h3>Cellular</h3>
                <Input
                    name='cellular'
                    placeholder='enter smartphone brand'
                    touched={formik.touched.cellular}
                    errors={formik.errors.cellular}
                />
                <h3>Processor</h3>
                <Input
                    name='processor'
                    placeholder='enter smartphone brand'
                    touched={formik.touched.processor}
                    errors={formik.errors.processor}
                />
                <h3>Camera</h3>
                <Input
                    name='camera'
                    placeholder='enter smartphone brand'
                    touched={formik.touched.camera}
                    errors={formik.errors.camera}
                />
                <h3>OS</h3>
                <Input
                    name='operationSystem'
                    placeholder='enter smartphone brand'
                    touched={formik.touched.operationSystem}
                    errors={formik.errors.operationSystem}
                />
                <h3>Color</h3>
                <Input
                    name='color'
                    placeholder='enter smartphone brand'
                    touched={formik.touched.color}
                    errors={formik.errors.color}
                />
                <h3>Memory</h3>
                <Input
                    name='memory'
                    placeholder='enter smartphone brand'
                    touched={formik.touched.memory}
                    errors={formik.errors.memory}
                />
                <h3>Price</h3>
                <Input
                    name='price'
                    placeholder='enter smartphone brand'
                    touched={formik.touched.price}
                    errors={formik.errors.price}
                />
                <input
                    type='file'
                    onChange={e => onAddImages(e.target.files[0], e.target)}
                    touched={formik.touched.images}
                    errors={formik.errors.images}
                />
                <Button text='create' />
            </form>
        </div>
    );
};

export default CreateForm;