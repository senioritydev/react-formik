import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { validationRegex } from '../../utils/validationRegex';

const validationSchema = yup.object().shape({
  firstname: yup.mixed()
      .required('First name is required'),
  email: yup.mixed()
      .required('Email is required')
      .test({
        test: (value: any) => {
            if (!value) {
                return false;
            }
            return validationRegex.email.test(value);
        },
        message: 'Invalid Email id',
    }),
    password: yup.mixed()
      .required('Password is required')
      .test({
        test: (value: any) => {
            if (!value) {
                return false;
            }
            return validationRegex.password.test(value);
        },
        message: 'Password should be of minimum 8 characters length and at least 1 number',
    }),
});

const LoginForm = ({ handleSubmit } : any) => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>User Sigup</h1>
      <form 
        onSubmit={formik.handleSubmit}
        className="login__form"
      >
        <TextField
          className="field"
          id="firstname"
          name="firstname"
          placeholder="firstname"
          label="First Name"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
        />
        <TextField
          className="field"
          id="lastname"
          name="lastname"
          placeholder="lastname"
          label="Last Name"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
        />
        <TextField
          className="field"
          id="email"
          name="email"
          placeholder="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          className="field"
          id="password"
          name="password"
          placeholder="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button 
          style={{marginTop: "20px"}}
          className="button"
          color="primary" 
          variant="contained"  
          type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;