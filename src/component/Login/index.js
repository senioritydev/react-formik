import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const validationSchema = yup.object({
  firstname: yup
    .string('Enter first name')
    .required('Email is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LoginForm = ({ handleSubmit }) => {
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