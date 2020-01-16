import React, {useState} from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography } from '@material-ui/core';



const Login = ({ 
    values,
    isSubmitting,
    handeBlur,
    handleChange,

}) => {
       return (
        <>
        <Typography variant="h5" component="h2">Login</Typography>
        <Form noValidate>
        <TextField
        type='email'
        name='email'
        label='Email'
        onBlur={handeBlur}
        onChange={handleChange}
        value={values.email}
        fullWidth
        />
        <ErrorMessage name="email" component='div'/>

        <TextField
        type='text'
        name='password'
        label='Password'
        onBlur={handeBlur}
        onChange={handleChange}
        value={values.password}
        fullWidth
        />
        <ErrorMessage name="password" component='div'/>
       
        <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">Login</Button>
        </Form>
        </>
    );
}

export default withFormik({
    mapPropsToValues(){
        return{
            email: '',
            password: '', 
        };
    },

    validationSchema: Yup.object().shape({
       
        email: Yup.string().email('Must be a valid email').required('Email is required'),
        password: Yup.string().min(5, 'Password must be at least 5 character ').max(11, 'Password must be 11 caharacter in highest').required('Password is required'),
    }),
    handleSubmit(values, {resetForm, setSubmitting, }){
    setTimeout(() => {
        //Form submission takes time
        console.log(values)
        setSubmitting(false);
    }, 1000);
}
})(Login);