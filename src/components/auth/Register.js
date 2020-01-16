import React, {useState} from 'react';
import {withFormik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Typography } from '@material-ui/core';



const Register = ({ 
    values,
    isSubmitting,
    handeBlur,
    handleChange,

}) => {
       return (
           <>
           <Typography variant="h5" component="h2">Register</Typography>
        <Form noValidate>
        <TextField
        type='text'
        name='firstName'
        label='First Name'
        onBlur={handeBlur}
        onChange={handleChange}
        value={values.firstName}
        fullWidth
        />
        <ErrorMessage name="firstName" component='div'/>

        <TextField
        type='text'
        name='lastName'
        label='Last Name'
        onBlur={handeBlur}
        onChange={handleChange}
        value={values.lastName}
        fullWidth
        />
        <ErrorMessage name="lastName" component='div'/>

        <TextField
        type='text'
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

        <TextField
        type='text'
        name='confirmPassword'
        label='Confirm Password'
        onBlur={handeBlur}
        onChange={handleChange}
        value={values.confirmPassword}
        fullWidth
        />
        <ErrorMessage name="confirmPassword" component='div'/>

        
        <Button disabled={isSubmitting} type="submit" variant="contained" color="primary">Register</Button>
        </Form>
        </>
    );
}

export default withFormik({
    mapPropsToValues(){
        return{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    },

    validationSchema: Yup.object().shape({
        firstName: Yup
        .string()
        .min(2, 'First Name must be 2 character')
        .max(5, 'First Name only can be 5 character in highest')
        .required('First Name is Required'),

        lastName: Yup
        .string()
        .min(2, 'First Name must be 2 character')
        .max(5, 'First Name only can be 5 character in highest')
        .required('First Name is Required'),

        email: Yup.string().email('Must be a valid email').required('Email is required'),
        password: Yup.string().min(5, 'Password must be at least 5 character ').max(11, 'Password must be 11 caharacter in highest').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null, ], "Password don't match").required('Confirm password is required')
    }),
    handleSubmit(values, {resetForm, setSubmitting, }){
    setTimeout(() => {
        //Form submission takes time
        console.log(values)
        setSubmitting(false);
    }, 1000);
}
})(Register);