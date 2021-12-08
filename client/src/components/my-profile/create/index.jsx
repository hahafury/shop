import React from 'react';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './create.module.sass';

import CONSTANTS from '../../../constants';
import Input from '../../app/form/input';
import Button from '../../app/form/button';

const CreateForm = () => {
    const { userData } = useSelector(state => state.userStore);
    const navigate = useNavigate();

    userData && userData.role === CONSTANTS.ROLE_USER && navigate('/not-found');

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
        onSubmit: values => console.log(values) 
    })

    const onAddImages = (image, target) => {   
        const reader = new FileReader();
        const newPreview = document.createElement('img');
        reader.onload = () => {
            newPreview.className = styles.imagePreview;
            newPreview.src = reader.result;
        }
        formik.values.images.push(image);
        newPreview.addEventListener('click',() => {
            newPreview.remove();
            formik.values.images.splice(formik.values.images.indexOf(image), 1);
        })
        reader.readAsDataURL(image);
        target.parentNode.insertBefore(newPreview, target.parentNode.lastChild);
    }

    return (
        <div className = {styles.myProfileCreate}>
            <form className={styles.createForm} onSubmit={formik.handleSubmit} onChange={formik.handleChange}>
                <h3>Brand</h3>
                <Input name='brand' placeholder='enter smartphone brand'/>
                <h3>Model</h3>
                <Input name='model' placeholder='enter smartphone brand' />
                <h3>Display</h3>
                <Input name='display' placeholder='enter smartphone brand'/>
                <h3>Cellular</h3>
                <Input name='cellular' placeholder='enter smartphone brand'/>
                <h3>Processor</h3>
                <Input name='processor' placeholder='enter smartphone brand'/>
                <h3>Camera</h3>
                <Input name='camera' placeholder='enter smartphone brand' />
                <h3>OS</h3>
                <Input name='operationSystem' placeholder='enter smartphone brand'/>
                <h3>Color</h3>
                <Input name='color' placeholder='enter smartphone brand' />
                <h3>Memory</h3>
                <Input name='memory' placeholder='enter smartphone brand'/>
                <h3>Price</h3>
                <Input name='price' placeholder='enter smartphone brand' />
                <input
                    type='file'
                    onChange={e => onAddImages(e.target.files[0], e.target)}
                />
                <Button text ='create'/>
            </form>
        </div>
    )
};

export default CreateForm;